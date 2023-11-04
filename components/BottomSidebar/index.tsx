import Image from "next/image";

import Upload from "@/public/images/upload.png";
import PublicShare from "@/public/images/public share.png";
import Regenerate from "@/public/images/regenerate.png";
import Download from "@/public/images/download.png";

function BottomSidebar() {
  return (
    <div
      className="absolute z-10 top-[1370px] left-[25%] flex items-center h-[120px] py-[20px] px-[15px] rounded-[30px]"
      style={{
        background:
          "linear-gradient(91deg, rgba(255, 255, 255, 0.54) 1.57%, rgba(255, 255, 255, 0.18) 97.89%)",
        boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(2.5px)",
      }}
    >
      <Image src={Upload} alt="Upload" className="cursor-pointer mr-10" />
      <Image
        src={PublicShare}
        alt="Public Share"
        className="cursor-pointer mr-10"
      />
      <Image
        src={Regenerate}
        alt="Regenerate"
        className="cursor-pointer mr-10"
      />
      <Image src={Download} alt="Regenerate" className="cursor-pointer" />
    </div>
  );
}

export default BottomSidebar;
