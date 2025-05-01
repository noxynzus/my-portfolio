import React from "react";
import LinkButtonLinear from "@/app/components/buttons/LinkButtonLinear";

export default function CommingSoon() {
  return (
    <div className=" h-auto w-full flex flex-col justify-center items-center space-y-10 my-10">
      <div className="text-5xl font-bold">Comming Soon</div>
      <p>This page is under construction.</p>
      <LinkButtonLinear href="/" text="Go to Homepage" />

      <div
        className="absolute inset-x-0 -top-40 -z-50 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative -z-10 left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div className="relative -z-10 left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#00A6F4] via-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%+30rem)] sm:w-[72.1875rem]"></div>
      </div>
    </div>
  );
}
