import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import Home from "../pages/generalPages/Home";
import Login from "../pages/generalPages/Login";
import Signup from "../pages/generalPages/Signup";
import AddProduct from "../pages/sellerOnlyPages.js/AddProduct";
import MyProducts from "../pages/sellerOnlyPages.js/MyProducts";


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
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/addProduct',
        element:<AddProduct></AddProduct>
      },
      {
        path: '/dashboard/myProducts',
        element:<MyProducts></MyProducts>
      },
    ]
  }
])