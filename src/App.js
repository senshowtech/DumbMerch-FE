import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/userContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { setAuthToken, API } from "./config/axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/main.css";
// product
import ProductPage from "./pages/Product/ProductPage";
import EditProductPage from "./pages/Product/EditProductPage";
import AddProductPage from "./pages/Product/AddProductPage";
// category
import CategoryPage from "./pages/Category/CategoryPage";
import EditCategoryPage from "./pages/Category/EditCategoryPage";
import AddCategoryPage from "./pages/Category/AddCategoryPage";
// profile
import ProfilePage from "./pages/Profile/ProfilePage";
// home
import Home from "./pages/Home/Home";
import HomeUser from "./pages/Home/HomeUser";
import DetailPage from "./pages/Home/DetailPage";
// auth
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import EditProfilePage from "./pages/Auth/EditProfilePage";
// complain
import ComplainAdminPage from "./pages/Complain/ComplainAdminPage";
import ComplainUserPage from "./pages/Complain/ComplainUserPage";

import PrivateRoute from "./component/PrivateRoute";
import NotFound from "./component/404NotFound";

const App = () => {
  const [state, dispatch] = useContext(UserContext);

  // Ngecek Auth jika di reload
  // set dispatch jika di reload
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  React.useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, [state]);

  React.useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await API.get("/check/auth");
        if (response.status === "failed") {
          return dispatch({
            type: "AUTH_ERROR",
          });
        }
        let data = response.data.data;
        dispatch({
          type: "USER_SUCCESS",
          payload: {
            user: data,
            isAdmin: localStorage.isAdmin,
            token: localStorage.token,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    checkUser();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          {/* User */}
          <Route path="/user" element={<HomeUser />} />
          <Route path="/detail-page" element={<DetailPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/complain-admin" element={<ComplainAdminPage />} />
          <Route path="/complain" element={<ComplainUserPage />} />
          {/* User */}

          {/* Admin */}
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/add-category" element={<AddCategoryPage />} />
          <Route path="/edit-product" element={<EditProductPage />} />
          <Route path="/edit-category" element={<EditCategoryPage />} />
          {/* Admin */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
