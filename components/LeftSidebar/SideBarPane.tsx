"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import SidebarComponent from "../SidebarComponent";

import sidebarInfo from "./sidebarInfo";

import sideToggleImage from "@/public/images/Side Toggle.png";

type SideBarPaneProps = {
  navbarWidth: string;
};

function SideBarPane({ navbarWidth }: SideBarPaneProps) {
  const [collapsed, setCollapsed] = useState(true);
  const [width, setWidth] = useState("0px");
  const [marginLeft, setMarginLeft] = useState("0px");

  useEffect(() => {
    if (collapsed) setWidth("205px");
    else setWidth("397px");
  }, [collapsed]);

  useEffect(() => {
    let x = navbarWidth;
    let xNum = parseInt(x.substring(0, x.length - 2));
    setMarginLeft((xNum + 15).toString() + "px");
  }, [navbarWidth]);

  return (
    <div
      className={`absolute h-[1257px] flex flex-col items-center my-[45px] py-[20px] z-20 bg-[#DCDCDC] rounded-[60px] border-[#FFF] border-x-[0.5px] border-y-[0.5px] w-[${width}] max-w-[${width}]`}
      style={{
        background:
          "linear-gradient(153deg, rgba(255, 255, 255, 0.72) 3.54%, rgba(255, 255, 255, 0.17) 100%)",
        boxShadow:
          "4px 4px 8px 0px rgba(0, 0, 0, 0.25), 2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(2.5px)",
        left: marginLeft,
      }}
    >
      {sidebarInfo.map((obj, i) => (
        <SidebarComponent
          key={i}
          isCollapsed={collapsed}
          shortNameFileName={obj.shortNameFileName}
          longNameFileName={obj.longNameFileName}
          symbolFileName={obj.imgFileName}
        />
      ))}
      <Image
        src={sideToggleImage}
        alt="Collapse"
        width={53}
        height={131}
        className="absolute top-[50%] left-[100%] cursor-pointer"
        onClick={() => setCollapsed((curr) => !curr)}
      />
    </div>
  );
}

export default SideBarPane;
