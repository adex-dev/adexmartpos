import logo from '../assets/img/login.webp';
import { Form, Input, Button, Title } from '../components/ui';
import { formatRupiah } from '../components/utils/currency';
import { useState, useEffect } from 'react';

export default function App() {
  const [price, setPrice] = useState('');

  useEffect(() => {
    setPrice(formatRupiah(100000));
  }, []);
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="hover-3d">
            {/* content */}
            <figure className="w-52 rounded-2xl">
              <img src={logo} alt="Tailwind CSS 3D hover" />
            </figure>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <div className="card-body">
              <Title size="lg">Login</Title>
              <h3>{price}</h3>
              <fieldset className="fieldset">
                <Form onSubmit={(e) => e.preventDefault()}>
                  <Input label="Email" type="email" placeholder="email..." />
                  <Input
                    label="Password"
                    type="password"
                    placeholder="password"
                  />
                  <Button
                    className="btn btn-accent text-white"
                    full
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
