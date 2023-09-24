import React from "react";
import Statistics from "../../../Components/statistics/statistics";
import DashboardSlider from "../../../Components/PanelAdmin/DashboardSliders/DashboardSliders";

export default function AdminPanel() {
  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <div className="col-span-2">
        <div>
          <Statistics></Statistics>
        </div>
        <div className="">
          <DashboardSlider></DashboardSlider>
        </div>
      </div>
      <div>mohammad</div>
    </div>
    </>
  );
}
