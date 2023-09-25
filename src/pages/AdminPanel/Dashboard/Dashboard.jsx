import React from "react";
import Statistics from "../../../Components/Statistics/Statistics";
import DashboardSlider from "../../../Components/PanelAdmin/DashboardSliders/DashboardSliders";
import SideBar from "../../../Components/PanelAdmin/SideBar/SideBar";

import ChartUaersAdmin from "../../../Components/ChartUaersAdmin/ChartUaersAdmin";
import ChartGrouping from "../../../Components/ChartGrouping/ChartGrouping";
import FavoritesChart from "../../../Components/FavoritesChart/FavoritesChart";
import SideBarDesk from "../../../Components/PanelAdmin/SideBarDesk/SideBarDesk";
import TopBar from "../../../Components/PanelAdmin/TopBar/TopBar";

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-12  ">
        <div className="right col-span-2 hidden md:block ">
          <TopBar />
          <SideBarDesk />
        </div>

        <div className="left xl:col-span-10 2xl:col-span-10 col-span-12 md:mt-24 md:mr-[20px] mt-10 ">
          <div>
            <TopBar />
          </div>
          <div>
            <SideBar />
          </div>
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
          <div className="lg:grid lg:grid-cols-3 mt-5">
            <div className="lg:col-span-1">
              <ChartGrouping></ChartGrouping>
            </div>
            <div className="lg:col-span-2">chartfaivarit</div>
          </div>
        </div>
        <div className="col-span-1">
          <ChartUaersAdmin></ChartUaersAdmin>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-8">
        <div className="lg:col-span-1">
          <ChartGrouping></ChartGrouping>
        </div>
        <div className="lg:col-span-2">
          <FavoritesChart></FavoritesChart>
        </div>
      </div>
    </>
  );
}
