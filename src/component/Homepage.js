const Homepage = () => {
  return (
    <div className="container">
      <h5 className="judul-produk">Product</h5>
      <div className="row">
        <div className="col-12 col-md-5 col-lg-3 mt-3">
          <div className="box-product">
            <img
              src={require("../assets/img/mouse.png")}
              className="img-fluid"
              alt="..."
            />
            <a className="judul-produk" href="/detail-page">
              Mouse
            </a>
            <p className="paragrapgh-produk">Rp. 50.000</p>
            <p className="paragrapgh-produk">Stock 600</p>
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-3 mt-3">
          <div className="box-product">
            <img
              src={require("../assets/img/keyboard.png")}
              className="img-fluid"
              alt="..."
            />
            <a className="judul-produk" href="/detail-page">
              Keyboard
            </a>
            <p className="paragrapgh-produk">Rp. 50.000</p>
            <p className="paragrapgh-produk">Stock 600</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
