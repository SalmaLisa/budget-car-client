import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { RiSecurePaymentFill } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";

const PaymentPage = () => {
  const booking = useLoaderData()
  const {productPrice}=booking
  console.log(booking)
  const stripe = useStripe();
  const elements = useElements();
  const [passError, setPassError] = useState("");
 
  const [clientSecret, setClientSecret] = useState("");


 
  // useEffect(() => {
    
  //   fetch("http://localhost:5000/create-payment-intent", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization : `bearer ${localStorage.getItem('accessToken')}`
  //     },
  //     body: JSON.stringify({price:productPrice}),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, [productPrice]);

console.log(clientSecret)
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setPassError(error.message);
    } else {
      setPassError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
  };
  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex justify-center px-5 pb-10 pt-16">
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 text-gray-700 h-[400px]"
        style={{ maxWidth: "600px" }}
      >
        <div className="w-full pt-1 pb-5">
          <div className="bg-green-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
            <RiSecurePaymentFill className="text-5xl"></RiSecurePaymentFill>
          </div>
          <div className="mt-5 flex items-center justify-center w-full">
            <img
              src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
              className="h-5 ml-3 "
              alt=""
            />
          </div>
        </div>

        <div className="mb-10">
          <h1 className="text-center font-bold text-xl uppercase">
            Secure payment info
          </h1>
        </div>

        <div className="mb-8 flex -mx-2 "></div>
        <CardElement
          className="border py-3 px-4"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        {passError && <p className="text-red-600 mt-3">{passError}</p>}

        <div>
          <button
            type="submit"
            className="block w-full max-w-xs mx-auto bg-yellow-100 hover:bg-yellow-200 border border-yellow-400 rounded-lg px-3 py-3 font-semibold mt-16"
            disabled={!stripe}
          >
            PAY NOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;
