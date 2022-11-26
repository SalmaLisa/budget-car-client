import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import banner from "../../assets/car-row2.jpg";
import CarCard from "../../components/CarCard";


const SingleModel = () => {
  const [carModel,setCarModel ]=useState('')
  const cars = useLoaderData();
  console.log(cars);
  return (
    <div>
      <div className="relative">
        <img className="w-full h-[250px]" src={banner} alt="" />
        <div className="w-full h-[250px] bg-black opacity-60 absolute top-0"></div>
        <div className="absolute top-28 left-[520px] italic text-4xl text-white uppercase">
          <h1>{carModel}</h1>
        </div>
      </div>
      
      <div className=" my-20">
        {cars.map(car=><CarCard car={car} setCarModel ={setCarModel}></CarCard>)}
      </div>
    </div>
  );
};

export default SingleModel;
