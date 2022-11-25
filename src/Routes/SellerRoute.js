import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useSeller from '../hooks/useSeller';

const SellerRoute = ({ children }) => {
  const { user } = useContext(AuthContext)
  console.log(user.email)
  const [isSeller] = useSeller(user?.email)
  const location = useLocation()
  console.log(isSeller)
  if (user.uid && isSeller) {
    return children
  }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default SellerRoute;