"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import DividerLine from "@/components/DividerLine";

import VerticalLine from "@/public/images/Vertical-line.png";
import DarkModeImg from "@/public/images/dark  mode icon.png";
import LightModeImg from "@/public/images/light_mode.png";

function LongRectangle({
  iconFileName,
  componentName,
  isDarkMode,
  isCollapsed,
  isFollowedByDivider,
  setIsDarkMode,
}: {
  iconFileName: string;
  componentName: string;
  isDarkMode: boolean;
  isCollapsed: boolean;
  isFollowedByDivider: boolean;
  setIsDarkMode: (x: boolean) => void;
}) {
  const iconFileImg = require(`@/public/images/${iconFileName}`);

  const [bgColor1, setBgColor1] = useState("#FFFFFF");
  const [bgColor2, setBgColor2] = useState("#FFFFFF");

  useEffect(() => {
    if (isDarkMode) {
      setBgColor1("#C4ACF9");
      setBgColor2("#F6F6F6");
    } else {
      setBgColor1("#F6F6F6");
      setBgColor2("#C4ACF9");
    }
  }, [isDarkMode]);

  if (componentName.length === 0)
    return (
      <div
        className="relative h-[70px] w-[90%] mx-[auto] self-stretch rounded-3xl border-t-[0.5px] border-r-[0.2px] border-b-[2px] border-l-[1.5px] border-[#FFF] mb-5 bg-[#F6F6F6] cursor-pointer"
        style={{
          boxShadow:
            "-3px -3px 4px 0px rgba(255, 255, 255, 0.20), 4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(2px)",
        }}
      >
        <div
          className="absolute top-[1.5px] px-3 h-[100%] w-[50%] flex items-center rounded-lg border-[#FFF]"
          style={{
            backgroundColor: bgColor1,
          }}
          onClick={() => setIsDarkMode(true)}
        >
          <Image src={DarkModeImg} alt="nav-icon" width={60} height={60} />
        </div>
        <div
          className="absolute top-[1.5px] right-[0%] px-3 h-[100%] w-[50%] flex items-center rounded-lg border-[#FFF]"
          style={{
            backgroundColor: bgColor2,
          }}
          onClick={() => setIsDarkMode(false)}
        >
          <Image src={LightModeImg} alt="nav-icon" width={60} height={60} />
        </div>
      </div>
    );

  return (
    <>
      <div
        className="flex h-[70px] w-[90%] mx-[auto] self-stretch items-center rounded-3xl border-t-[0.5px] border-r-[0.2px] border-b-[2px] border-l-[1.5px] border-[#FFF] px-3 mb-5 cursor-pointer"
        style={{
          background:
            "linear-gradient(153deg, rgba(255, 255, 255, 0.14) 3.54%, rgba(255, 255, 255, 0.03) 100%)",
          boxShadow:
            "-3px -3px 4px 0px rgba(255, 255, 255, 0.20), 4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(2px)",
        }}
      >
        {componentName !== "PROFILE" ? (
          <Image
            src={iconFileImg}
            alt="nav-icon"
            width={60}
            height={60}
            className="mr-2"
          />
        ) : (
          <Image
            src={iconFileImg}
            alt="nav-icon"
            width={102}
            className="ml-[-30px]"
          />
        )}
        {componentName !== "PROFILE" && (
          <Image src={VerticalLine} alt="v-line" width={5} height={50} />
        )}
        <span className="ml-5 text-center text-xl text-[#222222]">
          {componentName}
        </span>
      </div>
      {isFollowedByDivider && <DividerLine isCollapsed={isCollapsed} />}
    </>
  );
}

export default LongRectangle;
