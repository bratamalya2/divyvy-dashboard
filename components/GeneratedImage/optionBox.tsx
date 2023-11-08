import Image from "next/image";

function OptionsBox({ imgFileName }: { imgFileName: string }) {
  const imgFile = require(`@/public/images/${imgFileName}`);

  return (
    <div
      className="rounded-[9.588px] w-[50px] h-[50px] flex items-center justify-center cursor-pointer"
      style={{
        backgroundColor: "rgba(240, 240, 243, 0.3)",
        boxShadow: "0px 1px 1px 0px rgba(74, 74, 74, 0.30)",
      }}
    >
      <Image src={imgFile} alt="option" />
    </div>
  );
}

export default OptionsBox;
