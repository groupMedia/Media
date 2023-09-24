import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import DashbordSlider from "../../DashbordSlider/DashbordSlider";

export default function DashboardSliders() {
  return (
    <>
      <div className="px-8 bg-second-bg-web-dark flex flex-col justify-center items-center ">
        <div className="py-5 text-xl">
          <Link to={"./courses"}>محبوب ترین آیتم ها</Link>
        </div>
      </div>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <DashbordSlider></DashbordSlider>
          </SwiperSlide>
          <SwiperSlide>
            <DashbordSlider></DashbordSlider>
          </SwiperSlide>
          <SwiperSlide>
            <DashbordSlider></DashbordSlider>
          </SwiperSlide>
          <SwiperSlide>
            <DashbordSlider></DashbordSlider>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
