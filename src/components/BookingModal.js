import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthProvider';

const BookingModal = ({carInfo,setCarInfo}) => {
  const { user } = useContext(AuthContext);

console.log(carInfo)
  const formSubmit = (e) => {
    e.preventDefault()
    const bookingInfo = {
      username: user.displayName,
      email: user.email,
      location: e.target.location.value,
      phone:e.target.phone.value,
      carId:carInfo._id,
      productName: carInfo.productName,
      productPrice: carInfo.resalePrice,
      productImage: carInfo.image,
      carModel: carInfo.model,
      paymentStatus: "unpaid",
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
          setCarInfo(null)
        }
      });
    
     
  };
  return (
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
              <form onSubmit={formSubmit}>
                <div className="">
                  <label htmlFor="productName" className="text-sm">
                    Product Name
                  </label>
                  <input
                    
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
                    // {...register("email")}
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
                    name="location"
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
                    name="phone"
                    id="phone"
                    type="text"
                    placeholder=""
                    className="w-full px-4 py-2 rounded-md  focus:outline-none border text-gray-900"
                    required
                  />
                </div>
                <span>
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
  );
};

export default BookingModal;
