import React from "react";
import OutlineRoundLinearBtn from "../components/buttons/outline-round-linear-btn";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsContent() {
  return (
    <section className="flex flex-col justify-center items-center text-center py-20 px-4  text-white">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
        {/* Title */}
        <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start w-full sm:w-1/2 gap-4">
          <h6 className="">{`My Projects!`}</h6>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">{`My Lasted Projects!`}</h2>
        </div>

        {/* Button */}
        <div className="flex flex-col sm:justify-end items-center sm:items-end w-full sm:w-1/2 gap-4">
          <OutlineRoundLinearBtn onClick={() => {}} text="View All Projects" />
        </div>
      </div>

      {/* Projects Card */}
      <div className="flex flex-wrap item-center mt-8 w-full ">
        <div className="w-full  md:w-1/2 lg:w-1/3 p-4 flex justify-center">
          <ProjectCard
            url="#"
            image="/images/backgrounds/finance-1024.png"
            title="Financial Management"
            description="Manage your financial transactions and budgeting."
          />
        </div>
        <div className="w-full  md:w-1/2  lg:w-1/3 p-4 flex justify-center">
          <ProjectCard
            url="#"
            image="/images/backgrounds/coffee-1024.png"
            title="Coffee & Restaurant"
            description="Manage order and inventory for a coffee shop and restaurant."
          />
        </div>
        <div className="w-full  md:w-1/2 lg:w-1/3 p-4 flex justify-center">
          <ProjectCard
            url="#"
            image="/images/backgrounds/sports-1024.png"
            title="Sports Result"
            description="Real-time sports results and statistics."
          />
        </div>
      </div>
    </section>
  );
}
