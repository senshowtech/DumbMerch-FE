import React from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

const OngkirComponent = () => {
  const [province, setProvince] = React.useState([]);
  const [namaKota, setnamaKota] = React.useState([]);
  const [kotaTujuan, setkotaTujuan] = React.useState(0);
  const [layanan, setLayanan] = React.useState([]);
  const [hasilAkhir, sethasilAkhir] = React.useState(0);

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

  return (
    <Form>
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
    </Form>
  );
};

export default OngkirComponent;
