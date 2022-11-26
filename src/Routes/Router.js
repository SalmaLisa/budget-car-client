import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import AllBuyer from "../pages/AdminPages.js/AllBuyer";
import AllSeller from "../pages/AdminPages.js/AllSeller";
import Home from "../pages/generalPages/Home";
import Login from "../pages/generalPages/Login";
import Signup from "../pages/generalPages/Signup";
import AddProduct from "../pages/sellerOnlyPages.js/AddProduct";
import MyProducts from "../pages/sellerOnlyPages.js/MyProducts";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path: '/home',
        element:<Home></Home>,
      },
      {
        path: '/login',
        element:<Login></Login>,
      },
      {
        path: '/signup',
        element:<Signup></Signup>,
      },
      {
        path: '/signup',
        element:<Signup></Signup>,
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: '/dashboard/addProduct',
        element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
      },
      {
        path: '/dashboard/myProducts',
        element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
      },
      {
        path: '/dashboard/allBuyers',
        element:<AdminRoute><AllBuyer></AllBuyer></AdminRoute>
      },
      {
        path: '/dashboard/allSellers',
        element:<AdminRoute><AllSeller></AllSeller></AdminRoute>
      },
    ]
  }
])