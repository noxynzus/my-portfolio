import React from "react";
import CommingSoon from "../commingsoon/commingSoon";

export default function ContactMe() {
  const coming = true;
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      {coming ? (
        <div className="h-full w-full  flex flex-col justify-center items-center z-50">
          <CommingSoon />
        </div>
      ) : (
        <div>Contact</div>
      )}
    </div>
  );
}
