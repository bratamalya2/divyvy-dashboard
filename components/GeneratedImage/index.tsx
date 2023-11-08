import Image from "next/image";

import OptionsBox from "./optionBox";

import GeneratedImageFile from "@/public/images/generateImage.png";

function GeneratedImage() {
  return (
    <div className="relative rounded-[10px] z-10 left-[26%] top-[3%] w-[60vw] xl:h-[80vh]">
      <div
        className="flex items-center justify-between absolute rounded-[10px] w-[100%] h-[80px] px-5"
        style={{
          background:
            "linear-gradient(153deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.30) 100%)",
        }}
      >
        <div className="ml-0">
          <OptionsBox imgFileName="bin.png" />
        </div>
        <div className="flex justify-around w-[60%]">
          <OptionsBox imgFileName="flag.png" />
          <OptionsBox imgFileName="vertical_align_bottom.png" />
          <OptionsBox imgFileName="share.png" />
          <OptionsBox imgFileName="close.png" />
          <OptionsBox imgFileName="more_vert.png" />
        </div>
        <div className="mr-0">
          <OptionsBox imgFileName="favorite.png" />
        </div>
      </div>
      <Image
        src={GeneratedImageFile}
        alt="Generated Image"
        className="w-[100%]"
      />
    </div>
  );
}

export default GeneratedImage;
