import { Routes, Route, BrowserRouter } from "react-router-dom";
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
import DetailPage from "./pages/Home/DetailPage";
// auth
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
// complain
import ComplainAdminPage from "./pages/Complain/ComplainAdminPage";
import ComplainUserPage from "./pages/Complain/ComplainUserPage";

import PrivateRoute from "./component/PrivateRoute";
import NotFound from "./component/404NotFound";
import OngkirPage from "./pages/OngkirPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ongkir" element={<OngkirPage />} />
        <Route path="/" element={<PrivateRoute />}>
          {/* User */}
          <Route path="/" element={<Home />} />
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
