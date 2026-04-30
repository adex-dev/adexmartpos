import { useEffect, useState } from 'react';
import background from '../assets/background.svg';
import logo from '../assets/img/login.webp';
import logoToko from '../assets/img/logo.png';
import { showAlert } from '../components/utils/alert';
import { Button, Form, Input, Title } from '../components/ui';
import { PostLogin } from '../components/services/Api';
import { useAuth } from '@/components/services/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function AppLogin() {
  const { setAccessToken } = useAuth();
  const navigate = useNavigate();
  const address = 'public/login';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (typeof form.username !== 'string' || form.username.trim() === '') {
      setErr('Periksa kembali username anda.!');
    }
    if (typeof form.password !== 'string' || form.password.trim() === '') {
      setErr('Periksa kembali password anda.!');
    }
    if (err) {
      console.log(err);
      showAlert({
        actions: 'error',
        title: 'kesalahan',
        timers: 2000,
        message: err,
      });
      return;
    }
    setErr('');
    try {
      let data = await PostLogin({
        address: address,
        form: {
          password: form.password,
          usernamekeys: form.username,
          keys: 'adexmart',
        },
      });
      if (data.success === true || data.status === true) {
        data = data.data;
        setAccessToken(data.token);
        showAlert({
          actions: 'success',
          title: 'Success',
          timers: 2000,
          message: 'berhasil login',
        });
        const timer = setTimeout(() => {
          navigate('/');
        }, 2500);
      } else {
        showAlert({
          actions: 'error',
          title: 'kesalahan',
          timers: 2000,
          message: data.message,
        });
        console.log(data.message);
      }
    } catch (error) {
      showAlert({
        actions: 'error',
        title: 'kesalahan',
        timers: 2000,
        message: error.message,
      });
      console.log(error.message);
    }
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
        <img
          src={background}
          alt="background"
          className="h-full w-full absolute"
        />
        <div className="flex w-full h-full justify-center flex-col items-center">
          <div className="w-1/2 h-[55%]">
            <div className="flex  w-full h-full">
              <div className="card bg-base-100  shrink-0 max-w-full w-2/3 mx-3 shadow-2xl pb-5">
                <div className="card-body">
                  <center>
                    <div>
                      <img
                        src={logoToko}
                        className="w-32 h-32"
                        alt="logo toko"
                      />
                      <Title size="lg">Login</Title>
                    </div>
                  </center>
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
                  <img
                    src={logo}
                    alt="Tailwind CSS 3D hover"
                    className=" h-full"
                  />
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
