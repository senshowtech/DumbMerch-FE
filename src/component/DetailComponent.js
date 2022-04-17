import React from "react";
import "../assets/css/detail.css";
import { Link, useLocation } from "react-router-dom";
import { dataProduk } from "../dummy/dataProduk";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const DetailComponent = () => {
  const { state } = useLocation();
  let data_detail = dataProduk[state.id];
  const [province, setProvince] = React.useState([]);
  const [namaKota, setnamaKota] = React.useState([]);
  const [kotaTujuan, setkotaTujuan] = React.useState(0);
  const [layanan, setLayanan] = React.useState([]);
  const [hasilAkhir, sethasilAkhir] = React.useState(0);
  const [stokCount, setstokCount] = React.useState(0);

  React.useEffect(() => {
    const getProvince = async () => {
      try {
        const response = await axios.get("http://localhost:5000/provinsi");
        setProvince(response.data.rajaongkir.results);
      } catch (error) {
        console.log(error);
      }
    };
    getProvince();
  }, []);

  const HandleNamaKota = async (e) => {
    const provinsi = e.target.value;
    try {
      const response = await axios.get(
        `http://localhost:5000/kota/${provinsi}`
      );
      setnamaKota(response.data.rajaongkir.results);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleKotaTujuan = (e) => {
    const kota = e.target.value;
    setkotaTujuan(kota);
  };

  const Layanan = async (e) => {
    const kurir = e.target.value;
    const kota_tujuan = kotaTujuan;
    try {
      const response = await axios.get(
        `http://localhost:5000/ongkos/1/${kota_tujuan}/1/${kurir}`
      );
      setLayanan(response.data.rajaongkir.results[0].costs);
    } catch (error) {
      console.log(error);
    }
  };

  const Hasil = (e) => {
    const hasil = e.target.value;
    sethasilAkhir(hasil);
  };

  const jumlahHarga = (e) => {
    let stok = e.target.value;
    console.log(stok);
  };

  const Tambah = () => {
    if (stokCount < data_detail.stok) {
      let tambah = stokCount + 1;
      setstokCount(tambah);
    }
  };

  const Kurang = () => {
    if (stokCount > 0) {
      let kurang = stokCount - 1;
      setstokCount(kurang);
    }
  };

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
          <div className="d-flex justify-content-between">
            <p className="paragrapgh-produk">{`Stock: ${
              data_detail.stok - parseInt(stokCount)
            }`}</p>
            <div className="d-flex">
              <Button className="button-kiri-count" onClick={Kurang}>
                -
              </Button>
              <Form.Group>
                <Form.Control
                  value={stokCount}
                  onChange={jumlahHarga}
                  type="text"
                  style={{ width: "59px", height: "35px", textAlign: "center" }}
                  placeholder="Edit Category"
                />
              </Form.Group>
              <Button className="button-kanan-count" onClick={Tambah}>
                +
              </Button>
            </div>
          </div>
          <p className="paragrapgh-produk">{data_detail.deskripsi}</p>
          <Form.Select
            onChange={HandleNamaKota}
            name="provinsi"
            className="select-pembayaran"
          >
            <option defaultValue={"Pilih"}>Pilih Provinsi</option>
            {province.map((value) => {
              return (
                <option key={value.province_id} value={value.province_id}>
                  {value.province}
                </option>
              );
            })}
          </Form.Select>
          <Form.Select
            onChange={HandleKotaTujuan}
            className="mt-4 select-pembayaran"
            name="kota"
          >
            <option defaultValue={"Pilih"}>Pilih Kota</option>
            {namaKota.map((value) => {
              return (
                <option key={value.city_id} value={value.city_id}>
                  {value.city_name}
                </option>
              );
            })}
          </Form.Select>
          <Form.Select
            className="mt-4 select-pembayaran"
            name="kurir"
            onChange={Layanan}
          >
            <option>Pilih Kurir</option>
            <option value="jne">JNE</option>
            <option value="pos">POS</option>
            <option value="tiki">TIKI</option>
          </Form.Select>
          <Form.Select className="mt-4 select-pembayaran" onChange={Hasil}>
            <option>Pilih Tipe Pengiriman</option>
            {layanan.map((value, i) => {
              return (
                <option value={value.cost[0].value} key={i}>
                  {value.service}
                </option>
              );
            })}
          </Form.Select>
          <div className="d-flex justify-content-end">
            <h3 className="judul-produk">
              {formatter.format(
                data_detail.harga * stokCount + parseInt(hasilAkhir)
              )}
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
