import Image from "next/image";
import React from "react";
import OutlineRoundLinearBtn from "../components/buttons/outline-round-linear-btn";

export default function HeroContent() {
  return (
    <section className="flex flex-row justify-center items-center text-center py-20 px-4  text-white">
      {/* Left */}
      <div className="flex-grow flex flex-col justify-start items-start">
        <h6 className="text-lg md:text-xl font-semibold mb-2">{`Hello, There!`}</h6>

        <div className="flex flex-row gap-2 items-center">
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">{`I'm`}</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {`Aui Atthawat`}
          </h2>
        </div>

        <div className="flex flex-col gap-2 items-start">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {`Software Developer & Designer`}
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {`Based in Chang Rai, Thailand`}
          </h2>
        </div>

        <OutlineRoundLinearBtn onClick={() => {}} />

        {/* <button className="px-6 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition">
          Get Started
        </button> */}
      </div>

      {/* Right */}
      <div className="flex-grow flex justify-center items-center">
        <Image
          src="/images/backgrounds/circle-linear.png"
          alt="Hero Image"
          width={800}
          height={800}
          className="fixed z-0  -right-1/12"
        />
      </div>
    </section>
  );
}
