import React from "react";
import "../../assets/css/edit.css";
import { API } from "../../config/axios";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import Select from "react-select";

const EditProductForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [province, setProvince] = React.useState([]);
  const [namaKota, setnamaKota] = React.useState([]);
  const [preview, setPreview] = React.useState(null);
  const [product, setProduct] = React.useState(null);
  const [category, setCategory] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [error, setError] = React.useState("");
  const image = React.useRef(null);
  const id = state.id;

  React.useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await API.get("/product/" + id);
        setProduct(response.data.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();

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
          let data_categories = [];
          for (let i in response.data.data.categories) {
            let object_categories = {
              value: response.data.data.categories[i].id,
              label: response.data.data.categories[i].name,
            };
            data_categories.push(object_categories);
          }
          setCategories(data_categories);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, [id]);

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

  const handleChangeCategory = (e) => {
    setCategory(e);
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
      category.forEach((value) => {
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
      const response = await API.patch("/product/" + id, formData, config);
      if (response.status === 201) {
        navigate("/product");
      }
    } catch (error) {
      console.log(error);
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

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "#181818" }),
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
                {preview === null ? (
                  <img
                    src={product?.image}
                    style={{
                      maxWidth: "150px",
                      maxHeight: "150px",
                      objectFit: "cover",
                    }}
                    alt={preview}
                  />
                ) : (
                  <img
                    src={preview}
                    style={{
                      maxWidth: "150px",
                      maxHeight: "150px",
                      objectFit: "cover",
                    }}
                    alt={preview}
                  />
                )}
              </div>
            </div>

            <div className="mx-5 mb-3">
              <Form.Group>
                <Form.Control
                  type="text"
                  defaultValue={product?.title}
                  name="title"
                  placeholder="Product"
                  className="form-background"
                />
              </Form.Group>
            </div>

            <div className="mx-5 mb-3">
              <div className="form-group">
                <textarea
                  defaultValue={product?.desc}
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
                  defaultValue={product?.price}
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
                  defaultValue={product?.qty}
                  type="number"
                  name="qty"
                  placeholder="Quantity"
                  className="form-background"
                />
              </Form.Group>
            </div>

            <div className="mx-5 mb-3">
              <Select
                options={categories}
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
                  defaultValue={product?.kurir[3].weight}
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
                  value={`${product?.kurir[4].idprovinsi},${product?.kurir[5].namaprovinsi}`}
                >
                  {product?.kurir[5].namaprovinsi}
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
                  value={`${product?.kurir[0].idkota},${product?.kurir[1].namakota}`}
                >
                  {product?.kurir[1].namakota}
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
                <option value={product?.kurir[2].kurir}>
                  {product?.kurir[2].kurir.toUpperCase()}
                </option>
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

export default EditProductForm;
