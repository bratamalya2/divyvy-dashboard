"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

type SidebarInnerBoxProps = {
  isCollapsed: boolean;
  shortNameFileName: string;
  longNameFileName: string;
  symbolFileName: string;
};

function SidebarInnerBox({
  isCollapsed,
  shortNameFileName,
  longNameFileName,
  symbolFileName,
}: SidebarInnerBoxProps) {
  const shortImg = require(`@/public/images/${shortNameFileName}`);
  const largeImg = require(`@/public/images/${longNameFileName}`);
  const symbolImg = require(`@/public/images/${symbolFileName}`);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    if (!isCollapsed) {
      setItemWidth(294);
    } else {
      setItemWidth(97);
    }
  }, [isCollapsed]);

  return (
    <div className="relative mx-[45px] my-[5px] z-0 hover:scale-125">
      {isCollapsed ? (
        <Image
          src={shortImg}
          alt="Property"
          width={itemWidth}
          height={88}
          className="cursor-pointer"
        />
      ) : (
        <Image
          src={largeImg}
          alt="Property"
          width={itemWidth}
          height={88}
          className="cursor-pointer"
        />
      )}
      <Image
        src={symbolImg}
        alt="Symbol"
        width={30}
        height={30}
        className={`absolute top-[40%] left-[25px] z-10`}
      />
    </div>
  );
}

export default SidebarInnerBox;
