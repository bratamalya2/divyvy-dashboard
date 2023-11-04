import Image from "next/image";

import GeneratedImageFile from "@/public/images/generateImage.png";

function GeneratedImage() {
  return (
    <div className="relative rounded-[10px] z-10 top-[45px] left-[25%]">
      <Image
        src={GeneratedImageFile}
        alt="Generated Image"
        width={905}
        height={1000}
      />
    </div>
  );
}

export default GeneratedImage;
