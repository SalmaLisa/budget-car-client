import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";

const SideNav = () => {
  const { user } = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isAdmin] = useAdmin(user?.email);
  console.log(isBuyer);
  return (
    <div className="h-full p-3 space-y-2 w-60 bg-yellow-100 text-gray-800">
      <div className="flex items-center p-2 space-x-4">
        <div>
          <h2 className="text-lg font-semibold">
            {user?.displayName.toUpperCase()}
          </h2>
          <span className="flex items-center space-x-1">
            <Link className="text-xs hover:underline text-gray-600">
              View profile
            </Link>
          </span>
        </div>
      </div>
      <div className="divide-y divide-gray-300">
        <ul className="pt-2 pb-4 space-y-1 ml-3 ">
          {isBuyer && (
            <li className=" text-gray-900">
              <Link
                to="/dashboard/MyOrders"
                className="p-2 rounded-md text-lg inline-block"
              >
                <span>My Orders</span>
              </Link>
            </li>
          )}
          {isSeller && (
            <>
              <li className=" text-gray-900">
                <Link
                  to="/dashboard/addProduct"
                  className="p-2 rounded-md text-lg inline-block"
                >
                  <span>Add Product</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard/myProducts"
                  className=" p-2 rounded-md text-lg inline-block"
                >
                  <span>My Products</span>
                </Link>
              </li>
            </>
          )}
          {isAdmin && (
            <>
              <li>
                <Link
                  to="/dashboard/allBuyers"
                  className=" p-2 rounded-md text-lg inline-block"
                >
                  <span>All Buyers</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/allSellers"
                  className=" p-2 rounded-md text-lg inline-block"
                >
                  <span>All Sellers</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/reportedItems"
                  className=" p-2 rounded-md text-lg inline-block"
                >
                  <span>Reported Items</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
