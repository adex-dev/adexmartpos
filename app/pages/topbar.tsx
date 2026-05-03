import { useAuth } from '@/components/services/AuthContext';
import { parseUser } from '@/components/utils/datausers';
import { useEffect, useState } from 'react';
const pad = (n: number) => n.toString().padStart(2, '0');
export default function TopBar() {
  const [time, setTime] = useState(() => new Date());
  const [rawUser, setDataUsers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const dataUser = parseUser(user);
    dataUser ? setDataUsers(dataUser) : setDataUsers([]);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const h = pad(time.getHours());
  const m = pad(time.getMinutes());
  const s = pad(time.getSeconds());
  return (
    <>
      <div className="bg-base-200 px-3 h-12 flex items-center justify-between sticky top-0 z-10">
        <p>
          Selamat Datang : <strong>{rawUser['FullName']}</strong>
          <br></br>
          Role : <strong>{rawUser['Roles']}</strong>
        </p>
        <p className="px-3">{`${h}:${m}:${s}`} WIB</p>
      </div>
    </>
  );
}
