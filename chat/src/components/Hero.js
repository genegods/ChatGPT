import React from "react";
import { ChatData } from "../data/ChatData";
import { FaBars } from "react-icons/fa";
import ChatHeader from './ChatHeader'
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";


const Hero = () => {
  return (
    <React.Fragment>
      <main>
        <div className="text-white md:w-9/12 mx-auto">
            <ChatHeader/>
            <ChatBody/>
            <div className="sticky top-0">
            <ChatFooter/>
            </div>
           
       

         


         
        </div>
      </main>
    </React.Fragment>
  );
};

export default Hero;
