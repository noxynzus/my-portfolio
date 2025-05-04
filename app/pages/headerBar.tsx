"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import RoundedLinearBtn from "../components/buttons/rounded-linear-btn";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavigationPath } from "../configs/styles/system/NavigationConfig";
import LinkButtonLinear from "../components/buttons/LinkButtonLinear";

export default function HeaderBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const curPath = usePathname();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll !== 0 && currentScroll > 80) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      translate="yes"
      className="sticky top-5 z-[1000] translate-y-3transition duration-300 ease-out data-closed:opacity-0 mx-8"
    >
      {/* Desktop Menu */}
      <nav className=" hidden navbar lg:flex flex-row justify-between items-center  gap-2  border-1 border-gray-500 border-opacity-30  rounded-full  py-1 px-2 z-50 ">
        {!show && (
          <div className="absolute inset-0 -z-0 w-full h-full rounded-full bg-white/5 backdrop-blur-xs border-1 border-gray-500 border-opacity-30"></div>
        )}
        {/* <div className="absolute inset-0 -z-0 w-full h-full rounded-full bg-white/5 backdrop-blur-xs border-1 border-gray-500 border-opacity-30"></div> */}

        {/* Logo  */}
        <div className="flex flex-row gap-5 w-auto h-full items-center min-w-8 outline-gray-500 outline-opacity-30 z-40">
          <div className="rounded-full right-2 p-2 h-[48px] w-[48px] items-center flex justify-center border-1 border-gray-500 border-opacity-30 bg-linear-to-t from-[#161614] to-[#2A2A2A]">
            <h6 className="text-3xl font-bold bg-linear-to-r from-[#0070f3]  to-[#00a6f4] bg-clip-text text-transparent animate-gradient-x">
              A
            </h6>
          </div>
          <label
            htmlFor="logo"
            className="text-3xl font-bold bg-linear-to-r from-[#0070f3]  to-[#00a6f4] bg-clip-text text-transparent animate-gradient-x"
          >{`Atthawat Aui`}</label>
        </div>

        {/* Navigation */}
        <div className="flex flex-row gap-4 z-40">
          <ul className="flex flex-row gap-4 space-x-3">
            {NavigationPath.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={` hover:text-[#00A6F4] cursor-pointer ${
                    curPath === item.path ? "text-[#00A6F4]" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Me */}
        <div className="z-50">
          <LinkButtonLinear href="/pages/contactme" />
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="flex lg:hidden items-center justify-between z-50">
        <div className="absolute inset-0 w-full h-full bg-white/5 rounded-full backdrop-blur-xs z-10"></div>

        {/* Logo  */}
        <div className="flex flex-row gap-5 w-auto h-full items-center min-w-8 outline-gray-500 outline-opacity-30 z-40">
          <div className="rounded-full right-2 p-2 h-[48px] w-[48px] items-center flex justify-center border-1 border-gray-500 border-opacity-30 bg-linear-to-t from-[#161614] to-[#2A2A2A]">
            <div className="bg-linear-to-r from-[#0070f3]  to-[#00a6f4] bg-clip-text text-transparent">
              A
            </div>
          </div>
          <label
            htmlFor="logo"
            className="text-3xl font-bold  bg-linear-to-r from-[#0070f3]  to-[#00a6f4] bg-clip-text text-transparent"
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
                {NavigationPath.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.path}
                      className="hover:text-[#00A6F4] cursor-pointer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-shrink-0 gap-4 z-50 items-center w-full justify-center">
                {/* Contact Me */}
                <RoundedLinearBtn onClick={() => {}} style="w-full" />
              </div>
              <div className="mt-6 flex flex-shrink-0 gap-4"></div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      {/* {curPath !== "/pages/contactme" && (
        <div
          className="absolute z-[5] inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative z-[5] rounded-full left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] translate-x-1/2 bg-linear-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
      )} */}
    </header>
  );
}
