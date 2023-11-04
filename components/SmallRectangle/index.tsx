import React from "react";
import Image from "next/image";

import DividerLine from "@/components/DividerLine";

function SmallRectangle({
  iconFileName,
  isCollapsed,
  isFollowedByDivider,
}: {
  iconFileName: string;
  isCollapsed: boolean;
  isFollowedByDivider: boolean;
}) {
  const iconFileImg = require(`@/public/images/${iconFileName}`);

  if (iconFileName === "profile button.png")
    return (
      <Image
        src={iconFileImg}
        alt="nav-icon"
        width={182}
        height={155}
        className="scale-125 cursor-pointer pb-5 border-none border-t-[0.5px] border-r-[0.2px] border-b-[2px] border-l-[1.5px]"
      />
    );

  return (
    <>
      <div
        className="flex items-center justify-center w-[94.6px] h-[90px] self-stretch rounded-3xl border-t-[0.5px] border-r-[0.2px] border-b-[2px] border-l-[1.5px] border-[#FFF] mb-5"
        style={{
          background:
            "linear-gradient(153deg, rgba(255, 255, 255, 0.14) 3.54%, rgba(255, 255, 255, 0.03) 100%)",
          boxShadow:
            "-3px -3px 4px 0px rgba(255, 255, 255, 0.20), 4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(2px)",
        }}
      >
        {iconFileName === "home button.png" ? (
          <Image
            src={iconFileImg}
            alt="nav-icon"
            width={90}
            height={90}
            className="scale-125 cursor-pointer"
          />
        ) : (
          <Image
            src={iconFileImg}
            alt="nav-icon"
            width={60}
            height={60}
            className="cursor-pointer"
          />
        )}
      </div>
      {isFollowedByDivider && <DividerLine isCollapsed={isCollapsed} />}
    </>
  );
}

export default SmallRectangle;
