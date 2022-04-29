import { Form, Button } from "react-bootstrap";
import "../../assets/css/edit.css";
import { API } from "../../config/axios";
import { useNavigate } from "react-router-dom";

const AddCategoryForm = () => {
  const navigate = useNavigate();

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
      const response = await API.post("/category", data, config);
      if (response.status === 201) {
        navigate("/category");
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
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Add Category"
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

export default AddCategoryForm;
