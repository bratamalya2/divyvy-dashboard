import Image from "next/image";

import "./promptInputBox.css";

function PromptInputBox({
  placeholderText,
  imgFileName,
}: {
  placeholderText: string;
  imgFileName: string;
}) {
  const imgFile = require(`@/public/images/${imgFileName}`);

  return (
    <div
      className="relative flex items-center justify-center w-[382px] h-[165px] bg-[#DDDCDC] rounded-[10px] border-[#EB00FF] border-2 mt-[15px]"
      style={{
        boxShadow:
          "4px 4px 4px 0px rgba(174, 174, 192, 0.50) inset, -4px -4px 4px 0px rgba(255, 255, 255, 0.70) inset",
      }}
    >
      <textarea
        className="relative w-[99%] h-[99%] focus:outline-none"
        placeholder={placeholderText}
      />
      <Image
        src={imgFile}
        alt="prompt-icon"
        className="absolute bottom-0 right-0 cursor-pointer"
      />
    </div>
  );
}

export default PromptInputBox;
