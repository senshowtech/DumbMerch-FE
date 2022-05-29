import React from "react";
import "../../assets/css/edit.css";
import { API } from "../../config/axios";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EditProfileForm = () => {
  const [province, setProvince] = React.useState([]);
  const [namaKota, setnamaKota] = React.useState([]);
  const [preview, setPreview] = React.useState(null);
  const [city, setCity] = React.useState({
    city: null,
    provinsi: null,
  });
  const [error, setError] = React.useState("");
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
    const provinsi = e.target.value.split(",");
    setCity((prevdata) => {
      return {
        ...prevdata,
        provinsi: `${provinsi}`,
      };
    });
    try {
      const response = await API.get(`/kota/${provinsi[0]}`);
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

  const CityHandler = (e) => {
    let city = e.target.value;
    setCity((prevdata) => {
      return {
        ...prevdata,
        city: city,
      };
    });
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

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      console.log(city);
      console.log(province);
      const formData = new FormData();
      if (image.current == null) {
        setError("silahkan isi gambar");
      }
      formData.set("image", image.current, image.current.name);
      formData.set("phone", e.target.phone.value);
      formData.set("address", e.target.address.value);
      formData.set("city", JSON.stringify(city));
      const response = await API.patch("/profile", formData, config);
      if (response.status === 201) {
        const response_user = await API.get("/users");
        let status = response_user.data.data.users.status;
        if (status === "user") {
          navigate("/user");
        } else {
          navigate("/product");
        }
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
            <div className="d-flex justify-content-center">{RenderAlert()}</div>
            <h3 className="judul-login-form mx-5">Profile</h3>
            <div className="mx-5">
              <h5 style={{ color: "white", marginTop: "20px" }}>
                Foto Profile
              </h5>
              <input
                type="file"
                accept="image/*"
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
                  type="number"
                  name="phone"
                  placeholder="Phone"
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

            <div className="mx-5 mb-2">
              <Form.Select
                className="mt-4 select-pembayaran"
                onChange={CityHandler}
                name="kota"
              >
                <option defaultValue={"Pilih"}>Pilih Kota</option>
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

            <div className="mx-5 mt-4 mb-4">
              <div className="form-group">
                <textarea
                  name="address"
                  className="form-control form-background"
                  rows="5"
                  placeholder="Kelurahan, Kecamatan atau desa"
                />
              </div>
            </div>

            <div className="mx-5 mb-5 button-edit-center">
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

export default EditProfileForm;
