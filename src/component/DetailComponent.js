import "../assets/css/detail.css";
import { Link, useLocation } from "react-router-dom";
import { dataProduk } from "../dummy/dataProduk";
import OngkirComponent from "./OngkirComponent";

const DetailComponent = () => {
  const { state } = useLocation();
  let data_detail = dataProduk[state.id];

  let formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg">
          <div className="d-flex justify-content-center justify-content-lg-end h-100 align-items-center">
            <div className="gambar-detail">
              <img src={data_detail.gambar} className="img-fluid" alt="..." />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg mb-5">
          <h1 className="judul-produk">{data_detail.nama}</h1>
          <p className="paragrapgh-produk">{`Stock: ${data_detail.stok}`}</p>
          <p className="paragrapgh-produk">{data_detail.deskripsi}</p>
          <OngkirComponent />
          <div className="d-flex justify-content-end">
            <h3 className="judul-produk">
              {formatter.format(data_detail.harga)}
            </h3>
          </div>
          <Link to="/profile" className="btn button-detail">
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DetailComponent;
