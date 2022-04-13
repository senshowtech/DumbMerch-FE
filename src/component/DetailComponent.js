import "../assets/css/detail.css";
import { Link } from "react-router-dom";

const DetailComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg">
          <div className="gambar-detail">
            <img
              src={require("../assets/img/mouse-besar.png")}
              className="img-fluid"
              alt="..."
            />
          </div>
        </div>
        <div className="col-12 col-lg">
          <h1 className="judul-produk">Mouse</h1>
          <p className="paragrapgh-produk">Stock : 600</p>
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
            <h3 className="judul-produk">Rp.50.000</h3>
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
