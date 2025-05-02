import React from "react";
import LinkButtonLinear from "@/app/components/buttons/LinkButtonLinear";

export default function CommingSoon() {
  return (
    <div className="h-auto w-full flex flex-col justify-center items-center space-y-10 my-10 z-[100]">
      <div className="text-5xl font-bold">Comming Soon</div>
      <p>This page is under construction.</p>
      <LinkButtonLinear href="/" text="Go to Homepage" />
    </div>
  );
}
