import React from "react";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";

export default function EducationAndWork() {
  return (
    <section className="flex flex-col justify-center items-center text-center py-10 w-full">
      <div className="flex flex-col justify-center item-center gap-2">
        <h6 className="">{`Education & Work`}</h6>
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">{`My Academic and`}</h2>
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">{`Professional Journey.`}</h2>
      </div>

      {/* <div className="py-10 w-full items-center text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7 mx-auto">
        <Education />
        <WorkExperience title="Work Experience" />
      </div> */}

      <div className="flex flex-wrap justify-center item-center  gap-8 mt-8 w-full">
        <div className="w-full  md:w-1/2 lg:w-1/3 flex flex-col justify-center item-center  mx-auto">
          <Education />
        </div>

        <div className="w-full  md:w-1/2 lg:w-1/3 flex flex-col justify-center item-center  mx-auto">
          <WorkExperience title="Work Experience" />
        </div>
      </div>
    </section>
  );
}
