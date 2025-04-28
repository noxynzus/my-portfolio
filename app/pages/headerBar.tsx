import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import RoundedLinearBtn from "../components/buttons/rounded-linear-btn";

export default function HeaderBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      {/* Mobile Menu Button */}
      <div className="flex lg:hidden items-center justify-between">
        {/* Logo  */}
        <div className="flex flex-row gap-5 w-auto h-full items-center min-w-8 outline-gray-500 outline-opacity-30">
          <div className="rounded-full right-2 p-2 h-full w-[48px] items-center flex justify-center border-1 border-gray-500 border-opacity-30">
            A
          </div>
          <label
            htmlFor="logo"
            className="text-3xl font-bold text-linear-to-t from-sky-500 to-indigo-500"
          >{`Atthawat Aui`}</label>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="size-8"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <nav className="hidden navbar lg:flex flex-row justify-between items-center  gap-2  border-1 border-gray-500 border-opacity-30  rounded-full  p-2">
        {/* Logo  */}
        <div className="flex flex-row gap-5 w-auto h-full items-center min-w-8 outline-gray-500 outline-opacity-30">
          <div className="rounded-full right-2 p-2 h-full w-[48px] items-center flex justify-center border-1 border-gray-500 border-opacity-30">
            <h6 className="text-3xl font-bold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
              A
            </h6>
          </div>
          <label
            htmlFor="logo"
            className="text-3xl font-bold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x"
          >{`Atthawat Aui`}</label>
        </div>

        {/* Navigation */}
        <div className="flex flex-row gap-4">
          <ul className="flex flex-row gap-4 space-x-3">
            <li className="text-white">
              <a href="#">Home</a>
            </li>
            <li className="text-white">
              <a href="#">About</a>
            </li>
            <li className="text-white">
              <a href="#">Project</a>
            </li>
            <li className="text-white">
              <a href="#">Testimonial</a>
            </li>
          </ul>
        </div>

        {/* Contact Me */}
        <div>
          <RoundedLinearBtn onClick={() => {}} />
          {/* <button className="rounded-full right-2 p-2  bg-linear-to-t from-sky-500 to-indigo-500 h-full w-[128px] items-center flex justify-center">
            Contact Me
          </button> */}
        </div>
      </nav>

      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <Dialog
        transition
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        className="fixed inset-0 z-10 overflow-y-auto transition duration-300 ease-out data-closed:opacity-0"
      >
        <DialogPanel>
          <div className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto max-w-xs p-2 sm:max-w-md">
            <div className="flex h-full flex-col bg-[#161614] p-6 shadow-xl opacity-90">
              {/* Close */}
              <div className="flex flex-row items-end justify-end w-full">
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-100"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <ul className="flex flex-1 flex-col gap-4 space-y-6 ">
                <li className="text-white">
                  <a href="#">Home</a>
                </li>
                <li className="text-white">
                  <a href="#">About</a>
                </li>
                <li className="text-white">
                  <a href="#">Project</a>
                </li>
                <li className="text-white">
                  <a href="#">Testimonial</a>
                </li>
              </ul>
              <div className="mt-6 flex flex-shrink-0 gap-4">
                <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                  Contact Me
                </button>
              </div>
              <div className="mt-6 flex flex-shrink-0 gap-4"></div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
