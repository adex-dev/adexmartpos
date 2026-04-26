import { useEffect, useState } from 'react';
import logoToko from '../assets/img/logo.png';
import { Icon } from '../components/icons';
import { Adexmart } from '../components/ui/Informations';
import { StatsGrid } from '../components/ui/statsgrid';
const pad = (n: number) => n.toString().padStart(2, '0');
export default function Home() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
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
    <div className="flex w-screen">
      <aside>
        <div className="relative w-fit bg-base-300 flex h-screen flex-col items-start ">
          <div className="h-full flex flex-col">
            <div className="w-full flex flex-row justify-center py-3">
              <img src={logoToko} alt="logo toko" className="w-16 h-16" />
            </div>
            <div className="h-[90vh]">
              <ul className="menu w-full grow menuhome">
                <li>
                  <a href="#">
                    <Icon name="Dashboard" size={30} /> <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Icon name="Transaksi" size={30} /> <span>Transaction</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Icon name="Report" size={30} /> <span>Laporan</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Icon name="Product" size={30} /> <span>Product</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Icon name="Stock" size={30} /> <span>Stock</span>
                  </a>
                </li>
                <li className="mt-10">
                  <a href="#">
                    <Icon name="Settings" size={30} /> <span>Settings</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 pb-5 px-3">
              <a href="#" className="icons">
                <Icon name="Logout" /> <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
      </aside>
      <section className="flex-1 relative overflow-auto h-screen">
        {/* Header */}
        <div className="bg-base-200 px-3 h-12 flex items-center justify-between sticky top-0 z-10">
          <p>
            Selamat Datang : <strong>Akmad Nudin</strong>
          </p>
          <p className="px-3">{`${h}:${m}:${s}`} WIB</p>
        </div>

        {/* Content */}
        <div className="bg-transparent px-3 pt-4 min-h-[91vh]">
          <StatsGrid transactions={120} revenue={3500000} users={45}/>
          <Adexmart/>
        </div>

        {/* Footer */}
        <div className="h-8 flex items-center justify-end px-3 sticky bottom-0 bg-base-200">
          <h6 className="text-xs">power By @adexmart 2026</h6>
        </div>
      </section>
    </div>
  );
}
