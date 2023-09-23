import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import HomeIcon from "@mui/icons-material/Home";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import GroupIcon from "@mui/icons-material/Group";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ListIcon from "@mui/icons-material/List";
import TheatersIcon from "@mui/icons-material/Theaters";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WidgetsIcon from "@mui/icons-material/Widgets";

export default function TopBar() {
  const [showLeftBar, setShowLeftBar] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const [showSubMenu3, setShowSubMenu3] = useState(false);
  const [showMedia, setShowMedia] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const toggleSubMenu2 = () => {
    setShowSubMenu2(!showSubMenu2);
  };

  const toggleSubMenu3 = () => {
    setShowSubMenu3(!showSubMenu3);
  };

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  const Meidahandeler = () => {
    setShowMedia(!showMedia);
  };

  const socialIcons = [
    {
      icon: (
        <a>
          <WidgetsIcon
            className="text-main-orang-admin"
            onClick={Meidahandeler}
          />
        </a>
      ),
      className: " cursor-pointer",
    },
  ];

  return (
    <div>
      <div
        className={`fixed top-0 right-0 ${
          showMenu ? "w-[50%] h-full" : "w-[100%]"
        } bg-[#1d1d1d] z-40 text-white p-4 transition-all duration-700`}
      >
        <div className="flex  gap-5 items-center">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden block text-white focus:outline-none"
          >
            {showMenu ? (
              <CloseIcon className="text-main-orang-admin" />
            ) : (
              <MenuIcon className="text-main-orang-admin" />
            )}
          </button>
          <img src="Images/logo-light.png" alt="logo" className="w-[110px] " />
        </div>
        <div className={`flex justify-end -mt-7 ${showMenu ? "hidden" : ""}`}>
          {socialIcons.map((item, index) => (
            <div key={index} className={item.className}>
              {item.icon}
            </div>
          ))}
        </div>

        {showMenu && (
          <ul className="md:hidden mt-7 flex flex-col gap-y-7 transition-all duration-500">
            <div
              className={`flex  over:text-main-orang-admin  text-main-orang-admin ${
                activeMenuItem === 0 ? "text-orange-500" : ""
              }`}
            >
              <ArrowBackIcon className="ml-1" fontSize="" />
              <li
                className={`text-[13px]  cursor-pointer `}
                onClick={() => handleMenuItemClick(0)}
              >
                مشاهده وب سایت
              </li>
            </div>
            <div
              className={`flex hover:text-main-orang-admin  ${
                activeMenuItem === 1 ? "text-orange-500" : ""
              }`}
            >
              <HomeIcon className="ml-1" fontSize="" />
              <li
                className={`text-[14px] cursor-pointer`}
                onClick={() => handleMenuItemClick(1)}
              >
                داشبورد
              </li>
            </div>
            <div
              className={`flex hover:text-main-orang-admin ${
                activeMenuItem === 2 ? "text-orange-500" : ""
              }`}
            >
              <StarHalfIcon className="ml-1" fontSize="" />
              <li
                className={`text-[14px] cursor-pointer `}
                onClick={() => handleMenuItemClick(2)}
              >
                رتبه بندی
              </li>
            </div>
            <div
              className={`flex hover:text-main-orang-admin ${
                activeMenuItem === 3 ? "text-orange-500" : ""
              }`}
            >
              <QuestionAnswerIcon className="ml-1" fontSize="" />
              <li
                className={`text-[14px] cursor-pointer `}
                onClick={() => handleMenuItemClick(3)}
              >
                نظرات
              </li>
            </div>
            <div
              className={`flex hover:text-main-orang-admin ${
                activeMenuItem === 4 ? "text-orange-500" : ""
              }`}
            >
              <GroupIcon className="ml-1" fontSize="" />
              <li
                className={`text-[14px] cursor-pointer `}
                onClick={() => handleMenuItemClick(4)}
              >
                کاربران
              </li>
            </div>
            <div className="flex " onClick={toggleSubMenu}>
              <ListIcon className="ml-1" fontSize="" />
              <li
                className={`text-[14px] cursor-pointer ${
                  activeMenuItem === 5 ? "text-orange-500" : ""
                }`}
              >
                <span className=" hover:text-main-orang-admin ">دسته بندی</span>
                {showSubMenu ? (
                  <KeyboardArrowDownIcon fontSize="" className="mr-[100px]" />
                ) : (
                  <KeyboardArrowLeftIcon fontSize="" className="mr-[100px]" />
                )}

                {showSubMenu && (
                  <div className="">
                    <ul>
                      <div className="flex  mt-6  hover:text-main-orang-admin  ">
                        <PersonAddAltIcon fontSize="" />
                        <li className=" text-[14px] cursor-pointer mr-1 ">
                          <a href="#">اضافه کردن دسته جدید</a>
                        </li>
                      </div>

                      <div className="flex  mt-6  hover:text-main-orang-admin ">
                        <RemoveRedEyeIcon fontSize="" />
                        <li className=" text-[14px] cursor-pointer mr-1 ">
                          <a href="#">لیست دسته ها</a>
                        </li>
                      </div>
                    </ul>
                  </div>
                )}
              </li>
            </div>

            <div className="flex " onClick={toggleSubMenu2}>
              <TheatersIcon className="ml-1" fontSize="" />
              <li
                className={`text-[14px] cursor-pointer ${
                  activeMenuItem === 6 ? "text-orange-500" : ""
                }`}
              >
                <span className=" hover:text-main-orang-admin ">فیلم ها</span>
                {showSubMenu2 ? (
                  <KeyboardArrowDownIcon fontSize="" className="mr-[120px]" />
                ) : (
                  <KeyboardArrowLeftIcon fontSize="" className="mr-[120px]" />
                )}

                {showSubMenu2 && (
                  <div className="">
                    <ul>
                      <div className="flex  mt-6  hover:text-main-orang-admin  ">
                        <PersonAddAltIcon fontSize="" />
                        <li className=" text-[14px] cursor-pointer mr-1 ">
                          <a href="#">اضافه کردن فیلم جدید</a>
                        </li>
                      </div>

                      <div className="flex  mt-6  hover:text-main-orang-admin ">
                        <RemoveRedEyeIcon fontSize="" />
                        <li className=" text-[14px] cursor-pointer mr-1 ">
                          <a href="#">لیست فیلم ها</a>
                        </li>
                      </div>
                    </ul>
                  </div>
                )}
              </li>
            </div>

            <div className="flex " onClick={toggleSubMenu3}>
              <TheatersIcon className="ml-1" fontSize="" />
              <li
                className={`text-[14px] cursor-pointer ${
                  activeMenuItem === 7 ? "text-orange-500" : ""
                }`}
              >
                <span className=" hover:text-main-orang-admin ">نمایش ها</span>
                {showSubMenu3 ? (
                  <KeyboardArrowDownIcon fontSize="" className="mr-[105px]" />
                ) : (
                  <KeyboardArrowLeftIcon fontSize="" className="mr-[105px]" />
                )}

                {showSubMenu3 && (
                  <div className="">
                    <ul>
                      <div className="flex  mt-6  hover:text-main-orang-admin  ">
                        <PersonAddAltIcon fontSize="" />
                        <li className=" text-[14px] cursor-pointer mr-1 ">
                          <a href="#">اضافه کردن نمایش جدید</a>
                        </li>
                      </div>

                      <div className="flex  mt-6  hover:text-main-orang-admin ">
                        <RemoveRedEyeIcon fontSize="" />
                        <li className=" text-[14px] cursor-pointer mr-1 ">
                          <a href="#">لیست نمایش ها</a>
                        </li>
                      </div>
                    </ul>
                  </div>
                )}
              </li>
            </div>
          </ul>
        )}
      </div>
      {showMedia && (
        <div className="h-[80px] w-[400px] mr-7 bg-[#2b292b44] mt-[75px]">
          <ul className="flex justify-around items-center">
            <div className="mt-3">
              <img
                src="Images/Profile.jpg"
                alt=""
                className="rounded-[50%] w-12"
              />
            </div>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <MailOutlineIcon />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
