"use client";

import React, { useState, useEffect } from "react";

function DividerLine({ isCollapsed }: { isCollapsed: boolean }) {
  const [width, setWidth] = useState("0px");

  useEffect(() => {
    if (isCollapsed) {
      setWidth("60px");
    } else {
      setWidth("160px");
    }
  }, [isCollapsed]);

  return (
    <div
      className={`bg-[#DDDCDC] h-[6px] mb-5 mx-[auto]`}
      style={{ width: width }}
    ></div>
  );
}

export default DividerLine;
