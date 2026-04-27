import logoToko from '../assets/img/logo.png';
import { Icon } from '../components/icons/icons';
export default function NavBar() {
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
                  <a href="/">
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
                  <a href="/product">
                    <Icon name="Product" size={30} /> <span>Product</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Icon name="Stock" size={30} /> <span>Stock</span>
                  </a>
                </li>
                <li className="mt-10">
                  <a href="/settings">
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
    </>
  );
}
