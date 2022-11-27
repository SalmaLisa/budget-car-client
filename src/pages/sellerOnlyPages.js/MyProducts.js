import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";
import DashboardLoader from "../../shared/DashboardLoader";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products", {
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
console.log(products);
  //product advertise ===================
  const handleAdvertise = (product) => {
    axios
      .put(`http://localhost:5000/products/advertise/${product._id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            text: `${product.productName} is advertised !`,
          });
          refetch();
        }
      })
      .catch((err) => console.error(err));
  };

  // product delete =====================
  const handleDelete = (product) => {
    axios
      .delete(`http://localhost:5000/products/${product._id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.deletedCount > 0) {
          toast.success(`${product.productName} is deleted successfully `);
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="overflow-x-auto w-full mt-3">
      <table className="table w-full">
        <tbody>
          {products?.map((product) => (
            <tr key={product._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="border border-yellow-200 p-3 w-44 h-36">
                      <img src={product.image} alt="Car" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product.productName}</div>
                    <div className="text-sm ">Model : {product.model} </div>
                  </div>
                </div>
              </td>
              <td>Price : ${product.resalePrice}</td>
              <td>
                {product.saleStatus === "available" ? (
                  <p className="text-green-600 font-bold px-3 py-1 rounded">
                    Available
                  </p>
                ) : (
                  <p className="text-red-600 font-bold px-8 py-1 rounded">
                    Sold
                  </p>
                )}
              </td>
              <td>
                {product.saleStatus === "available" && (
                  <>
                    {product.status === "advertised" ? (
                      <button
                        onClick={() => handleAdvertise(product)}
                        className=" bg-yellow-300 text-red-600 font-semibold px-3 py-1 rounded opacity-60"
                        disabled
                      >
                        Advertised
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAdvertise(product)}
                        className="bg-yellow-300 font-semibold px-4 py-1 rounded"
                      >
                        Advertise
                      </button>
                    )}
                  </>
                )}
              </td>
              <td>
                <button
                  onClick={() => handleDelete(product)}
                  title="Delete"
                  className="bg-red-600 text-white px-5 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
