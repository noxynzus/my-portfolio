import Image from "next/image";
import React from "react";
import OutlineRoundLinearBtn from "../components/buttons/outline-round-linear-btn";

export default function HeroContent() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5 lg:py-20 justify-center items-center text-center text-white relative isolate ">
      {/* Left */}
      <div className="w-full flex flex-col justify-center sm:justify-start md:justify-center  items-center  sm:items-start md:items-center gap-4 text-left sm:text-center md:text-center">
        <h6 className="text-lg md:text-xl font-semibold mb-2">{`Hello, There!`}</h6>

        <div className="flex flex-col sm:flex-row gap-4  items-center sm:items-start md:items-center">
          <h3 className="text-white text-3xl md:text-4xl font-bold">{`I'm`}</h3>
          <h2 className="text-5xl font-bold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
            {`Aui Atthawat`}
          </h2>
        </div>

        <div className="flex flex-col gap-4 items-center sm:items-start md:items-center">
          <h2 className="text-1xl md:text-2xl font-bold">
            {`Software Developer & Designer`}
          </h2>
          <h2 className="text-1xl md:text-2xl font-bold">
            {`Based in Chang Rai, Thailand`}
          </h2>
        </div>

        <OutlineRoundLinearBtn onClick={() => {}} text="View My Portfolio" />
      </div>

      {/* Right */}
      <div className="hidden lg:flex xl:flex justify-center items-center w-full ">
        <Image
          src="/images/backgrounds/bg-code.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="absolute -z-10"
        />
      </div>
    </section>
  );
}
