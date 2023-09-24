import React from "react";
import { Link } from "react-router-dom";
import DashbordSlider from "../../DashbordSlider/DashbordSlider";
export default function DashboardSliders() {
  return (
    <>
      <div className="px-8 bg-second-bg-web-dark flex flex-col justify-center items-center ">
        <div className="py-5 text-xl">
          <Link to={'./courses'}>محبوب ترین آیتم ها</Link>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
}
