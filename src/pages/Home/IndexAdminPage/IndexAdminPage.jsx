import React from "react";
import SideBar from "../../../Components/PanelAdmin/SideBarDesk/SideBarDesk";
import TopBar from "../../../Components/PanelAdmin/TopBar/TopBar";
export default function IndexAdminPage() {
  return (
    <div className="">
        <TopBar/>
        <SideBar/>
      <div className="h-[100vh] flex justify-center items-center ">
        <h1 className="text-4xl">welcom to admin Panel</h1>
      </div>
    </div>
  );
}
