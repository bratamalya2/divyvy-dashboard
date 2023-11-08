import PromptInputBox from "./PromptInputBox";

function PromptAreaLane() {
  return (
    <div
      className="w-[85%] mx-[auto] flex flex-col bg-[#F0F0F3] rounded-[30px] border-[#712FFD] border-t-[2px] border-r-[2px] border-b-[0.5px] border-l-[0.5px] px-[20px] pb-[22px] mb-[10px]"
      style={{
        boxShadow:
          "6.22302px 6.22302px 18.66907px 0px rgba(186, 186, 186, 0.75), -3px -3px 4px 0px #FFF",
      }}
    >
      <div className="text-[#222] text-lg mt-[5px]">Prompt</div>
      <PromptInputBox
        placeholderText="Add Prompt"
        imgFileName="Magic Prompt.png"
      />
      <div className="text-[#222] text-lg mt-[5px]">Negative Prompt</div>
      <PromptInputBox
        placeholderText="Add Negative Prompt"
        imgFileName="Negative Magic Prompt.png"
      />
    </div>
  );
}

export default PromptAreaLane;
