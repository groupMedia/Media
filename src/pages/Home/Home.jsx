import React from "react";
import TopBar from "./../../Components/PanelAdmin/TopBar/TopBar"
import SideBar from "../../Components/PanelAdmin/SideBar/SideBar";
import AdminPanel from "../AdminPanel/Dashboard/AdminPanel";
export default function Home() {
  return (
    <div className="">
      <div>
        <TopBar/>
      </div>
      <div>
        <SideBar />
      </div>
      <AdminPanel></AdminPanel>
    </div>
  );
}
