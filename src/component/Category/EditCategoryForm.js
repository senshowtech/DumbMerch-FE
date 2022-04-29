import { Form, Button } from "react-bootstrap";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../assets/css/edit.css";
import { API } from "../../config/axios";

const EditCategory = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const id = state.id;
  const [data, setData] = React.useState(null);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = {
        name: e.target.name.value,
      };
      const response = await API.patch("/category/" + id, data, config);
      if (response.status === 201) {
        navigate("/category");
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const getCategoryId = async () => {
      try {
        const response = await API.get("/category/" + id);
        setData(response.data.data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    getCategoryId();
  }, [id]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <Form onSubmit={HandleSubmit}>
            <h3 className="judul-login-form mx-5">Edit Product</h3>
            <div className="mx-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  defaultValue={data?.name}
                  name="name"
                  type="text"
                  placeholder="Edit Category"
                  className="form-background"
                />
              </Form.Group>
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

export default EditCategory;
