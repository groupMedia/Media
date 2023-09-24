import { React, useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function TopBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? null : (
        <div className="text-white relative">
          <div className=" bg-second-bg-web-dark fixed top-0 left-0 right-0">
            <div className="flex justify-end items-center gap-7 ml-10 h-[70px]">
              <div className="relative w-[400px]">
                <input
                  type="text"
                  placeholder="اینجا جستجو کنید..."
                  className="w-full pl-10 pr-4 text-sm py-2 border text-[#fff] bg-[#141414] border-[#141414] rounded-xl outline-none focus:border-[#141414] transition duration-300"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="text-[#fff]" />
                </div>
              </div>
              <a href="#" className="">
                <MailOutlineIcon fontSize="small" className="" />
              </a>
              <a href="#" className="">
                <NotificationsNoneIcon fontSize="small" className="" />
              </a>
              <img
                src="./Images/Profile.jpg"
                alt=""
                className="rounded-[50%] w-[45px]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
