import PromptInputBox from "./PromptInputBox";

function PromptAreaLane() {
  return (
    <div
      className="w-[415px] h-[500px] flex flex-col bg-[#F0F0F3] rounded-[30px] border-[#712FFD] border-t-[2px] border-r-[2px] border-b-[0.5px] border-l-[0.5px] mx-[auto] px-[20px] mb-[25px]"
      style={{
        boxShadow:
          "6.22302px 6.22302px 18.66907px 0px rgba(186, 186, 186, 0.75), -3px -3px 4px 0px #FFF",
      }}
    >
      <div className="text-[#222] text-xl mt-[22px]">Prompt</div>
      <PromptInputBox
        placeholderText="Add Prompt"
        imgFileName="Magic Prompt.png"
      />
      <div className="text-[#222] text-xl mt-[22px]">Negative Prompt</div>
      <PromptInputBox
        placeholderText="Add Negative Prompt"
        imgFileName="Negative Magic Prompt.png"
      />
    </div>
  );
}

export default PromptAreaLane;
