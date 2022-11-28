import React from "react";
import { TiTick } from "react-icons/ti";

const CarCard = ({ car, setCarInfo, setCarModel }) => {
  const {
    conditionType,
    date,
    image,
    location,
    model,
    originalPrice,
    phone,
    postTime,
    productName,
    purchaseYear,
    resalePrice,
    saleStatus,
    sellerStatus,
    sellerEmail,
    sellerName,
    useYear,
  } = car;

  setCarModel(model);

  //report an item
  const handleReport = () => {
    const reportedItem = {
      image,
      productName,
      model,
      resalePrice,
    };

    fetch("https://budget-car-server.vercel.app/reportedItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reportedItem),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <div className="bg-yellow-300 w-2/3 mx-auto h-[20px]"></div>
      <div className=" mb-10 py-12  bg-base-200">
        <div className="card lg:card-side">
          <figure>
            <img className="w-7/12" src={image} alt="Album" />
          </figure>
          <div className="card-bod p-0">
            <h2 className="text-2xl font-bold text-yellow-500 italic ">
              {productName}
            </h2>
            <p>Model : {model}</p>
            <p className="">
              Price :{" "}
              <span className="text-xl text-blue-600">${resalePrice}</span>
            </p>

            <div className="mt-6 ">
              <p className="font-bold mb-4">Detail Information : </p>
              <div className="flex">
                <div className="mr-10">
                  <p>Condition : {conditionType} </p>
                  <p>Purchase Year : {purchaseYear} </p>
                  <p>
                    Original Price :{" "}
                    <span className="text-xl text-blue-600">
                      ${originalPrice}
                    </span>
                  </p>
                </div>
                <div>
                  <p>Year of Use: {useYear} </p>
                  <p>
                    Status :{" "}
                    <span
                      className={`font-bold ${
                        saleStatus === "available"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {saleStatus}
                    </span>
                  </p>
                  <p>
                    Post : {postTime}, {date}{" "}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <p className="font-bold mb-4">Seller Information : </p>
                <div>
                  <p className="flex uppercase font-bold text-blue-600">
                    <span>{sellerName} </span>
                    <span>
                      {sellerStatus === "verified" && (
                        <TiTick className="-mt-1 ml-1 text-2xl"></TiTick>
                      )}
                    </span>{" "}
                  </p>
                  <p className="">{sellerEmail}</p>
                  <p>{phone}</p>
                  <p>{location}</p>
                </div>
              </div>
            </div>
            <div className="card-actions justify-end">
              <label
                onClick={() => setCarInfo(car)}
                htmlFor="booking-modal"
                className="bg-yellow-100 hover:bg-yellow-200 border border-yellow-600 px-5 py-2 font-bold cursor-pointer"
              >
                Book Now
              </label>
              <button
                onClick={handleReport}
                className="bg-red-600 hover:bg-red-700 border text-white px-5 py-2  cursor-pointer ml-5"
              >
                Report this item
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCard;
