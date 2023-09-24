import { React, useState } from "react";
// import TextField from "@mui/material/TextField";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function TopBar() {
  return (
    <div className="text-white ">
      <div className="w-[100%] h-[50px] bg-second-bg-web-dark flex">
        <div>

          <img src="" alt="" />
          <a href="#">
            
            <MailOutlineIcon />
          </a>
          <a href="#">
            
            <NotificationsNoneIcon />
          </a>
          <div className="main w-[300px]  text-white">
            {/* <h1>React Search</h1>
            <div className="search h[10px]">
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
