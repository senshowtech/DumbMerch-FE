import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetailPage from "./pages/DetailPage";
import ProfilePage from "./pages/ProfilePage";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/detail-page" element={<DetailPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default App;
