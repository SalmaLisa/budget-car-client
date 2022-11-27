import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthProvider';


const ModalForm = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const formSubmit = (data) => {
    const bookingInfo = {
      ...data,
      // productName,
      // productPrice,
      // productImage,
      // carModel,
      paymentStatus:"unpaid"
    };
    
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
    <form onSubmit={handleSubmit(formSubmit)}>
    <div className="">
      <label htmlFor="productName" className="text-sm">
        Product Name
      </label>
      <input
        id="productName"
        type="text"
        
        className="w-full px-4 py-2 rounded-md  focus:outline-none border text-gray-900"
      />
    </div>
    <div className="">
      <label htmlFor="resalePrice" className="text-sm">
        Resale Price $
      </label>
      <input
        id="resalePrice"
        type="text"
        
        className="w-full  px-4 py-2 rounded-md  focus:outline-none border text-gray-900"
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
    <input
      type="submit"
      value="Submit"
      className="bg-yellow-100 border-yellow-400 border my-6 py-2 cursor-pointer w-full"
    />
  </form>
  );
};

export default ModalForm;