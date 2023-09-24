import { React, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function TopBar() {
  return (
    <div className="text-white  ">
      <div className="w-[100%] h-[80px] bg-second-bg-web-dark">
        <div className="flex justify-end items-center">
          <div className="relative w-[500px] ">
            <input
              type="text"
              placeholder="جستجو"
              className="w-full pl-10 pr-4 py-2 border text-[#141414] bg-[#141414] border-[#141414] rounded-xl outline-none focus:border-[#141414] transition duration-300"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="text-[#141414]" />
            </div>
          </div>
          <a href="#">
            <MailOutlineIcon />
          </a>
          <a href="#">
            <NotificationsNoneIcon />
          </a>
          <img
            src="./Images/Profile.jpg"
            alt=""
            className="rounded-[50%] w-12"
          />
        </div>
      </div>
    </div>
  );
}
