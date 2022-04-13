import { Link } from "react-router-dom";
import "../assets/css/home.css";

const CardHome = ({ nama, harga, stok, gambar }) => {
  return (
    <div className="col-12 col-md-5 col-lg-3 mt-3">
      <div className="box-product">
        <img src={gambar} className="img-fluid img-home" alt="..." />
        <Link to="/detail-page" className="judul-produk">
          {nama}
        </Link>
        <p className="paragrapgh-produk">{`Rp.${harga}`}</p>
        <p className="paragrapgh-produk">{`${stok} Buah`}</p>
      </div>
    </div>
  );
};

export default CardHome;
