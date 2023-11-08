"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

type SidebarInnerBoxProps = {
  isCollapsed: boolean;
  background: string;
  boxShadow: string;
  shortNameText: string;
  longNameText: string;
  symbolFileName: string;
};

function SidebarInnerBox({
  isCollapsed,
  background,
  boxShadow,
  shortNameText,
  longNameText,
  symbolFileName,
}: SidebarInnerBoxProps) {
  const [width, setWidth] = useState("0px");
  const symbolImg = require(`@/public/images/${symbolFileName}`);

  useEffect(() => {
    if (isCollapsed) setWidth("50px");
    else setWidth("195px");
  }, [isCollapsed]);

  return (
    <div className="mx-[25px] my-[5px] h-[45px] rounded-[20px] z-0 hover:scale-125 cursor-pointer">
      <div
        className="text-base text-[#222] px-[5%] rounded-[20px] flex items-center"
        style={{
          width: width,
          height: "100%",
          background: background,
          boxShadow: boxShadow,
        }}
      >
        {shortNameText === "VA" ? (
          <Image
            src={symbolImg}
            alt="Symbol"
            height={15}
            width={15}
            className="z-10 mx-[5px]"
          />
        ) : (
          <Image
            src={symbolImg}
            alt="Symbol"
            height={15}
            className="z-10 mx-[5px]"
          />
        )}
        <span>{isCollapsed ? shortNameText : longNameText}</span>
      </div>
    </div>
  );
}

export default SidebarInnerBox;
