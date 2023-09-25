import React from "react";
import SideBarDesk from "../../../Components/PanelAdmin/SideBarDesk/SideBarDesk";
import SideBar from "../../../Components/PanelAdmin/SideBar/SideBar";
import TopBar from "../../../Components/PanelAdmin/TopBar/TopBar";
export default function IndexAdminPage() {
  return (
    <div className="grid grid-cols-12  ">
      <div className="right col-span-2 hidden md:block ">
        <TopBar />
        <SideBarDesk />
      </div>

      <div className="left xl:col-span-10 2xl:col-span-10 col-span-12 md:mt-24 md:mr-[20px] ">
        <div className="flex justify-center items-center h-[100vh]">
          <div>
            <TopBar />
          </div>
          <div>
            <SideBar />
          </div>
          <h1>به ادمین پنل خوش اومدی!</h1>
        </div>
      </div>
    </div>
  );
}
