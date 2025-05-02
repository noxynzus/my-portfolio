// import Image from "next/image";

import React from "react";
import CommingSoon from "../commingsoon/commingSoon";

export default function Projects() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 z-[100]">
      <div className="h-full w-full  flex flex-col justify-center items-center ">
        <CommingSoon />
      </div>
    </div>
  );
}
