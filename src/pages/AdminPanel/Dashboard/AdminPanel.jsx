import React from "react";
import Statistics from "../../../Components/statistics/statistics";
import DashboardSlider from "../../../Components/PanelAdmin/DashboardSliders/DashboardSliders";
import ChartUaersAdmin from "../../../Components/ChartUaersAdmin/ChartUaersAdmin";

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
      <div className="">
        <ChartUaersAdmin></ChartUaersAdmin>
      </div>
    </div>
    </>
  );
}
