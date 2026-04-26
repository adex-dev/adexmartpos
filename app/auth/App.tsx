import { useEffect, useState } from 'react';
import background from '../assets/background.svg';
import logo from '../assets/img/login.webp';
import logoToko from '../assets/img/logo.png';
import { Button, Form, Input, Title } from '../components/ui';
export default function App() {
  const [err, setErr] = useState('');
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (typeof name !== 'string' || name.trim() === '') {
      setErr('Periksa kembali username dan password anda.!');
      return;
    }
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof form.username !== 'string' || form.username.trim() === '') {
      setErr('Periksa kembali username anda.!');
      return;
    }
    if (typeof form.password !== 'string' || form.password.trim() === '') {
      setErr('Periksa kembali password anda.!');
      return;
    }
    setErr('');
    console.log(form);
    // { email: "...", password: "..." }
  };
  useEffect(() => {
    if (!err) return;

    const timer = setTimeout(() => {
      setErr(''); // hapus error setelah 3 detik
    }, 3000);

    return () => clearTimeout(timer);
  }, [err]);
  return (
    <>
      <div className={`hero h-screen relative `}>
        <img src={background} alt="background" className='h-full w-full absolute' />
        <div className="flex w-full h-full justify-center flex-col items-center">
          <div className="w-1/2 h-[55%]">
            <div className="flex  w-full h-full">
              <div className="card bg-base-100  shrink-0 max-w-full w-2/3 mx-3 shadow-2xl pb-5">
                <div className="card-body">
                  <center><div >
                    <img src={logoToko} className='w-32 h-32' alt="logo toko"/>
                    <Title size="lg">Login</Title>
                    </div></center>
                  <fieldset className="fieldset">
                    <Form onSubmit={handleSubmit}>
                      <Input
                        autoComplete="off"
                        label="Username"
                        type="text"
                        name="username"
                        placeholder="Username..."
                        value={form.username}
                        onChange={handleChange}
                      />
                      <Input
                        autoComplete="off"
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="password"
                        value={form.password}
                        onChange={handleChange}
                      />
                      <Button
                        className="btn btn-accent text-white"
                        full
                        type="submit"
                      >
                        Submit
                      </Button>
                      {err && (
                        <div
                          role="alert"
                          className="alert alert-error alert-dash my-3"
                        >
                          <span>{err}</span>
                        </div>
                      )}
                    </Form>
                  </fieldset>
                </div>
              </div>
              <div className="hover-3d w-96">
                {/* content */}
                <figure className="relative w-full h-full rounded-2xl">
                  <img src={logo} alt="Tailwind CSS 3D hover" className=' h-full'/>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
