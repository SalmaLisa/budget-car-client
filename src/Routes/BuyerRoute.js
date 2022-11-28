import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useBuyer from '../hooks/useBuyer';
import DashboardLoader from '../shared/DashboardLoader';

const BuyerRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext)
  const location = useLocation()
  console.log(user?.email)
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email)
  if (isBuyerLoading || isLoading) {
   return <DashboardLoader></DashboardLoader>
  }
  
  console.log(isBuyer)
  if (user?.uid && isBuyer) {
    return children
  }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default BuyerRoute;