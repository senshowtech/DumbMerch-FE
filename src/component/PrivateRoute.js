import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  let isLogin = true;
  return isLogin ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRoute;
