import React, {useState} from "react";
import { FaBars, FaPlus } from "react-icons/fa";
import SideBar from "./SideBar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <React.Fragment>
      <main>
        <div className="h-20  text-white flex justify-between items-center px-10 border-b ">
          {/* logo section */}
          <div>
          <FaBars className="w-6 h-6" onClick={handleToggle} />
          </div>

          {/* large screen */}
          <div>
            <p className="text-2xl">New Charts</p>
          </div>

          {/* small screen */}
          <div>
          <FaPlus className="w-6 h-6" onClick={handleToggle}/>
          </div>
        </div>

         {/* chat sidebar */}
         <div>
          {
            toggle && <SideBar/>
          }
            
          </div>
      </main>
    </React.Fragment>
  );
};

export default Navbar;
