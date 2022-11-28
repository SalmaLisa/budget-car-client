import React, { useState} from "react";
import { useLoaderData } from "react-router-dom";
import banner from "../../assets/car-row2.jpg";
import CarCard from "../../components/CarCard";
import BookingModal from "../../components/BookingModal";

const SingleModelCar = () => {
  const [carInfo, setCarInfo] = useState(null);
  const [carModel, setCarModel] = useState("");
  const cars = useLoaderData();

  console.log(carInfo);

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
        {cars.map((car) => (
          <CarCard
            key={car._id}
            car={car}
            setCarModel={setCarModel}
            setCarInfo={setCarInfo}
          ></CarCard>
        ))}
      </div>

      {/* booking modal */}

      {carInfo && (
        <BookingModal carInfo={carInfo}  setCarInfo={setCarInfo}></BookingModal>
      )}
    </div>
  );
};

export default SingleModelCar;
