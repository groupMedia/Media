import React from "react";
import SideBar from "../../Components/PanelAdmin/SideBar/SideBar";
import Statistics from "../../Components/statistics/statistics";
export default function Home() {
  return (
    <div className="">
      <div>
        <SideBar />
      </div>
      <div>
        <Statistics></Statistics>
      </div>
    </div>
  );
}
