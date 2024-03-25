function ReadMessages({
  avatar,
  person,
  description,
  reactedPost,
  date,
  chessClub,
  message,
  chessPhoto,
}) {
  return (
    <div className="w-full bg-bodyBg py-4 pl-4 pr-6 flex items-start gap-[13px]">
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
          </p>
        </div>
        <p className="text-gray text-[14px] font-normal">
          <span>{date}</span> ago
        </p>
        <div>{message}</div>
      </div>
      <div>{chessPhoto}</div>
    </div>
  );
}

export default ReadMessages;
