import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import DashboardLoader from '../shared/DashboardLoader';

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext)
  const [isAdmin, isAdminLoading] = useAdmin(user?.email)
  const location = useLocation()
  if (isLoading || isAdminLoading) {
    return <DashboardLoader></DashboardLoader>
  }
  if (user && isAdmin) {
    return children
  }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;