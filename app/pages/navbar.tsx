import logoToko from '@/assets/img/logo.png';
import { Icon } from '@/components/icons/icons';
import { Link } from 'react-router-dom';
export default function NavBar() {
  const HandleClick = (text) => {
    console.log(text);
  };
  return (
    <>
      <aside>
        <div className="relative w-fit bg-base-300 flex h-screen flex-col items-start ">
          <div className="h-full flex flex-col">
            <div className="w-full flex flex-row justify-center py-3">
              <img src={logoToko} alt="logo toko" className="w-16 h-16" />
            </div>
            <div className="h-[90vh]">
              <ul className="menu w-full grow menuhome">
                <li>
                  <button onClick={() => HandleClick('/')}>
                    <Icon name="Dashboard" size={30} /> <span>Dashboard</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => HandleClick('/transaction')}>
                    <Icon name="Transaksi" size={30} /> <span>Transaction</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => HandleClick('/report')}>
                    <Icon name="Report" size={30} /> <span>Laporan</span>
                  </button>
                </li>
                <li>
                  <Link to="product">
                    <Icon name="Product" size={30} /> <span>Product</span>
                  </Link>
                </li>
                <li>
                  <button onClick={() => HandleClick('/stock')}>
                    <Icon name="Stock" size={30} /> <span>Stock</span>
                  </button>
                </li>
                <li className="mt-10">
                  <button onClick={() => HandleClick('/settings')}>
                    <Icon name="Settings" size={30} /> <span>Settings</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex-1 pb-5 px-3">
              <button onClick={() => HandleClick('/logout')} className="icons">
                <Icon name="Logout" /> <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
