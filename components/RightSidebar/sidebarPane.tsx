"use client";

import { useState } from "react";
import Image from "next/image";

import SettingsBox from "../SettingsBox";
import PromptArea from "@/components/PromptArea";
import RightSidebarCollapse from "@/components/RightSidebarCollapse";

import GenerateButton from "@/public/images/Generate Button.png";
import LeftCollapse from "@/public/images/Side Toggle.png";
import RightCollapse from "@/public/images/Side Toggle 2.png";

function SidebarPane() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  if (isCollapsed)
    return (
      <div className="absolute z-20 right-0 top-[28vh] h-[236px] w-[20vw]">
        <Image
          src={LeftCollapse}
          alt="Options"
          width={35}
          className="absolute cursor-pointer right-[53px] top-[28%]"
          onClick={() => setIsCollapsed(false)}
        />
        <RightSidebarCollapse />
      </div>
    );
  else
    return (
      <div
        className="flex flex-col w-[27vw] xl:w-[24vw] h-[1360px] pt-[20px] pb-[51px] z-20 absolute right-0"
        style={{
          background:
            "linear-gradient(211deg, #CFA5F0 7.22%, rgba(240, 240, 243, 0.00) 42.32%)",
        }}
      >
        <SettingsBox />
        <PromptArea />
        <div className="self-center justify-self-center text-center text-[#222] text-xs">
          Check out{" "}
          <span className="text-[#6A00BE] cursor-pointer">Prompt Book</span> for
          inspiration.
        </div>
        <Image
          src={GenerateButton}
          alt="Generate-button"
          height={95}
          className="cursor-pointer mx-auto mt-[10px]"
        />
        <Image
          src={RightCollapse}
          alt="Options"
          width={35}
          className="absolute cursor-pointer left-[-32px] top-[35vh]"
          onClick={() => setIsCollapsed(true)}
        />
      </div>
    );
}

export default SidebarPane;
