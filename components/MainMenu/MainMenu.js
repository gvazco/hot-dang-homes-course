import React from "react";
import { FaHouseUser, FaHeart } from "react-icons/fa";

export const MainMenu = (props) => {
  console.log("MAIN_MENU: ", props);
  return (
    <div className="bg-slate-800 text-white px-5 h-[64px] sticky top-0 z-20">
      <div className="py-4 pl-5 flex text-pink-600">
        <FaHouseUser size={30} />
        <FaHeart size={30} />
      </div>
    </div>
  );
};
