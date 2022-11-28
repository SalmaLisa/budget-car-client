import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useQuery } from "@tanstack/react-query";
import SlideCard from "./SlideCard";

const Advertised = () => {
  const { data: advertisedProducts = [] } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await fetch(
        "https://budget-car-server.vercel.app/products/advertise"
      );
      const data = res.json();
      return data;
    },
  });
  console.log(advertisedProducts);
  return (
    <>
      <div className="bg-yellow-300 w-2/3 mx-auto h-[20px]"></div>
      <div className="bg-base-300 p-16">
        <h1 className="text-4xl text-center mb-16 italic">
          {" "}
          <span className="text-yellow-500 text-6xl">Latest</span> Collections
        </h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {advertisedProducts.map((advertisedProduct) => (
            <SwiperSlide key={advertisedProduct._id}>
              <SlideCard advertisedProduct={advertisedProduct}></SlideCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Advertised;
