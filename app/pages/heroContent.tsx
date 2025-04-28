import Image from "next/image";
import React from "react";
import OutlineRoundLinearBtn from "../components/buttons/outline-round-linear-btn";

export default function HeroContent() {
  return (
    <section className="flex flex-row justify-center items-center text-center py-20 px-4  text-white">
      {/* Left */}
      <div className="w-full sm:w-1/2 flex flex-col justify-start items-start gap-4 text-left">
        <h6 className="text-lg md:text-xl font-semibold mb-2">{`Hello, There!`}</h6>

        <div className="flex flex-row gap-4 items-start">
          <h3 className="text-white text-3xl md:text-4xl font-bold">{`I'm`}</h3>
          <h2 className="text-5xl font-bold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
            {`Aui Atthawat`}
          </h2>
        </div>

        <div className="flex flex-col gap-4 items-start ">
          <h2 className="text-1xl md:text-2xl font-bold">
            {`Software Developer & Designer`}
          </h2>
          <h2 className="text-1xl md:text-2xl font-bold">
            {`Based in Chang Rai, Thailand`}
          </h2>
        </div>

        <OutlineRoundLinearBtn onClick={() => {}} text="View My Portfolio"/>

        {/* <button className="px-6 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition">
          Get Started
        </button> */}
      </div>

      {/* Right */}
      <div className="flex justify-center items-center w-full sm:w-1/2">
        <Image
          src="/images/backgrounds/circle-linear.png"
          alt="Hero Image"
          width={800}
          height={800}
          className="absolute z-0  -right-1/12"
        />
        <Image
          src="/images/backgrounds/bg-code.png"
          alt="Hero Image"
          width={400}
          height={400}
          className="absolute z-0 "
        />
      </div>
    </section>
  );
}
