import "../assets/css/home.css";
import CardHome from "./CardHome";
import React from "react";

const HomePage = () => {
  const [values, setValues] = React.useState("");
  let dataProduk = [
    {
      id: 1,
      nama: "Keyboard",
      harga: 50000,
      stok: 100,
      gambar: require("../assets/img/keyboard.png"),
    },
    {
      id: 2,
      nama: "Mouse",
      harga: 50000,
      stok: 100,
      gambar: require("../assets/img/mouse.png"),
    },
  ];
  let data_search = dataProduk.filter((value) => {
    return value.nama.toLocaleLowerCase() === values;
  });
  console.log(data_search);
  return (
    <div className="container">
      <h5 className="judul-produk">Product</h5>
      <input values={values} onChange={(e) => setValues(e.target.value)} />
      <div className="row">
        {data_search.length === 0
          ? dataProduk.map((value, index) => {
              return (
                <CardHome
                  key={value.id}
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
