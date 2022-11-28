import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";
import DashboardLoader from "../../shared/DashboardLoader";
import { TiTick } from "react-icons/ti";

const AllSeller = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const {
    data: sellers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/sellers", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ email: user?.email }),
      });
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <DashboardLoader></DashboardLoader>;
  }

  // seller status verify

  const handleVerify = (id) => {
    axios
      .put(
        `http://localhost:5000/sellers/verifyStatus/${id}`,
        {
          sellerStatus: "verified",
        },
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.acknowledged) {
          Swal.fire({
            icon: "success",
            text: "Seller is successfully verified!",
          });
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //delete a seller

  const handleDelete = (seller) => {
    axios
      .delete(`http://localhost:5000/sellers/${seller._id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.deletedCount > 0) {
          toast.success(`${seller.username} is deleted successfully `);
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="overflow-x-auto">
        {sellers.length === 0 ? (
          <h1 className="text-3xl text-zinc-700 text-center my-5">
            {" "}
            No Seller Added Yet !
          </h1>
        ) : (
          <h1 className="text-3xl text-zinc-700 text-center my-5">
            All Seller
          </h1>
        )}

        <table className="table table-zebra w-full">
          <tbody>
            {sellers?.map((seller, idx) => (
              <tr key={seller._id}>
                <th>{idx + 1}</th>
                <td>
                  Name : {seller.username} <br /> Email : {seller.userEmail}
                </td>
                <td>
                  Phone : {seller.phone} <br /> Location : {seller.location}
                </td>

                <td>
                  {seller.sellerStatus === "verified" ? (
                    <TiTick className=" ml-1 text-5xl text-blue-600"></TiTick>
                  ) : (
                    <button
                      onClick={() => handleVerify(seller._id)}
                      className="bg-yellow-500 text-gray-800 px-8 py-1 rounded"
                    >
                      Verify
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(seller)}
                    title="Delete"
                    className="bg-red-600 text-white px-8 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
