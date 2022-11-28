import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import DashboardLoader from "../../shared/DashboardLoader";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const email =user.email
  const {
    data: bookings = [],
    isLoading,
  } = useQuery({
    queryKey: ["bookings",email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookings/${email}`, {
        method: "POST",
        headers: {
          "content-type":"application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ email:email }),
      });
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <DashboardLoader></DashboardLoader>;
  }
  console.log(bookings);
  return (
    <div className="overflow-x-auto w-full mt-3">
      {bookings.length === 0 && (
        <h1 className="text-3xl text-zinc-700 text-center my-5">
          {" "}
          You didn't make any order yet !
        </h1>
      )}
      <table className="table w-full">
        <tbody>
          {bookings?.map((booking) => (
            <tr key={booking._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="border border-yellow-200 p-3 w-44 h-36">
                      <img src={booking.productImage} alt="Car" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-2xl">
                      {booking.productName}
                    </div>
                    <div className="text-sm ">Model : {booking.carModel} </div>
                  </div>
                </div>
              </td>
              <td>
                Price :{" "}
                <span className="font-bold text-xl">
                  {" "}
                  ${booking.productPrice}
                </span>{" "}
              </td>
              <td>
                {booking.paymentStatus === "unpaid" ? (
                  <Link to={`/dashboard/payment/${booking._id}`}>
                    <button className="bg-yellow-500 font-bold px-5 py-1 rounded">
                      Pay
                    </button>
                  </Link>
                ) : (
                  <button
                    className="bg-yellow-500 font-bold px-5 py-1 rounded opacity-60"
                    disabled
                  >
                    Paid
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
