import "../assets/css/detail.css";
import { Link, useLocation } from "react-router-dom";
import { dataProduk } from "../dummy/dataProduk";

const DetailComponent = () => {
  const { state } = useLocation();
  let data_detail = dataProduk[state.id];
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg">
          <div className="d-flex justify-content-end h-100 align-items-center">
            <div className="gambar-detail">
              <img src={data_detail.gambar} className="img-fluid" alt="..." />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg">
          <h1 className="judul-produk">{data_detail.nama}</h1>
          <p className="paragrapgh-produk">{`Stock: ${data_detail.stok}`}</p>
          <p className="paragrapgh-produk">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            porro, sequi nemo voluptates, ab quo inventore eaque corrupti eum
            ipsam soluta dolorem autem odit adipisci aut perferendis libero.
            Itaque laboriosam eaque laborum impedit tempore facilis quisquam
            ipsa distinctio expedita, quam animi laudantium illum voluptas minus
            illo numquam suscipit eos dolores! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Ipsum porro, sequi nemo voluptates, ab
            quo inventore eaque corrupti eum ipsam soluta dolorem autem odit
            adipisci aut perferendis libero. Itaque laboriosam eaque laborum
            impedit tempore facilis quisquam ipsa distinctio expedita, quam
            animi laudantium illum voluptas minus illo numquam suscipit eos
            dolores!
          </p>
          <div className="d-flex justify-content-end">
            <h3 className="judul-produk">{`Rp.${data_detail.harga}`}</h3>
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
