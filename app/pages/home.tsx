import { Component } from 'react';
import logoToko from '../assets/img/logo.png';

export default class Home extends Component {
  render() {
    return (
      <div className="flex w-screen">
        <aside>
          <div className="relative w-fit bg-base-300 flex h-screen flex-col items-start ">
            <div className="h-full flex flex-col">
              <div className="w-full flex flex-row justify-center py-3">
                <img src={logoToko} alt="logo toko" className='w-16 h-16' />
              </div>
              <div className="h-[90vh]">
                <ul className="menu w-full grow">
                  {/* List item */}
                  <li>
                    <button
                      className=""
                      data-tip="Homepage"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                        className="my-1.5 inline-block size-4"
                      >
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      </svg>
                      <span className="is-drawer-close:hidden">Homepage</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex-1 pb-5 px-3">
                <button
                      className="btn btn-ghost btn-xs"
                      data-tip="Homepage"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                        className="my-1.5 inline-block size-4"
                      >
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      </svg>
                      <span className="mx-3">Logout</span>
                    </button></div>
            </div>
          </div>
        </aside>

        <section className="flex-1 relative h-screen overflow-y-auto overflow-x-hidden">
          <div className="bg-base-200 px-2 fixed w-full">&nbsp;</div>
          <div className="bg-transparent-500 mt-3 min-h-[98vh]">&nbsp;</div>
          <div className="fixed bottom-0 bg-base-200 w-full">
            <h6>Ini adalah footer</h6>
          </div>
        </section>
      </div>
    );
  }
}
