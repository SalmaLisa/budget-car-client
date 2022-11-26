import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import DashboardLoader from "../../shared/DashboardLoader";

const AllBuyer = () => {
  const { user } = useContext(AuthContext);
  const {data: buyers=[],refetch, isLoading } = useQuery({
    queryKey: ['buyers'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/buyers', {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ email: user?.email }),
      })
      const data = res.json()
      return data
    }
  })
  if (isLoading) {
   return <DashboardLoader></DashboardLoader>
  }
  const handleDelete = buyer => {
    axios.delete(`http://localhost:5000/sellers/${buyer._id}`, {
      headers: {
        authorization:`bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        console.log(res)
        if (res.data.deletedCount > 0) {
          toast.success(`${buyer.username} is deleted successfully `)
          refetch()
      }
    })
  .catch(err=>console.log(err))
  }
  return (
    <div className="overflow-x-auto">
      {
        buyers?.length === 0 ? <h1 className="text-3xl text-zinc-700 text-center my-5"> No Buyer Added Yet !</h1>:
      <h1 className="text-3xl text-zinc-700 text-center my-5">All Buyer</h1>
      }
      <table className="table table-zebra w-full">
       
        <tbody>
          {
            buyers?.map((buyer,idx)=><tr key={buyer._id}>
              <th>{idx +1}</th>
              <td>
                Name : {buyer.username} <br /> Email : {buyer.userEmail} 
               
              </td>
              <td>
                
                Phone : {buyer.phone ? buyer.phone :"not found"} <br />
                Location : {buyer.location ? buyer.location :"not found"}
              </td>
              
              <td>
                <button
                  onClick={()=>handleDelete(buyer)}
                  title="Delete"
                  className="bg-red-500 text-white px-8 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>)
          }
          
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyer;
