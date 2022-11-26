import React from "react";

const SlideCard = ({ advertisedProduct }) => {
  const { image, productName, model, resalePrice } = advertisedProduct;
  return (
    <div className="card glass text-center bg-zinc-800">
      <figure>
        <img src={image} alt="car!" />
      </figure>
      <div className="card-body p-0 -mt-12 py-5 text-white font-normal hover:text-black">
        <h2 className="text-2xl text-center">{productName}</h2>
        <span>Model : {model}</span>
        <span>Price : ${resalePrice}</span>
      </div>
    </div>
  );
};

export default SlideCard;
