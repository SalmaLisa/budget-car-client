import React, { useState, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import banner from "../../assets/car-row2.jpg";
import CarCard from "../../components/CarCard";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";

const SingleModel = () => {
  const [carInfo, setCarInfo] = useState(null);
  const [carModel, setCarModel] = useState("");
  const cars = useLoaderData();

  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const formSubmit = (data) => {
    const bookingInfo = {
      ...data,
      productName: carInfo.productName,
      productPrice: carInfo.resalePrice,
      productImage: carInfo.image,
      carModel: carInfo.model,
      paymentStatus: "unpaid",
    };
    console.log("helloooooooooooooooooooooo", bookingInfo);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            text: "Booking Confirmed",
          });
        }
      });
  };

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
            setCarInfo={setCarInfo}
            setCarModel={setCarModel}
          ></CarCard>
        ))}
      </div>

      {/* booking modal */}

      {carInfo && (
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
              <form onSubmit={handleSubmit(formSubmit)}>
                <div className="">
                  <label htmlFor="productName" className="text-sm">
                    Product Name
                  </label>
                  <input
                    {...register("ProductName")}
                    id="productName"
                    type="text"
                    defaultValue={carInfo.productName}
                    className="w-full px-4 py-2 rounded-md  focus:outline-none border text-gray-900"
                    readOnly
                  />
                </div>
                <div className="">
                  <label htmlFor="resalePrice" className="text-sm">
                    Resale Price $
                  </label>
                  <input
                    {...register("resalePrice")}
                    id="resalePrice"
                    type="text"
                    defaultValue={carInfo.resalePrice}
                    className="w-full  px-4 py-2 rounded-md  focus:outline-none border text-gray-900"
                    readOnly
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="username" className="text-sm">
                    Username
                  </label>
                  <input
                    {...register("username")}
                    id="username"
                    type="text"
                    defaultValue={user?.displayName}
                    className="w-full px-4 py-2 rounded-md  focus:outline-none border text-gray-900"
                    readOnly
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    id="email"
                    type="text"
                    defaultValue={user?.email}
                    className="w-full px-4 py-2 rounded-md  focus:outline-none border text-gray-900"
                    readOnly
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="location" className="text-sm">
                    Meeting Location
                  </label>
                  <input
                    {...register("location")}
                    id="location"
                    type="text"
                    placeholder=""
                    className="w-full rounded-md  px-4 py-2 focus:outline-none border  text-gray-900"
                    required
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="phone" className="text-sm">
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    id="phone"
                    type="text"
                    placeholder=""
                    className="w-full px-4 py-2 rounded-md  focus:outline-none border text-gray-900"
                    required
                  />
                </div>
                <span onClick={() => setCarInfo(false)}>
                  <button
                    type="submit"
                    className="bg-yellow-100 border-yellow-400 border my-6 py-2 cursor-pointer w-full"
                  >
                    Submit
                  </button>
                </span>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleModel;
