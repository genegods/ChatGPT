import React from "react";
import { ChatData } from "../data/ChatData";
import { FaBars } from "react-icons/fa";

const ChatBody = () => {
  return (
    <React.Fragment>
      <main>
        <div>
          <div className="md:grid md:grid-cols-3">
            {ChatData.map((item, index) => {
              return (
                <div key={index}>
                  <div className="space-y-3 ">
                    <div className="w-auto mx-10 flex justify-center items-end pb-3 space-x-3 text-2xl capitalize pt-10 px-3 md:text-4xl">
                      <span>{item.headerIcon}</span>
                      <p>{item.title}</p>
                    </div>
                    <div className="w-auto mx-10 h-12 centered space-x-3 bg-gray-500 rounded-lg px-3 md:h-20 md:mx-1.5 md:text-xl ">
                      <p>{item.firstRow}</p>
                      <span className="md:text-2xl">{item.arrowIcon}</span>
                    </div>
                    <div className="w-auto mx-10 h-12 centered space-x-3 bg-gray-500 rounded-lg px-3 md:h-20 md:mx-1.5 md:text-xl">
                      <p>{item.secondRow}</p>
                      <span className="md:text-2xl">{item.arrowIcon}</span>
                    </div>
                    <div className="w-auto mx-10 h-12 centered space-x-3 bg-gray-500 rounded-lg px-3 md:h-20 md:mx-1.5 md:text-xl">
                      <p>{item.thirdRow}</p>
                      <span className="md:text-2xl">{item.arrowIcon}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ChatBody;
