import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import { API } from "../config/axios";

const ProfileRoute = () => {
  const dataResponse = React.useRef({});
  React.useEffect(() => {
    const getUser = async () => {
      try {
        const response = await API.get(
          "http://localhost:5000/api/v1/products/0"
        );
        dataResponse.current = response.status;
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  let token = true;
  if (dataResponse === 201) {
    token = true;
  }
  return token ? <Outlet /> : <Navigate to="profile" />;
};

export default ProfileRoute;
