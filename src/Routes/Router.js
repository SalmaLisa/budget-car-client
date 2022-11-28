import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import AllBuyer from "../pages/AdminPages.js/AllBuyer";
import AllSeller from "../pages/AdminPages.js/AllSeller";
import ReportedItems from "../pages/AdminPages.js/ReportedItems";
import Home from "../pages/generalPages/Home";
import Login from "../pages/generalPages/Login";
import MyOrders from "../pages/generalPages/MyOrders";
import PaymentPage from "../pages/generalPages/PaymentPage";
import Signup from "../pages/generalPages/Signup";
import SingleModel from "../pages/generalPages/SingleModel";
import AddProduct from "../pages/sellerOnlyPages.js/AddProduct";
import MyProducts from "../pages/sellerOnlyPages.js/MyProducts";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/carModels/:model",
        element: (
          <PrivateRoute>
            <SingleModel></SingleModel>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://budget-car-server.vercel.app/carModels/${params.model}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/MyOrders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <PaymentPage></PaymentPage>,
        loader: ({ params }) =>
          fetch(
            `https://budget-car-server.vercel.app/bookingPayment/${params.id}`
          ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myProducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allBuyers",
        element: (
          <AdminRoute>
            <AllBuyer></AllBuyer>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allSellers",
        element: (
          <AdminRoute>
            <AllSeller></AllSeller>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reportedItems",
        element: (
          <AdminRoute>
            <ReportedItems></ReportedItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);
