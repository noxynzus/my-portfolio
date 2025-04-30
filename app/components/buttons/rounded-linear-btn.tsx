import React from "react";

interface Props {
  onClick: () => void;
}

export default function RoundedLinearBtn({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      translate="yes"
      className="rounded-full cursor-pointer right-2 p-2  bg-linear-to-r from-indigo-500 to-sky-500 hover:bg-amber-700 h-full w-[128px] items-center flex justify-center"
    >
      Contact Me
    </button>
  );
}
