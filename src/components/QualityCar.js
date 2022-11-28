import React from "react";
import banner from "../assets/running-car.png";
import img1 from "../assets/Sedans/Sedans1.webp";
import img2 from "../assets/Sedans/Sedans2.webp";
import img3 from "../assets/Green-Cars/Green-Cars2.webp";
import img4 from "../assets/Green-Cars/Green-Cars.webp";

const QualityCar = () => {
  return (
    <>
      <div className="relative">
        <div
          style={{
            background: `url(${banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="h-[460px] relative"
        ></div>
        <div className=" h-full w-full bg-zinc-800 opacity-80 absolute right-0 top-0 z-10"></div>
        <div className="absolute top-48 lg:top-36 left-6 lg:left-96 lg:text-center text-white z-30">
          <p className=" text-5xl lg:text-7xl italic font-bold uppercase">
            {" "}
            <span
              style={{ fontFamily: "'Playball', cursive" }}
              className="lg:text-5xl font-normal capitalize lg:inline-block mb-5"
            >
              Wide Variety of
            </span>
            <br /> QUALITY USED{" "}
            <span className="text-yellow-400">
              {" "}
              <br />
              CARS
            </span>
          </p>
        </div>
        <div className="p-2 bg-zinc-600 lg:w-2/3  absolute -top-24 lg:left-52 z-30">
          <div className="container flex flex-col justify-center p-2 md:p-4 mx-auto">
            <div className="grid gap-5 grid-cols-4 h-40">
              <div className="">
                <img
                  className="object-cover w-full h-full bg-yellow-100"
                  src={img1}
                  alt=""
                />
              </div>
              <img
                className="object-cover w-full h-full  bg-yellow-100"
                src={img2}
                alt=""
              />
              <img
                className="object-cover w-full h-full bg-yellow-100"
                src={img3}
                alt=""
              />
              <img
                className="object-cover  w-full h-full bg-yellow-100"
                src={img4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-300 w-full mx-auto h-[20px]"></div>
    </>
  );
};

export default QualityCar;
