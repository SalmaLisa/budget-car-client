import React from "react";

const CarCard = ({ car, setCarModel }) => {
  console.log(car);
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
    sellerEmail,
    sellerName,
    useYear,
  } = car;
  setCarModel(model)
  return( 
    <div className="w-9/12 mb-10">
      <div className="card lg:card-side">
  <figure><img className="w-7/12" src={image} alt="Album"/></figure>
  <div className="card-body">
          <h2 className="text-2xl font-bold">{productName}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    </div>
  )
};

export default CarCard;
