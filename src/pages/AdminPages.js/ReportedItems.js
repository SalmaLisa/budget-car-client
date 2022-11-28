import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import DashboardLoader from "../../shared/DashboardLoader";

const ReportedItems = () => {
  const {
    data: reportedItems = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reportedItems"],
    queryFn: async () => {
      const res = await fetch(
        "https://budget-car-server.vercel.app/reportedItems"
      );
      const data = res.json();
      return data;
    },
  });
  console.log(reportedItems);
  if (isLoading) {
    return <DashboardLoader></DashboardLoader>;
  }

  const handleDelete = (item) => {
    axios
      .delete(
        `https://budget-car-server.vercel.app/reportedItems/${item._id}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.deletedCount > 0) {
          toast.success(`${item.productName} is deleted successfully `);
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="overflow-x-auto w-full mt-3">
      <table className="table w-full">
        <tbody>
          {reportedItems.map((item) => (
            <tr key={item._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="border border-yellow-200 p-3 w-44 h-36">
                      <img src={item.image} alt="Car" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.productName}</div>
                    <div className="text-sm ">Model : {item.model} </div>
                  </div>
                </div>
              </td>
              <td>Price : ${item.resalePrice}</td>

              <td>
                <button
                  onClick={() => handleDelete(item)}
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

export default ReportedItems;
