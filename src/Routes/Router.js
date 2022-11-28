import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import AllBuyer from "../pages/AdminPages.js/AllBuyer";
import AllSeller from "../pages/AdminPages.js/AllSeller";
import ReportedItems from "../pages/AdminPages.js/ReportedItems";
import PaymentPage from "../pages/BuyerPages.js/PaymentPage";
import MyOrders from "../pages/BuyerPages.js/MyOrders";
import Home from "../pages/generalPages/Home";
import Login from "../pages/generalPages/Login";
import Signup from "../pages/generalPages/Signup";
import AddProduct from "../pages/sellerOnlyPages.js/AddProduct";
import MyProducts from "../pages/sellerOnlyPages.js/MyProducts";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";
import SingleModelCar from "../pages/generalPages/SingleModelCar";
import BuyerRoute from "./BuyerRoute";
import ErrorPage from "../pages/generalPages/ErrorPage";
import BlogPage from "../pages/generalPages/BlogPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/carModels/:model",
        element: (
          <PrivateRoute>
            <SingleModelCar></SingleModelCar>
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
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/MyOrders",
        element: (
          <BuyerRoute>
            <MyOrders></MyOrders>
          </BuyerRoute>
        ),
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
