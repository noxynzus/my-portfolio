import React from "react";

interface Props {
  onClick: () => void;
}

export default function RoundedLinearBtn({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="rounded-full z-10 right-2 p-2  bg-linear-to-r from-indigo-500 to-sky-500  h-full w-[128px] items-center flex justify-center"
    >
      Contact Me
    </button>
  );
}
