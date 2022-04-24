import { Outlet, Navigate } from "react-router-dom";
import React from "react";

const PrivateRoute = () => {
  let Getdatalogin = localStorage.getItem("token");
  let token = false;
  if (Getdatalogin !== null) {
    token = true;
  }
  return token ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRoute;
