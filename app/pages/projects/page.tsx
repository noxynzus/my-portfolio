// import Image from "next/image";

import React from "react";
import CommingSoon from "../commingsoon/commingSoon";

export default function Projects() {
  const coming = true;
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 lg:py-8 z-40">
      {coming ? (
        <div className="h-full w-full  flex flex-col justify-center items-center z-40">
          <CommingSoon />
        </div>
      ) : (
        <div>Projects</div>
      )}

      {/* <div
        className="absolute inset-x-0 -top-40 -z-50 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative -z-10 left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div> */}

      {/* <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div className="relative -z-10 left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div> */}
    </div>
  );
}
