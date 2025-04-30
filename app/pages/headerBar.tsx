import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import RoundedLinearBtn from "../components/buttons/rounded-linear-btn";

export default function HeaderBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
        {/* <div className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80 rounded-full left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] translate-x-1/2 bg-linear-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div> */}

      <div
        className="absolute -z-0 inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative rounded-full left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] translate-x-1/2 bg-linear-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex lg:hidden items-center justify-between z-50">
        {/* Logo  */}
        <div className="flex flex-row gap-5 w-auto h-full items-center min-w-8 outline-gray-500 outline-opacity-30">
          <div className="rounded-full right-2 p-2 h-[48px] w-[48px] items-center flex justify-center border-1 border-gray-500 border-opacity-30 bg-linear-to-t from-[#161614] to-[#2A2A2A]">
            <div className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              A
            </div>
          </div>
          <label
            htmlFor="logo"
            className="text-3xl font-bold  bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
          >{`Atthawat Aui`}</label>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          type="button"
          className="z-40 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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

      {/* Desktop Menu */}
      <nav className=" hidden navbar lg:flex flex-row justify-between items-center  gap-2  border-1 border-gray-500 border-opacity-30  rounded-full  p-2 z-50">
        {/* Logo  */}
        <div className="flex flex-row gap-5 w-auto h-full items-center min-w-8 outline-gray-500 outline-opacity-30">
          <div className="rounded-full right-2 p-2 h-[48px] w-[48px] items-center flex justify-center border-1 border-gray-500 border-opacity-30 bg-linear-to-t from-[#161614] to-[#2A2A2A]">
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
        <div className="flex flex-row gap-4 z-40">
          <ul className="flex flex-row gap-4 space-x-3">
            <li>
              <a
                href="#"
                className="text-white hover:text-[#00A6F4] cursor-pointer"
              >
                Home
              </a>
            </li>
            <li className="text-white hover:text-[#00A6F4] cursor-pointer">
              <a href="#">About</a>
            </li>
            <li className="text-white hover:text-[#00A6F4] cursor-pointer">
              <a href="/projects">Project</a>
            </li>
            <li className="text-white hover:text-[#00A6F4] cursor-pointer">
              <a href="#">Testimonial</a>
            </li>
          </ul>
        </div>

        {/* Contact Me */}
        <div className="z-50">
          <RoundedLinearBtn onClick={() => {}} />
        </div>
      </nav>

      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <Dialog
        transition
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        className="fixed inset-0 z-50 overflow-y-auto transition duration-300 ease-out data-closed:opacity-0"
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
                <li className="text-white ">
                  <a href="#" className="hover:text-[#00A6F4] cursor-pointer">
                    Home
                  </a>
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
