import React from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "../assets/css/edit.css";

const AddProductForm = () => {
  const [province, setProvince] = React.useState([]);
  const [namaKota, setnamaKota] = React.useState([]);

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

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <Form>
            <h3 className="judul-login-form mx-5">Add Product</h3>
            <div className="mx-5">
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="contained-button-file"
              />
              <label htmlFor="contained-button-file">
                <div className="d-flex justify-content-center align-items-center upload-buttons text-center">
                  Upload
                </div>
              </label>
            </div>
            <div className="mx-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Product"
                  className="form-background"
                />
              </Form.Group>
            </div>

            <div className="mx-5 mb-4">
              <div className="form-group">
                <textarea
                  className="form-control form-background"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Description"
                />
              </div>
            </div>

            <div className="mx-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  placeholder="Price"
                  className="form-background"
                />
              </Form.Group>
            </div>

            <div className="mx-5 mb-2">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  placeholder="Quantity"
                  className="form-background"
                />
              </Form.Group>
            </div>

            <div className="mx-5 mb-2">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  placeholder="Berat Barang"
                  className="form-background"
                />
              </Form.Group>
            </div>

            <div className="mx-5 mb-2">
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
            </div>

            <div className="mx-5 mb-2">
              <Form.Select className="mt-4 select-pembayaran" name="kota">
                <option defaultValue={"Pilih"}>Pilih Kota</option>
                {namaKota.map((value) => {
                  return (
                    <option key={value.city_id} value={value.city_id}>
                      {value.city_name}
                    </option>
                  );
                })}
              </Form.Select>
            </div>

            <div className="mx-5 mb-2">
              <Form.Select className="mt-4 select-pembayaran" name="kurir">
                <option>Pilih Kurir</option>
                <option value="jne">JNE</option>
                <option value="pos">POS</option>
                <option value="tiki">TIKI</option>
              </Form.Select>
            </div>

            <div className="mx-5 button-edit-center">
              <Button type="submit" className="button-edit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default AddProductForm;
