import Image from "next/image";

import Rectangle from "./rectangle";

function BottomSidebar() {
  return (
    <div
      className="absolute z-10 bottom-5 left-[25%] xl:left-[30%] flex items-center py-[20px] px-[20px] rounded-[30px]"
      style={{
        background:
          "linear-gradient(91deg, rgba(255, 255, 255, 0.54) 1.57%, rgba(255, 255, 255, 0.18) 97.89%)",
        boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(2.5px)",
      }}
    >
      <Rectangle
        background="linear-gradient(153deg, rgba(229, 197, 255, 0.80) 3.54%, rgba(255, 255, 255, 0.23) 100%)"
        boxShadow="2px 2px 4px 0px rgba(0, 0, 0, 0.25)"
        enclosingText="UPLOAD"
        fontColor="rgba(34, 34, 34, 0.45)"
        textShadow="0px 1px 1px rgba(74, 74, 74, 0.30)"
        iconFileName="upload.png"
      />
      <Rectangle
        background="#F0F0F3"
        boxShadow="3px 3px 4px 0px rgba(186, 186, 186, 0.75) inset, -3px -3px 4px 0px #FFF inset"
        enclosingText="PUBLIC SHARE"
        fontColor="#222"
        textShadow=""
      />
      <Rectangle
        background="rgba(229, 197, 255, 0.8)"
        boxShadow=""
        enclosingText="REGENERATE"
        fontColor="#222"
        textShadow="0px 1px 1px rgba(74, 74, 74, 0.30)"
      />
      <Rectangle
        background="linear-gradient(153deg, rgba(229, 197, 255, 0.80) 3.54%, rgba(255, 255, 255, 0.23) 100%)"
        boxShadow="2px 2px 4px 0px rgba(0, 0, 0, 0.25)"
        enclosingText="DOWNLOAD"
        fontColor="#B455FF"
        textShadow="0px 1px 1px rgba(74, 74, 74, 0.30)"
        iconFileName="download.png"
      />
    </div>
  );
}

export default BottomSidebar;
