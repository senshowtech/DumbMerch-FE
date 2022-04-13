import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetailPage from "./pages/DetailPage";
import ProfilePage from "./pages/ProfilePage";
import ComplainAdminPage from "./pages/ComplainAdminPage";
import ComplainUserPage from "./pages/ComplainUserPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import EditProductPage from "./pages/EditProductPage";
import EditCategoryPage from "./pages/EditCategoryPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail-page" element={<DetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/complain-admin" element={<ComplainAdminPage />} />
        <Route path="/complain" element={<ComplainUserPage />} />
        {/* User */}

        {/* Admin */}
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/edit-product" element={<EditProductPage />} />
        <Route path="/edit-category" element={<EditCategoryPage />} />
        {/* Admin */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
