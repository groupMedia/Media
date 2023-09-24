import React from "react";
import TopBar from "./../../Components/PanelAdmin/TopBar/TopBar"
import SideBar from "../../Components/PanelAdmin/SideBar/SideBar";
import Statistics from "../../Components/statistics/statistics";
import DashboardSlider from "../../Components/PanelAdmin/DashboardSlider/DashboardSlider";
export default function Home() {
  return (
    <div className="">
      <div>
        <TopBar/>
      </div>
      <div>
        <SideBar />
      </div>
      <div>
        <Statistics></Statistics>
      </div>
      <div>
        <DashboardSlider></DashboardSlider>
      </div>
    </div>
  );
}
