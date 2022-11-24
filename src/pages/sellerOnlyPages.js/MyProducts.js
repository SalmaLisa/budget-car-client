import React from "react";

const MyProducts = () => {
  return (
    <div className="overflow-x-auto w-full mt-3" >
      <table className="table w-full">
        <tbody>
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">Model : </div>
                </div>
              </div>
            </td>
            <td>
              Price : 
             
            </td>
            <td>
              <button className="bg-green-500 text-white px-3 py-1 rounded">Available</button>
              <button className="bg-red-500 text-white px-8 py-1 rounded">Sold</button>
            </td>
            <th>
            <button className="bg-yellow-500 text-zinc-700 px-3 py-1 rounded">Advertise</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
