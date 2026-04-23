import logo from '../assets/img/login.webp';
import { Form, Input, Button, Title } from '../components/ui';
import { useState, useEffect } from 'react';

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
                    <div role="alert" className="alert alert-error alert-dash">
                      <span>{err}</span>
                    </div>
                  )}
                </Form>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
