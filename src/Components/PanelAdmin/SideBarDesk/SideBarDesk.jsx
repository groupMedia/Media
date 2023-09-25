import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
import { Link } from "react-router-dom";

export default function SideBarDesk() {
  
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const [showSubMenu3, setShowSubMenu3] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(0);
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


  return (
    <div className="relative z-50">
      {isMobile ? null : (
        <div className="relative">
          <div className="bg-second-bg-web-dark h-[100%] md:w-[160px]  xl:w-[232px]  2xl:w-[293px]  fixed top-0 right-0  p-7 ">
            <img
              src='/Images/logo-light.png'
              alt="logo"
              className="w-[110px] "
            />
            <ul className=" mt-7 flex flex-col gap-y-7 transition-all duration-500">
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
                  <Link to={"/P-admin/dashboard"}>
                    <a href="">داشبورد</a>
                  </Link>
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
                  <Link to={"/P-admin/level"}>
                    <a href="">رتبه بندی</a>
                  </Link>
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
                  <Link to={"/P-admin/comments"}>
                    <a href=""> نظرات</a>
                  </Link>
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
                  <Link to={"/P-admin/users"}>
                    <a href=""> کاربران</a>
                  </Link>
                </li>
              </div>
              <div className="flex ">
                <li
                  className={`text-[14px] cursor-pointer`}
                  onClick={() => handleMenuItemClick(5)}
                >
                  <div
                    onClick={toggleSubMenu}
                    className={` ${
                      activeMenuItem === 5 ? "text-orange-500" : ""
                    } hover:text-main-orang-admin`}
                  >
                    <ListIcon className="ml-1" fontSize="" />

                    <span className="  ">دسته بندی</span>
                    {showSubMenu ? (
                      <KeyboardArrowDownIcon
                        fontSize=""
                        className="xl:mr-[80px] md:mr-[10px] "
                      />
                    ) : (
                      <KeyboardArrowLeftIcon
                        fontSize=""
                        className="xl:mr-[80px] md:mr-[10px]"
                      />
                    )}
                  </div>
                  {showSubMenu && (
                    <div className="">
                      <ul>
                        <div className="flex  mt-6  hover:text-main-orang-admin  ">
                          <PersonAddAltIcon fontSize="" />
                          <li className=" text-[14px] cursor-pointer mr-1 ">
                            <a
                              href="#"
                              onClick={() => {
                                console.log("hello");
                              }}
                            >
                              <Link to={"/P-admin/add-group"}>
                                <a href=""> اضافه کردن دسته بندی</a>
                              </Link>
                            </a>
                          </li>
                        </div>

                        <div className="flex  mt-6  hover:text-main-orang-admin ">
                          <RemoveRedEyeIcon fontSize="" />
                          <li className=" text-[14px] cursor-pointer mr-1 ">
                            <Link to={"/P-admin/list-group"}>
                              <a href=""> لیست دسته ها </a>
                            </Link>
                          </li>
                        </div>
                      </ul>
                    </div>
                  )}
                </li>
              </div>

              <div className="flex ">
                <li
                  onClick={() => handleMenuItemClick(6)}
                  className={`text-[14px] cursor-pointer `}
                >
                  <div
                    onClick={toggleSubMenu2}
                    className={`hover:text-main-orang-admin ${
                      activeMenuItem === 6 ? "text-orange-500" : ""
                    }`}
                  >
                    <TheatersIcon className="ml-1" fontSize="" />
                    <span className="  ">فیلم ها</span>
                    {showSubMenu2 ? (
                      <KeyboardArrowDownIcon
                        fontSize=""
                        className="xl:mr-[100px] md:mr-[30px]"
                      />
                    ) : (
                      <KeyboardArrowLeftIcon
                        fontSize=""
                        className="xl:mr-[100px] md:mr-[30px]"
                      />
                    )}
                  </div>

                  {showSubMenu2 && (
                    <div className="">
                      <ul>
                        <div className="flex  mt-6  hover:text-main-orang-admin  ">
                          <PersonAddAltIcon fontSize="" />
                          <li className=" text-[14px] cursor-pointer mr-1 ">
                          <Link to={"/P-admin/add-film"}>
                              <a href=""> افزودن فیلم </a>
                            </Link>
                          </li>
                        </div>

                        <div className="flex  mt-6  hover:text-main-orang-admin ">
                          <RemoveRedEyeIcon fontSize="" />
                          <li className=" text-[14px] cursor-pointer mr-1 ">
                          <Link to={"/P-admin/list-film"}>
                              <a href="">  لیست فیلم ها </a>
                            </Link>
                          </li>
                        </div>
                      </ul>
                    </div>
                  )}
                </li>
              </div>

              <div className="flex ">
                <li
                  onClick={() => handleMenuItemClick(7)}
                  className={`text-[14px] cursor-pointer `}
                >
                  <div
                    onClick={toggleSubMenu3}
                    className={`hover:text-main-orang-admin ${
                      activeMenuItem === 7 ? "text-orange-500" : ""
                    }`}
                  >
                    <TheatersIcon className="ml-1" fontSize="" />
                    <span className=" hover:text-main-orang-admin ">
                      نمایش ها
                    </span>
                    {showSubMenu3 ? (
                      <KeyboardArrowDownIcon
                        fontSize=""
                        className="xl:mr-[85px] md:mr-[14px]"
                      />
                    ) : (
                      <KeyboardArrowLeftIcon
                        fontSize=""
                        className="xl:mr-[85px] md:mr-[14px]"
                      />
                    )}
                  </div>

                  {showSubMenu3 && (
                    <div className="">
                      <ul>
                        <div className="flex  mt-6  hover:text-main-orang-admin  ">
                          <PersonAddAltIcon fontSize="" />
                          <li className=" text-[14px] cursor-pointer mr-1 ">
                           <Link to={"/P-admin/add-display"}>
                            افزودن نمایش
                           </Link>
                          </li>
                        </div>

                        <div className="flex  mt-6  hover:text-main-orang-admin ">
                          <RemoveRedEyeIcon fontSize="" />
                          <li className=" text-[14px] cursor-pointer mr-1 ">
                          <Link to={"/P-admin/list-display"}>
                            لیست نمایش ها
                           </Link>
                          </li>
                        </div>
                      </ul>
                    </div>
                  )}
                </li>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
