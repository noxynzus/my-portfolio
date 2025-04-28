import React from "react";
import ExperienceCard from "../components/ExperienceCard";

export default function EducationAndWork() {
  return (
    <section className="flex flex-col justify-center items-center text-center p-10 w-full">
      <div className="flex flex-col justify-center item-center gap-2">
        <h6 className="">{`Education & Work`}</h6>
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">{`My Academic and`}</h2>
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">{`Professional Journey.`}</h2>
      </div>

      <div className="flex flex-row justify-around item-center gap-5 mt-8 w-full">
        <div className="flex flex-col justify-center item-center gap-2 ">
          <ExperienceCard title="Education" />
        </div>

        <div className="flex flex-col justify-center item-center gap-2 ">
          <ExperienceCard title="Work Experience" />
        </div>
      </div>
    </section>
  );
}
