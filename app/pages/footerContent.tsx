import Image from "next/image";
import React from "react";

export default function FooterContent() {
  return (
    <>
      <div className="relative flex flex-row items-center justify-around p-5 w-full bg-linear-to-b from-[#2A2A2A] to-[#161614]">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col gap-4 items-start">
            <h2 className="text-4xl font-bold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
              {`Let’s Contact Me!`}
            </h2>
            <h5 className="text-2xl items-end-safe font-bold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
              {`Aui ‘ Atthawat`}
            </h5>
          </div>
        </div>
        {/* Contact */}
        <div className="flex flex-col items-start justify-center gap-3">
          <p className="text-2xl font-bold">{`Contacts`}</p>

          {/* Telegram */}
          <div className="flex flex-row gap-2 items-start">
            <div className="flex flex-col items-start">
              <Image
                src="/images/icons/telegram.svg"
                alt="Logo Image"
                width={30}
                height={30}
                className="rounded-xl  object-cover"
              />
            </div>
            <div className="flex flex-col items-start text-md text-gray-400">
              {`Telegram : @hanazaki`}
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-row gap-2 items-start">
            <div className="flex flex-col items-start">
              <Image
                src="/images/icons/phone.svg"
                alt="Logo Image"
                width={30}
                height={30}
                className="rounded-xl  object-cover"
              />
            </div>
            <div className="flex flex-col items-start text-md text-gray-400">
              {`Phone : +66 86 429 1825`}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-row gap-2 items-start">
            <div className="flex flex-col items-start">
              <Image
                src="/images/icons/email.svg"
                alt="Logo Image"
                width={30}
                height={30}
                className="rounded-xl  object-cover"
              />
            </div>
            <div className="flex flex-col items-start text-md text-gray-400">
              {`Email : job.arrthawat@gmail.com`}
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-row gap-2 items-start">
            <div className="flex flex-col items-start">
              <Image
                src="/images/icons/location.svg"
                alt="Logo Image"
                width={30}
                height={30}
                className="rounded-xl  object-cover"
              />
            </div>
            <div className="flex flex-col items-start text-md text-gray-400">
              {`Location : Chiang Rai, Thailand 57000`}
            </div>
          </div>
        </div>

        {/* Navigations */}
        <div className="flex flex-col items-center justify-start gap-2">
          <p className="text-2xl font-bold">{`Navigations`}</p>
          <ul className="flex flex-col gap-4 space-y-1 ">
            <li className="text-gray-400">
              <a href="#">Home</a>
            </li>
            <li className="text-gray-400">
              <a href="#">About</a>
            </li>
            <li className="text-gray-400">
              <a href="#">Project</a>
            </li>
            <li className="text-gray-400">
              <a href="#">Testimonial</a>
            </li>
          </ul>
        </div>

        <div className="absolute bottom-0 right-0 blur-sm opacity-50">
          <div className="mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80% bg-[url(/images/backgrounds/circle-linear.png)] size-[30rem] -z-10"></div>

          {/* <svg
          viewBox="0 0 1024 1024"
          className="  -z-10 size-[30rem]  [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset="1" stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg> */}
        </div>
      </div>
    </>
  );
}
