"use client";
import React, { useEffect } from "react";
import CommingSoon from "../../commingsoon/commingSoon";
import { useParams } from "next/navigation";
import projectDataContext from "@/app/context/myproject";
import SkeletonLoading from "@/app/components/loaders/SkeletonLoading";
import Image from "next/image";

export default function ProjectInformation() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const params = useParams<{ tag: string; item: string }>();
  const data = projectDataContext.find((item) => item.id === params.id);
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 z-50">
      {loading && <SkeletonLoading />}
      {!data && !loading && <CommingSoon />}

      {data && !loading && (
        <div className="h-full w-full flex flex-col justify-center items-center ">
          <div
            data-aos="zoom-in"
            className="relative isolate w-full h-full flex flex-col lg:flex-row justify-between items-center gap-5"
          >
            <Image
              src={data.primaryImg}
              alt={data.title}
              width={500}
              height={500}
              priority
              className="rounded-xl w-full h-full lg:h-[500px] object-cover"
            />

            <div className="w-full lg:w-1/2 h-full lg:h-[500px] flex flex-col justify-start items-start border border-gray-500/50 bg-linear-to-r from-[#2A2A2A] to-[#161614] rounded-2xl p-10 gap-5 lg:gap-10">
              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="text-lg font-bold text-gray-500">
                  {"Project Category"}
                </h1>
                <p className="text-md text-white text-left">
                  {"Mobile App | UX UI Design"}
                </p>
              </div>

              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="text-lg font-bold text-gray-500">
                  {"Project Duration"}
                </h1>
                <p className="text-md text-white text-left">{"3 Weeks"}</p>
              </div>

              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="text-lg font-bold text-gray-500">
                  {"Technologies"}
                </h1>
                <p className="text-md text-white text-left">
                  <ul>
                    {data.techStack.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center gap-10 py-10">
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <h1 className="text-4xl font-bold text-gray-300">{data.title}</h1>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-2">
              <h1 className="text-lg font-bold text-gray-300">{"Description"}</h1>
              <p className="text-md text-gray-200 text-left">
                {data.description}
              </p>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-2">
              <h1 className="text-lg font-bold text-gray-300">{"Key Features"}</h1>
              <p className="text-md text-gray-200 text-left">
                <ul>
                  {data.keyfeatures.map((item, index) => (
                    <li key={index}>{`- ${item}`}</li>
                  ))}
                </ul>
              </p>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-2">
              <h1 className="text-lg font-bold text-gray-300">{"Valued Deliverables"}</h1>
              <p className="text-md text-gray-200 text-left">
                <ul>
                  {data.valuedeliverables.map((item, index) => (
                    <li key={index}>{`- ${item}`}</li>
                  ))}
                </ul>
              </p>
            </div>
          </div>

          <div
            data-aos="fade-down"
            className="w-fit h-1/2 flex justify-start items-start gap-10 overflow-x-auto rounded-2xl"
          >
            {data.secoundaryImg.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt={data.title}
                width={500}
                height={500}
                priority
                className="rounded-xl w-1/2 h-1/2 object-cover"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
