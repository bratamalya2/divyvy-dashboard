import AspectButton from "@/components/AspectButton";

function SettingsBox() {
  return (
    <div className="flex flex-col justify-center items-center w-[415px] h-[530px] mb-[20px] bg-[#F0F0F3] rounded-[30px] px-[30px] py-[20px] border-[#712FFD] border-t-[2px] border-r-[2px] border-b-[0.5px] border-l-[0.5px]">
      <div className="text-2xl font-semibold text-[#222] self-start">
        Settings
      </div>
      <AspectButton />
    </div>
  );
}

export default SettingsBox;
