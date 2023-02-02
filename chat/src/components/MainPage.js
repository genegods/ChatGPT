import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SideBar from "./SideBar";

const MainPage = () => {
  return (
    <React.Fragment>
      <main>
        <div className="">
          <div className=" md:hidden">
            <Navbar />
          </div>
          <div className="md:grid grid-cols-5">
            <div className="hidden md:block">
              {" "}
              <SideBar />
            </div>
            <div className="md:col-span-4">
              {" "}
              <Hero />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainPage;
