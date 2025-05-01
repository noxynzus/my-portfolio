'use client';
import React from "react";
import CommingSoon from "../commingsoon/commingSoon";

export default function Testimonial() {
  const coming = true;
  return (
    <div className="h-full w-full  flex flex-col justify-center items-center z-50">
      {coming ? <CommingSoon /> : <div>Testimonial</div>}
    </div>
  );
}
