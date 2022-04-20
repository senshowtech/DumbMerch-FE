import { useNavigate } from "react-router-dom";
import "../../assets/css/home.css";
import { Card } from "react-bootstrap";

const CardHome = ({ id, nama, harga, stok, gambar }) => {
  const navigate = useNavigate();

  const DetailCard = (id) => {
    navigate("/detail-page", {
      state: {
        id: id,
      },
    });
  };

  let formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  return (
    <div className="col-6 col-md-3 col-lg-3 mt-3">
      <Card className="box-product" onClick={() => DetailCard(id)}>
        <Card.Img variant="top" src={gambar} />
        <Card.Body>
          <h6 className="judul-produk">{nama}</h6>
          <Card.Text className="paragrapgh-produk">
            {formatter.format(harga)}
          </Card.Text>
          <Card.Text className="paragrapgh-produk">{`${stok} Buah`}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardHome;
