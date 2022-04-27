import React from "react";
import "../../assets/css/edit.css";
import { API } from "../../config/axios";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddProductForm = () => {
  const [province, setProvince] = React.useState([]);
  const [namaKota, setnamaKota] = React.useState([]);
  const [preview, setPreview] = React.useState(null);
  const image = React.useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const getProvince = async () => {
      try {
        const response = await API.get("/provinsi");
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
      const response = await API.get(`/kota/${provinsi}`);
      setnamaKota(response.data.rajaongkir.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    if (e.target.type === "file") {
      image.current = e.target.files[0];
    }
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      let kota = e.target.kota.value;
      let kurir = e.target.kurir.value;
      let weight = e.target.weight.value;
      let dataOngkir = [{ kota: kota }, { kurir: kurir }, { weight: weight }];
      const formData = new FormData();
      formData.set("image", image.current, image.current.name);
      formData.set("title", e.target.title.value);
      formData.set("desc", e.target.desc.value);
      formData.set("price", e.target.price.value);
      formData.set("qty", e.target.qty.value);
      formData.set("kurir", JSON.stringify(dataOngkir));
      const response = await API.post("/product", formData, config);
      if (response.status === 201) {
        navigate("/product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <Form onSubmit={HandleSubmit}>
            <h3 className="judul-login-form mx-5">Add Product</h3>

            <div className="mx-5">
              <input
                type="file"
                name="image"
                style={{ display: "none" }}
                id="contained-button-file"
                onChange={handleChange}
              />
              <label htmlFor="contained-button-file">
                <div className="d-flex justify-content-center align-items-center upload-buttons text-center">
                  Upload
                </div>
              </label>
            </div>

            <div className="mx-5 mb-4">
              <div>
                {preview && (
                  <div>
                    <img
                      src={preview}
                      style={{
                        maxWidth: "150px",
                        maxHeight: "150px",
                        objectFit: "cover",
                      }}
                      alt={preview}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="mx-5">
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Product"
                  className="form-background"
                />
              </Form.Group>
            </div>

            <div className="mx-5 mb-4">
              <div className="form-group">
                <textarea
                  name="desc"
                  className="form-control form-background"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Description"
                />
              </div>
            </div>

            <div className="mx-5">
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="form-background"
                />
              </Form.Group>
            </div>

            <div className="mx-5 mb-2">
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="qty"
                  placeholder="Quantity"
                  className="form-background"
                />
              </Form.Group>
            </div>

            <div className="mx-5 mb-2">
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="weight"
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
