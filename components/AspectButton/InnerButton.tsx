function InnerButton({ text }: { text: string }) {
  return (
    <div
      className="w-[330px] h-[60px] flex  items-center justify-center justify-self-center rounded-[10px] border-[#FFF] border-t-[0.5px] border-r-[0.2px] border-b-[2px] border-l-[1.5px] cursor-pointer mb-[12px]"
      style={{
        background:
          "linear-gradient(153deg, #E2C0FC 3.54%, rgba(255, 255, 255, 0.31) 100%)",
      }}
    >
      <div className="text-xl">{text}</div>
    </div>
  );
}

export default InnerButton;
