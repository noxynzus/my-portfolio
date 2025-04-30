import Image from "next/image";
import React from "react";

export default function FooterContent() {
  return (
    <div className="grid auto-cols-max sm:grid-cols-1  lg:grid-cols-3 xl:grid-cols-3 items-center justify-around p-5 w-full z-10 gap-5 sm:gap-5 lg:gap-2">
      {/* Title */}
      <div className="flex flex-grow items-start justify-start sm:items-center sm:justify-center lg:items-start lg:justify-start gap-2 ">
        <div className="flex flex-col gap-4 items-start">
          <h2 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
            {`Let’s Contact Me!`}
          </h2>
          <h5 className="text-2xl items-end-safe font-bold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
            {`Aui ‘ Atthawat`}
          </h5>
        </div>
      </div>

      {/* Contact */}
      <div className="flex flex-col justify-start sm:items-center sm:justify-center lg:items-start lg:justify-start gap-2 ">
        <p className="text-md sm:text-xl lg:text-2xl font-bold">{`Contacts`}</p>

        {/* Telegram */}
        <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-col items-start">
            <Image
              src="/images/icons/telegram.svg"
              alt="Logo Image"
              width={30}
              height={30}
              className="rounded-xl  object-cover"
            />
          </div>
          <div className="flex flex-col items-start text-xs sm:text-md lg:text-[0.875rem] text-gray-400">
            {`Telegram : @hanazaki`}
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-col items-start">
            <Image
              src="/images/icons/phone.svg"
              alt="Logo Image"
              width={30}
              height={30}
              className="rounded-xl  object-cover"
            />
          </div>
          <div className="flex flex-col items-start text-xs sm:text-md lg:text-[0.875rem] text-gray-400">
            {`Phone : +66 86 429 1825`}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-col items-start">
            <Image
              src="/images/icons/email.svg"
              alt="Logo Image"
              width={30}
              height={30}
              className="rounded-xl  object-cover"
            />
          </div>
          <div className="flex flex-col items-start text-xs sm:text-md lg:text-[0.875rem] text-gray-400">
            {`Email : job.arrthawat@gmail.com`}
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-col items-start">
            <Image
              src="/images/icons/location.svg"
              alt="Logo Image"
              width={30}
              height={30}
              className="rounded-xl  object-cover"
            />
          </div>
          <div className="flex flex-col items-start   text-xs sm:text-md lg:text-[0.875rem] text-gray-400">
            {`Location : Chiang Rai, Thailand 57000`}
          </div>
        </div>
      </div>

      {/* Navigations */}
      <div className="flex flex-col items-start gap-2 z-10 justify-start sm:items-center sm:justify-center lg:items-start lg:justify-start">
        <p className="text-md sm:text-xl lg:text-2xl font-bold">{`Navigations`}</p>
        <ul className="flex flex-col gap-4 space-y-1 ">
          <li className="text-gray-400 text-xs sm:text-md lg:text-[0.875rem]">
            <a href="#">Home</a>
          </li>
          <li className="text-gray-400 text-xs sm:text-md lg:text-[0.875rem]">
            <a href="#">About</a>
          </li>
          <li className="text-gray-400 text-xs sm:text-md lg:text-[0.875rem]">
            <a href="#">Project</a>
          </li>
          <li className="text-gray-400 text-xs sm:text-md lg:text-[0.875rem]">
            <a href="#">Testimonial</a>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </div>
  );
}
