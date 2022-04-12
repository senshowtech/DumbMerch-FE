import "../assets/css/home.css";
import CardHome from "./CardHome";
const HomePage = () => {
  return (
    <div className="container">
      <h5 className="judul-produk">Product</h5>
      <div className="row">
        <CardHome />
      </div>
    </div>
  );
};

export default HomePage;
