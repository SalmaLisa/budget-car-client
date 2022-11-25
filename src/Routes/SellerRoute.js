import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useSeller from '../hooks/useSeller';
import DashboardLoader from '../shared/DashboardLoader';

const SellerRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext)
  const location = useLocation()
  console.log(user?.email)
  const [isSeller, isSellerLoading] = useSeller(user?.email)
  if (isSellerLoading || isLoading) {
   return <DashboardLoader></DashboardLoader>
  }
  
  console.log(isSeller)
  if (user?.uid && isSeller) {
    return children
  }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default SellerRoute;