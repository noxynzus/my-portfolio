import React from "react";

interface Props {
  onClick: () => void;
  text?: string;
  style?: string;
}

export default function RoundedLinearBtn({
  onClick,
  text = "Contact Me",
  style,
}: Props) {
  return (
    <button
      onClick={onClick}
      translate="yes"
      className={`rounded-full cursor-pointer right-2 py-2 px-6  bg-linear-to-r from-indigo-500 to-sky-500 hover:bg-amber-700 h-full w-auto min-w-[128px] items-center flex justify-center ${style}`}
    >
      {text}
    </button>
  );
}
