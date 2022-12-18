import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ children, path, to }) => {
  let token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
