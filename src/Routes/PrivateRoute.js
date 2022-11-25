import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Loader from '../shared/Loader';

const PrivateRoute = ({children}) => {
  const { user, isLoading } = useContext(AuthContext)
  const location = useLocation()
  if (isLoading) {
    return <Loader></Loader>
  }
  if (user?.uid) {
    return children
  }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;