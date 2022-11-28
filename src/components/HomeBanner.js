import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import bg1 from "../assets/banner/banner1.png";
import bg2 from "../assets/banner/banner2.png";
import bg3 from "../assets/banner/banner3.png";
import smbg1 from "../assets/banner/sm-bg2.png";
import smbg2 from "../assets/banner/sm-bg3.png";
import smbg3 from "../assets/banner/sm-bg4.png";

import { Autoplay, Pagination, Navigation } from "swiper";

const HomeBanner = () => {
  return (
    <section>
      <div className="hidden md:block">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper relative"
      >
        <div>
          <SwiperSlide>
            <img className="w-full" src={bg1} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-full" src={bg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full " src={bg3} alt="" />
          </SwiperSlide>
        </div>
        <div className=" h-full w-1/2 bg-zinc-800 opacity-80 absolute top-0 z-10"></div>
        <div className="absolute top-24 left-56 text-right text-white z-30">
          <p className="text-7xl italic font-bold uppercase">
            {" "}
            <span
              style={{ fontFamily: "'Playball', cursive" }}
              className="text-5xl font-normal capitalize inline-block mb-5"
            >
              Affordable
            </span>
            <br /> Used {' '}
            <span className="text-yellow-400">Cars</span>
          </p>
          <p className="italic mt-32">
            Find a Car at{" "} <br />
            <span className="text-yellow-400">
              Best Price</span>
            
          </p>
        </div>
      </Swiper>
      </div>
      <div className="md:hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper relative"
      >
        <div>
          <SwiperSlide>
            <img className="w-full" src={smbg1} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-full" src={smbg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full " src={smbg3} alt="" />
          </SwiperSlide>
        </div>
        <div className=" h-full w-full bg-zinc-800 opacity-80 absolute top-0 z-10"></div>
        <div className="absolute top-20 left-6 text-center text-white z-30">
          <p className="text-6xl italic font-bold uppercase px-1">
            {" "}
            <span
              style={{ fontFamily: "'Playball', cursive" }}
              className="text-5xl font-normal capitalize inline-block mb-5"
            >
              Affordable
            </span>
            <br /> Used {' '}
            <span className="text-yellow-400">Cars</span>
          </p>
          <p className="italic mt-5 text-3xl">
            Find a Car at{" "}
            <span className="text-yellow-400">
              Best Price</span>
            
          </p>
        </div>
      </Swiper>
      </div>
      <div className="bg-yellow-300 w-2/3 mx-auto h-[20px]"></div>
    </section>
  );
};

export default HomeBanner;
