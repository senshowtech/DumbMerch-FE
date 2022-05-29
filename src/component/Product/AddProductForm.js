import React from "react";
import "../../assets/css/edit.css";
import { API } from "../../config/axios";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { colourStyles } from "../../data/colourStyles";
import Select from "react-select";

const AddProductForm = () => {
  const [province, setProvince] = React.useState([]);
  const [namaKota, setnamaKota] = React.useState([]);
  const [preview, setPreview] = React.useState(null);
  const [error, setError] = React.useState("");
  const image = React.useRef(null);
  const city = React.useRef(null);
  const category = React.useRef([]);
  const categories = React.useRef([]);

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
    const getCategories = async () => {
      try {
        const response = await API.get("/categories");
        if (response.status === 201) {
          let data_categories = response.data.data.categories;
          const data_categories_baru = data_categories.map((value) => {
            return {
              value: value.id,
              label: value.name,
            };
          });
          categories.current = data_categories_baru;
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
    const getUser = async () => {
      try {
        const response = await API.get("/users/");
        console.log(response.data.data.users);
        city.current = JSON.parse(response.data.data.users.profiles.city);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const HandleNamaKota = async (e) => {
    const provinsi = e.target.value.split(",");
    try {
      const response = await API.get(`/kota/${provinsi[0]}`);
      setnamaKota(response.data.rajaongkir.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeImage = (e) => {
    if (e.target.type === "file") {
      image.current = e.target.files[0];
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleChangeCategory = (e) => {
    category.current = e;
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      let data_value_category = [];
      category.current.forEach((value) => {
        data_value_category.push(value.value);
      });
      let kota = e.target.kota.value.split(",");
      let kurir = e.target.kurir.value;
      let weight = e.target.weight.value;
      let provinsi = e.target.provinsi.value.split(",");
      let dataOngkir = [
        { idkota: kota[0] },
        { namakota: kota[1] },
        { kurir: kurir },
        { weight: weight },
        { idprovinsi: provinsi[0] },
        { namaprovinsi: provinsi[1] },
      ];
      const formData = new FormData();
      if (image.current == null) {
        setError("silahkan isi gambar");
      }
      formData.set("image", image.current, image.current.name);
      formData.set("title", e.target.title.value);
      formData.set("desc", e.target.desc.value);
      formData.set("price", e.target.price.value);
      formData.set("qty", e.target.qty.value);
      formData.set("kurir", JSON.stringify(dataOngkir));
      formData.set("category", JSON.stringify(data_value_category));
      const response = await API.post("/product", formData, config);
      if (response.status === 201) {
        navigate("/product");
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  const RenderAlert = () => {
    if (error !== "") {
      return (
        <Alert
          variant="danger"
          style={{
            width: "416px",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          {error}
        </Alert>
      );
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <Form onSubmit={HandleSubmit}>
            <div className="d-flex justify-content-center">{RenderAlert()}</div>
            <h3 className="judul-login-form mx-5">Add Product</h3>
            <div className="mx-5">
              <input
                type="file"
                name="image"
                accept="image/*"
                style={{ display: "none" }}
                id="contained-button-file"
                onChange={handleChangeImage}
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

            <div className="mx-5 mb-3">
              <Form.Group>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Product"
                  className="form-background"
                />
              </Form.Group>
            </div>

            <div className="mx-5 mb-3">
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

            <div className="mx-5 mb-3">
              <Form.Group>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="form-background"
                />
              </Form.Group>
            </div>

            <div className="mx-5 mb-3">
              <Form.Group>
                <Form.Control
                  type="number"
                  name="qty"
                  placeholder="Quantity"
                  className="form-background"
                />
              </Form.Group>
            </div>

            <div className="mx-5 mb-3">
              <Select
                options={categories.current}
                styles={colourStyles}
                onChange={handleChangeCategory}
                name="category"
                isMulti
                placeholder="Category"
              />
            </div>

            <div className="mx-5 mb-3">
              <Form.Group>
                <Form.Control
                  type="number"
                  name="weight"
                  placeholder="Berat Barang"
                  className="form-background"
                />
              </Form.Group>
            </div>

            <div className="mx-5 mb-3">
              <Form.Select
                onChange={HandleNamaKota}
                name="provinsi"
                className="form-background"
              >
                <option
                  value={`${city.current?.provinsi.split(",")[0]},${
                    city.current?.provinsi.split(",")[1]
                  }`}
                >
                  {city.current?.provinsi.split(",")[1]}
                </option>
                {province.map((value) => {
                  return (
                    <option
                      key={value.province_id}
                      value={`${value.province_id},${value.province}`}
                    >
                      {value.province}
                    </option>
                  );
                })}
              </Form.Select>
            </div>

            <div className="mx-5 mb-3">
              <Form.Select className="form-background" name="kota">
                <option
                  value={`${city.current?.city.split(",")[0]},${
                    city.current?.city.split(",")[1]
                  }`}
                >
                  {city.current?.city.split(",")[1]}
                </option>
                {namaKota.map((value) => {
                  return (
                    <option
                      key={value.city_id}
                      value={`${value.city_id},${value.city_name}`}
                    >
                      {value.city_name}
                    </option>
                  );
                })}
              </Form.Select>
            </div>

            <div className="mx-5 mb-3">
              <Form.Select className="form-background" name="kurir">
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
