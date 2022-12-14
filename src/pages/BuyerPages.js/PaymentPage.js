import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { RiSecurePaymentFill } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const PaymentPage = () => {
  const booking = useLoaderData();
  const { _id, productName, productPrice, username, email } = booking;
  const price = parseInt(productPrice);
  console.log(booking);
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState("");

  const [clientSecret, setClientSecret] = useState("");

  //time
  const today = new Date();
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const min = `${minutes < 10 ? "0" + minutes : minutes}`;
  const time = `${hour > 12 ? hour - 12 : hour}:${min} ${
    hour > 12 ? "PM" : "AM"
  }`;
  //date
  const days = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = `${days}/${month + 1}/${year}`;

  useEffect(() => {
    fetch("https://budget-car-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price: price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  console.log(clientSecret);

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
      setPaymentError(error.message);
    } else {
      setPaymentError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: username,
            email: email,
          },
        },
      });
    if (confirmError) {
      setPaymentError(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const paymentData = {
        username,
        email,
        product: productName,
        price: productPrice,
        transactionId: paymentIntent.id,
        time,
        date,
      };

      fetch("https://budget-car-server.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Congratulations ! Payment successful ",
              text: `TransactionId : ${paymentIntent.id}`,
            });
          }
          console.log(data);
        });

      fetch(`https://budget-car-server.vercel.app/bookingPayment/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

    console.log(paymentError);
  };
  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex justify-center px-5 pb-10 pt-16">
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 text-gray-700 h-[400px]"
        style={{ maxWidth: "600px" }}
      >
        <div className="w-full pt-1 pb-5">
          <div className="bg-green-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-8 mx-auto shadow-lg flex justify-center items-center">
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
          <h1 className="text-center text-xl ">
            Pay <span className="font-bold"> ${productPrice} </span> for{" "}
            <span className="font-bold">{productName}</span>
          </h1>
        </div>

        <div className="mb-8 flex -mx-2 "></div>
        <CardElement
          className="border border-zinc-400 py-3 px-4"
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

        {paymentError && <p className="text-red-600 mt-3">{paymentError}</p>}

        <div>
          <button
            type="submit"
            className="block w-full max-w-xs mx-auto bg-yellow-100 hover:bg-yellow-200 border border-zinc-400 rounded-lg px-3 py-3 font-semibold mt-16"
            disabled={!stripe || !clientSecret}
          >
            PAY NOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;
