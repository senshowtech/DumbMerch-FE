import { Outlet, Navigate } from "react-router-dom";
import React from "react";

const PrivateRoute = () => {
  let Getdatalogin = localStorage.getItem("datalogin");
  let isLogin = JSON.parse(Getdatalogin).isLogin;
  return isLogin ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRoute;
