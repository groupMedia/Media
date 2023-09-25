import React from "react";
import Statistics from "../../../Components/statistics/statistics";
import DashboardSlider from "../../../Components/PanelAdmin/DashboardSliders/DashboardSliders";
import ChartUaersAdmin from "../../../Components/ChartUaersAdmin/ChartUaersAdmin";
import ChartGrouping from "../../../Components/ChartGrouping/ChartGrouping";

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="">
            <Statistics></Statistics>
          </div>
          <div className="">
            <DashboardSlider></DashboardSlider>
          </div>
        </div>
        <div className="col-span-1">
          <ChartUaersAdmin></ChartUaersAdmin>
        </div>
      </div>
        <div>
          <ChartGrouping></ChartGrouping>
        </div>
    </>
  );
}
