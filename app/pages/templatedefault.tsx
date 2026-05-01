import background from '@/assets/background.svg';
import { Outlet } from 'react-router-dom';
import NavBar from './navbar';
import TopBar from './topbar';
export default function TemplateDefault() {
  return (
    <>
      <div className={`hero h-screen relative `}>
        <img
          src={background}
          alt="background"
          className="h-full w-full absolute"
        />
        <div className="flex w-screen">
          <NavBar />
          <section className="flex-1 relative overflow-auto h-screen">
            <TopBar />
            <Outlet />
            {/* Footer */}
            <div className="h-8 flex items-center justify-end px-3 sticky bottom-0 bg-base-200">
              <h6 className="text-xs">power By @adexmart 2026</h6>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
