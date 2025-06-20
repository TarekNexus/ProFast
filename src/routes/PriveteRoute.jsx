import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PriveteRoute = ({ children }) => {
  const [loading, user] = useAuth();
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  if (!user) {
    <Navigate to="/login" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PriveteRoute;
