"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import DividerLine from "@/components/DividerLine";
import SmallRectangle from "@/components/SmallRectangle";
import LongRectangle from "@/components/LongRectangle";

import navbarInfo from "./navbarInfo";

import AppLogo from "@/public/images/D_Logo 1.png";
import AppLogoLarge from "@/public/images/big logo.png";

type NavbarProps = {
  width: string;
  setWidth: (x: string) => void;
};

function NavbarPane({ width, setWidth }: NavbarProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isCollapsed) {
      setWidth("100px");
    } else {
      setWidth("300px");
    }
  }, [isCollapsed]);

  return (
    <nav
      className={`py-[20px] flex flex-col h-[100%] items-center absolute z-20 bg-[#F6F6F6]`}
      style={{
        width: width,
      }}
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >
      {isCollapsed ? (
        <Image
          src={AppLogo}
          alt="App logo"
          width={60}
          className="cursor-pointer mb-5"
        />
      ) : (
        <Image
          src={AppLogoLarge}
          alt="App logo"
          width={180}
          className="cursor-pointer mb-5"
        />
      )}
      <DividerLine isCollapsed={isCollapsed} />
      {isCollapsed &&
        navbarInfo.map((item, i) => (
          <SmallRectangle
            key={i}
            iconFileName={item.iconImageFileName}
            isCollapsed={isCollapsed}
            isFollowedByDivider={item.isFollowedByDivider}
          />
        ))}
      {isCollapsed && isDarkMode && (
        <SmallRectangle
          iconFileName="dark  mode icon.png"
          isCollapsed={isCollapsed}
          isFollowedByDivider={false}
        />
      )}
      {isCollapsed && !isDarkMode && (
        <SmallRectangle
          iconFileName="light_mode.png"
          isCollapsed={isCollapsed}
          isFollowedByDivider={false}
        />
      )}
      {!isCollapsed &&
        navbarInfo.map((item, i) => (
          <LongRectangle
            key={i}
            iconFileName={item.iconImageFileName}
            componentName={item.componentName}
            isDarkMode={isDarkMode}
            isCollapsed={isCollapsed}
            isFollowedByDivider={item.isFollowedByDivider}
            setIsDarkMode={setIsDarkMode}
          />
        ))}
      {!isCollapsed && isDarkMode && (
        <LongRectangle
          iconFileName="dark  mode icon.png"
          componentName=""
          isDarkMode={isDarkMode}
          isCollapsed={isCollapsed}
          isFollowedByDivider={false}
          setIsDarkMode={setIsDarkMode}
        />
      )}
      {!isCollapsed && !isDarkMode && (
        <LongRectangle
          iconFileName="light_mode.png"
          componentName=""
          isDarkMode={isDarkMode}
          isCollapsed={isCollapsed}
          isFollowedByDivider={false}
          setIsDarkMode={setIsDarkMode}
        />
      )}
    </nav>
  );
}

export default NavbarPane;
