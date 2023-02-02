import React from "react";

import { FaBars } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const ChatFooter = () => {
  return (
    <React.Fragment>
      <main>
        <div>
        
          <div className=" border-t mt-10 md:border-0 md:mt-28">
            <div className="mx-10 centered mt-5 relative md:mx-2">
              <input className="w-full h-12 bg-gray-500 rounded-lg pl-5 md:text-xl md:h-16" />
              <FiSend className="text-3xl absolute top-3 right-5 md:top-4" />
            </div>

            <div>
              <p className="mx-10 text-center mt-5 mb-20 md:text-xl">
                We're celebrating 100 million developers! Read our blog post.
                We're celebrating 100 million developers! Read our blog post.
              </p>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ChatFooter;
