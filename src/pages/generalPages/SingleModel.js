import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import banner from "../../assets/car-row2.jpg";
import CarCard from "../../components/CarCard";
import ModalForm from "../../components/ModalForm"


const SingleModel = () => {
  const [carModel, setCarModel] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [isBookingModal, setIsBookingModal] = useState(true);
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
        {cars.map((car) => (
          <CarCard
            key={car._id}
            car={car}
            setCarModel={setCarModel}
            setProductName={setProductName}
            setProductPrice={setProductPrice}
            setIsBookingModal={setIsBookingModal}
            setProductImage={setProductImage}
          ></CarCard>
        ))}
      </div>

      {/* booking modal */}
      {isBookingModal && (
        <>
          <input type="checkbox" id="booking-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="booking-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <ModalForm
                productPrice={productPrice}
                productName={productName}
                productImage={productImage}
                carModel={carModel}
                setIsBookingModal={setIsBookingModal}
              ></ModalForm>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleModel;
