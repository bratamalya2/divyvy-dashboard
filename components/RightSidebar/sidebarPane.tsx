import Image from "next/image";

import SettingsBox from "../SettingsBox";
import PromptArea from "@/components/PromptArea";

import GenerateButton from "@/public/images/Generate Button.png";

function SidebarPane() {
  return (
    <div
      className="flex flex-col w-[474px] h-[1360px] px-[35px] pt-[40px] pb-[51px] z-20 absolute right-0"
      style={{
        background:
          "linear-gradient(211deg, #CFA5F0 7.22%, rgba(240, 240, 243, 0.00) 42.32%)",
      }}
    >
      <SettingsBox />
      <PromptArea />
      <div className="self-center text-center text-[#222] text-base">
        Check out{" "}
        <span className="text-[#6A00BE] cursor-pointer">Prompt Book</span> for
        inspiration.
      </div>
      <Image
        src={GenerateButton}
        alt="Generate-button"
        height={141}
        width={415}
        className="cursor-pointer mx-auto"
      />
    </div>
  );
}

export default SidebarPane;
