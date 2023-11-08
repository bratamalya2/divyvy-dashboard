"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import SidebarComponent from "../SidebarComponent";

import sidebarInfo from "./sidebarInfo";

import ToggleLeft from "@/public/images/Side Toggle.png";
import ToggleRight from "@/public/images/Side Toggle 2.png";

type SideBarPaneProps = {
  navbarWidth: string;
};

function SideBarPane({ navbarWidth }: SideBarPaneProps) {
  const [collapsed, setCollapsed] = useState(true);
  const [width, setWidth] = useState("0px");
  const [marginLeft, setMarginLeft] = useState("0px");

  useEffect(() => {
    if (collapsed) setWidth("125px");
    else setWidth("250px");
  }, [collapsed]);

  useEffect(() => {
    let x = navbarWidth;
    let xNum = parseInt(x.substring(0, x.length - 2));
    setMarginLeft((xNum + 15).toString() + "px");
  }, [navbarWidth]);

  return (
    <div
      className={`absolute flex flex-col items-center mt-[4px] py-[20px] z-20 bg-[#DCDCDC] rounded-[60px] border-[#FFF] border-x-[0.5px] border-y-[0.5px] w-[${width}] max-w-[${width}]`}
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
          background={obj.background}
          boxShadow={obj.boxShadow}
          shortNameText={obj.shortNameText}
          longNameText={obj.longNametext}
          symbolFileName={obj.imgFileName}
        />
      ))}
      <Image
        src={!collapsed ? ToggleLeft : ToggleRight}
        alt="Collapse"
        width={35}
        className="absolute top-[50%] left-[100%] cursor-pointer"
        onClick={() => setCollapsed((curr) => !curr)}
      />
    </div>
  );
}

export default SideBarPane;
