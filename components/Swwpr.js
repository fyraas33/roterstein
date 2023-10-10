"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import rt1 from "./img/rt1.jpg"
import rt2 from "./img/rt2.jpg"
import rt3 from "./img/rt3.jpg"
import rt4 from "./img/rt4.jpg"
import rt5 from "./img/rt5.jpg"
import rt6 from "./img/rt6.jpg"
import Image from "next/image";


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Swwpr() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={rt1} alt="" width={"auto"} height={"auto"} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={rt2} alt="" width={"auto"} height={"auto"} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={rt3} alt="" width={"auto"} height={"auto"} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={rt4} alt="" width={"auto"} height={"auto"} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={rt5} alt="" width={"auto"} height={"auto"} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={rt6} alt="" width={"auto"} height={"auto"} />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
