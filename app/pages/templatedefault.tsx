import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import background from '../assets/background.svg';
import NavBar from './navbar';
import TopBar from './topbar';
export default function TemplateDefault() {
  const checkLogin = () => {
    const expirationTime = Date.now();
    const data = localStorage.getItem('login');
    if (!data) {
      //   window.location.href = '/logout';
      return;
    }
    let validasi;
    try {
      validasi = JSON.parse(data);
    } catch (e) {
      //   window.location.href = '/logout';
      return;
    }
    if (
      !Array.isArray(validasi) ||
      validasi.length < 2 ||
      !validasi[1].hasOwnProperty('expired')
    ) {
      //   window.location.href = '/logout';
      return;
    }

    // Check if the expiration time is greater than the stored 'expired' time
    if (expirationTime > validasi[1]['expired']) {
      window.location.href = '/logout';
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);
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
