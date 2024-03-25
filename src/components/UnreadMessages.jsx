import { useState } from "react";

function UnreadMessages({
  avatar,
  person,
  description,
  reactedPost,
  date,
  chessClub,
  isClicked,
  onClick,
}) {
  const [isDivClicked, setIsDivClicked] = useState(false);

  const handleClick = () => {
    setIsDivClicked(true);
    onClick();
  };

  return (
    <div
      className="w-full py-4 pl-4 pr-6 flex items-start gap-[13px] rounded-lg"
      onClick={handleClick}
      style={{ background: isClicked || isDivClicked ? "#fff" : "#f7fafd" }}
    >
      <img src={`${avatar}`} />
      <div className="flex flex-col items-start">
        <div className="flex items-center mb-[3px]">
          <p className="">
            <span className="text-black text-[14px] font-bold">{person} </span>
            <span className="text-gray text-[14px] font-medium">
              {description}{" "}
            </span>
            <span className="text-gray text-[14px] font-bold">
              {reactedPost}{" "}
            </span>
            <span className="text-blue text-[14px] font-bold">
              {chessClub}{" "}
            </span>
            <span
              style={{
                display: isClicked || isDivClicked ? "none" : "inline-block",
              }}
              className=" bg-red w-[8px] h-[8px] rounded-full px-[1px] py-[1px] ml-[5px]"
            ></span>
          </p>
        </div>
        <p className="text-gray text-[14px] font-normal">
          <span>{date}</span> ago
        </p>
      </div>
    </div>
  );
}

export default UnreadMessages;
