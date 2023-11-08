import Image from "next/image";

import Star1 from "@/public/images/Star 10.png";
import Star2 from "@/public/images/Star 11.png";

function Rectangle({
  background,
  boxShadow,
  enclosingText,
  fontColor,
  textShadow,
  iconFileName,
}: {
  background: string;
  boxShadow: string;
  enclosingText: string;
  fontColor: string;
  textShadow: string;
  iconFileName?: string;
}) {
  let iconFileImg;
  if (iconFileName) iconFileImg = require(`@/public/images/${iconFileName}`);
  return (
    <div
      style={{
        background: background,
        boxShadow: boxShadow,
        backdropFilter: "blur(25px)",
        color: fontColor,
        textShadow: textShadow,
      }}
      className="relative rounded-[20px] p-[15px] mx-2 cursor-pointer flex"
    >
      {iconFileName ? (
        <Image
          src={iconFileImg}
          alt="icon"
          width={20}
          height={12}
          className="mr-[10px]"
        />
      ) : null}
      {enclosingText}
      {enclosingText === "REGENERATE" ? (
        <>
          <div className="w-[20px]"></div>
          <Image
            src={Star1}
            height={27}
            width={27}
            alt="Star"
            className="absolute right-1 top-2"
          />
          <Image
            src={Star2}
            alt="Star"
            height={16}
            width={16}
            className="absolute right-4 bottom-2"
          />
        </>
      ) : null}
    </div>
  );
}

export default Rectangle;
