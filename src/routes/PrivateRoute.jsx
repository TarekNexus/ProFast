import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default PrivateRoute;
