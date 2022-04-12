import { Link } from "react-router-dom";
import "../assets/css/home.css";

const CardHome = () => {
  return (
    <div className="col-12 col-md-5 col-lg-3 mt-3">
      <div className="box-product">
        <img
          src={require("../assets/img/keyboard.png")}
          className="img-fluid img-home"
          alt="..."
        />
        <Link to="/detail-page" className="judul-produk">
          Keyboard
        </Link>
        <p className="paragrapgh-produk">Rp. 50.000</p>
        <p className="paragrapgh-produk">Stock 600</p>
      </div>
    </div>
  );
};

export default CardHome;
