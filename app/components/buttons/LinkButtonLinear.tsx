import Link from "next/link";
import React from "react";

interface Props {
  text?: string;
  href?: string;
}

export default function LinkButtonLinear({
  text = "Contact Me",
  href = "#",
}: Props) {
  return (
    <Link
      translate="yes"
      className="rounded-full cursor-pointer right-2 py-2 px-6  bg-linear-to-r from-indigo-500 to-sky-500 hover:bg-transparent h-full w-auto min-w-[128px] items-center flex justify-center "
      href={href}
    >
      {text}
    </Link>
  );
}
