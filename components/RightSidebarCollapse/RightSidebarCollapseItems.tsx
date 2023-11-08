import Image from "next/image";

import SettingsImg from "@/public/images/settings.png";
import GroupMsgImg from "@/public/images/Group 1888.png";

function RightSidebarCollapseItems() {
  return (
    <div
      className="absolute flex flex-col right-0 items-center justify-around rounded-[24px] w-[55px] h-[200px] cursor-pointer"
      style={{
        background:
          "linear-gradient(212deg, #CFA5F0 3.21%, rgba(240, 240, 243, 0.00) 68.57%)",
      }}
    >
      <Image src={SettingsImg} alt="Settings" width={35} />
      <div
        className="h-[2px] w-[45px]"
        style={{
          background: "rgba(189, 189, 189, 0.35)",
        }}
      ></div>
      <Image src={GroupMsgImg} alt="Groups" width={35} />
    </div>
  );
}

export default RightSidebarCollapseItems;
