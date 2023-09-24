import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import DashbordSlider from '../../Components/DashbordSlider/DashbordSlider';

export default function App() {
  return (
    <>
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
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
