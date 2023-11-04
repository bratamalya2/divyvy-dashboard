"use client";

import React, { useState } from "react";
import Canvas from "@/components/Canvas";
import LeftSideBar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";
import BottomSidebar from "@/components/BottomSidebar";
import GeneratedImage from "@/components/GeneratedImage";

const Dashboard: React.FC = () => {
  const [navbarWidth, setNavbarWidth] = useState("0px");

  return (
    <div className="relative top-0 left-0 w-full h-screen">
      <Canvas />
      <div className="relative top-0 left-0 w-full h-screen">
        <Navbar width={navbarWidth} setWidth={setNavbarWidth} />
        <LeftSideBar navbarWidth={navbarWidth} />
        <RightSidebar />
        <GeneratedImage />
        <BottomSidebar />
      </div>
    </div>
  );
};

export default Dashboard;
