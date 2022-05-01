import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API } from "../config/axios";

const PrivateRoute = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await API.get("/users");
        if (response.status === 201) {
          if (response.data.data.users.profiles.address === null) {
            navigate("/edit-profile");
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [navigate]);

  let Getdatalogin = localStorage.getItem("token");
  let token = false;
  if (Getdatalogin !== null) {
    token = true;
  }

  return token ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRoute;
