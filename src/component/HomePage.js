import "../assets/css/home.css";
import { dataProduk } from "../dummy/dataProduk";
import CardHome from "./CardHome";
import React from "react";
import { Form } from "react-bootstrap";

const HomePage = () => {
  const [values, setValues] = React.useState("");

  let data_search = dataProduk.filter((value) => {
    return value.nama.toLocaleLowerCase().includes(values.toLocaleLowerCase());
  });

  return (
    <div className="container">
      <h5 className="judul-produk">Product</h5>
      <Form.Control
        values={values}
        onChange={(e) => setValues(e.target.value)}
        type="text"
        placeholder="Search By Nama Produk"
        className="form-search"
      />
      <div className="row">
        {data_search.length === 0
          ? dataProduk.map((value, index) => {
              return (
                <CardHome
                  key={value.id}
                  id={index}
                  nama={value.nama}
                  harga={value.harga}
                  stok={value.stok}
                  gambar={value.gambar}
                />
              );
            })
          : data_search.map((value, index) => {
              return (
                <CardHome
                  key={value.id}
                  id={index}
                  nama={value.nama}
                  harga={value.harga}
                  stok={value.stok}
                  gambar={value.gambar}
                />
              );
            })}
      </div>
    </div>
  );
};

export default HomePage;
