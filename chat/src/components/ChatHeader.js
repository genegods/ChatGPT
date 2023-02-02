import React from "react";
import { ChatData } from "../data/ChatData";
import { FaBars } from "react-icons/fa";

const ChatHeader = () => {
  return (
    <React.Fragment>
      <main>
        <div className="text-white">
          <div className="h-40 centered md:mt-28">
            <p className="text-5xl font-bold">Chat GPT</p>
          </div>

        </div>
      </main>
    </React.Fragment>
  );
};

export default ChatHeader;
