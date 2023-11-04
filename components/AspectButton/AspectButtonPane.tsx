"use client";

import { useState } from "react";
import Image from "next/image";

import InnerButton from "./InnerButton";

import BottomArrowImage from "@/public/images/bottom-arrow.png";

function AspectButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return !isExpanded ? (
    <div
      className="flex w-[356px] h-[60px] rounded-[10px] border-[#FFF] border-t-[0.5px] border-r-[0.2px] border-b-[2px] border-l-[1.5px] mt-[14px] cursor-pointer"
      style={{
        background:
          "linear-gradient(153deg, rgba(255, 255, 255, 0.90) 3.54%, rgba(255, 255, 255, 0.29) 100%)",
        boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(10px)",
      }}
      onClick={() => setIsExpanded((curr) => !curr)}
    >
      <div
        className="relative flex mx-[auto] h-[60px] w-[100%] rounded-[10px] border-[#FFF] border-t-[0.5px] border-r-[0.2px] border-b-[2px] border-l-[1.5px]"
        style={{
          background:
            "linear-gradient(153deg, rgba(255, 255, 255, 0.90) 3.54%, rgba(255, 255, 255, 0.29) 100%)",
        }}
      >
        <div className="text-[#222] text-xl self-center text-center mx-[auto]">
          Aspect
        </div>
        <Image
          src={BottomArrowImage}
          alt="expand"
          width={10}
          height={15}
          className="absolute self-center right-[25px]"
        />
      </div>
    </div>
  ) : (
    <div
      className="flex flex-col items-center w-[356px] h-[440px] rounded-[10px] border-[#FFF] border-t-[0.5px] border-r-[0.2px] border-b-[2px] border-l-[1.5px] mt-[14px]"
      style={{
        background: "#F0F0F3",
        boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        className="relative flex mx-[auto] h-[60px] w-[100%] rounded-[10px] border-[#FFF] border-t-[0.5px] border-r-[0.2px] border-b-[2px] border-l-[1.5px] mb-[19px] cursor-pointer"
        style={{
          background:
            "linear-gradient(153deg, rgba(255, 255, 255, 0.90) 3.54%, rgba(255, 255, 255, 0.29) 100%)",
        }}
        onClick={() => setIsExpanded((curr) => !curr)}
      >
        <div className="text-[#222] text-xl text-center self-center mx-[auto]">
          Aspect
        </div>
        <Image
          src={BottomArrowImage}
          alt="expand"
          width={10}
          height={15}
          className="absolute self-center right-[25px]"
        />
      </div>
      <InnerButton text="Resolution" />
      <InnerButton text="No. of Outputs" />
      <InnerButton text="Style" />
      <InnerButton text="Medium" />
      <InnerButton text="Mood" />
    </div>
  );
}

export default AspectButton;
