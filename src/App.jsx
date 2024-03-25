import { useState } from "react";
import ReadMessages from "./components/ReadMessages";
import UnreadMessages from "./components/UnreadMessages";

function App() {
  const [isDivClicked, setIsDivClicked] = useState(false);
  const [quantity, setQuantity] = useState(3);
  const [clickedDivs, setClickedDivs] = useState(new Set());

  const markAllClick = () => {
    setIsDivClicked(true);
    setQuantity(0);
  };

  const handleQuantityClick = (divId) => {
    if (quantity > 0 && !clickedDivs.has(divId)) {
      setQuantity((quantity) => quantity - 1);
      setClickedDivs((prevClickedDivs) => new Set(prevClickedDivs.add(divId)));
    } else {
      null;
    }
  };

  return (
    <>
      <div className="w-screen px-4 pt-6 pb-[45px] flex flex-col items-center">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <p className="text-black text-[20px] font-bold">Notifications</p>
            <div className="bg-blue rounded-md text-white py-[1px] px-[11px]">
              {quantity}
            </div>
          </div>
          <p
            className="text-[14px] text-gray font-medium"
            onClick={markAllClick}
          >
            Mark all as read
          </p>
        </div>
        <div className="mt-[27px] flex flex-col items-center gap-y-[10px]">
          <UnreadMessages
            isClicked={isDivClicked}
            onClick={() => handleQuantityClick("unread1")}
            avatar={"/assets/mark.png"}
            person={"Mark Webber"}
            description={"reacted to your recent post"}
            reactedPost={"My first tournament today!"}
            date={"1m"}
          />

          <UnreadMessages
            isClicked={isDivClicked}
            onClick={() => handleQuantityClick("unread2")}
            avatar={"/assets/angela.png"}
            person={"Angela Gray"}
            description={"followed you"}
            date={"5m"}
          />

          <UnreadMessages
            isClicked={isDivClicked}
            onClick={() => handleQuantityClick("unread3")}
            avatar={"/assets/jacob.png"}
            person={"Jacob Thompson"}
            description={"has joined your group"}
            chessClub={"Chess Club"}
            date={"1 day"}
          />
        </div>
        <div className="mt-[27px] flex flex-col items-center gap-y-[10px]">
          <ReadMessages
            avatar={"/assets/rizky.png"}
            person={"Rizky Hasanuddin"}
            description={"sent you a private message"}
            date={"5 days"}
            message={
              <div className="mt-3 border border-messageBorder rounded-lg px-4 py-4 text-gray text-[14px]">
                Hello, thanks for setting up the Chess Club. I’ve been a member
                for a few weeks now and I’m already having lots of fun and
                improving my game.
              </div>
            }
          />

          <ReadMessages
            avatar={"/assets/kimberly.png"}
            person={"Kymberly Smith"}
            description={"commented on your picture"}
            date={"1 week"}
            chessPhoto={
              <img className="w-[50px] mt-[6px]" src="/assets/chess.png" />
            }
          />

          <ReadMessages
            avatar={"/assets/nathan.png"}
            person={"Nathan Peterson"}
            description={"reacted to your recent post"}
            reactedPost={"5 end-game strategies to increase your win rate"}
            date={"2 weeks"}
          />

          <ReadMessages
            avatar={"/assets/anna.png"}
            person={"Anna Kim"}
            description={"left the group"}
            chessClub={"Chess Club"}
            date={"2 weeks"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
