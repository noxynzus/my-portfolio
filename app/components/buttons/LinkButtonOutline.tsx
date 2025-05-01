import Link from "next/link";
import React, { JSX } from "react";

interface Props {
  text?: string;
  href?: string;
  icon?: JSX.Element;
  download?: string;
}

export default function LinkButtonOutline({
  text = "Push here",
  href = "#",
  icon = <></>,
  download=""
}: Props) {
  return (
    <Link
      translate="yes"
      className="relative rounded-full bg-linear-to-r from-[#615FFF] to-[#00A6F4] p-[1px] my-1 cursor-pointer hover:bg-[#00A6F4]"
      href={href}
      download={download}
    >
      <div className="flex items-center gap-2 bg-[#161614] text-white rounded-full px-6 py-2 hover:bg-[#00A6F4]">
        {icon}
        <h6 className="text-[14px] font-mono">{text}</h6>
      </div>
    </Link>
  );
}
