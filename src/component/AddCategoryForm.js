import { Form, Button } from "react-bootstrap";
import "../assets/css/edit.css";
const AddCategoryForm = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <Form>
            <h3 className="judul-login-form mx-5">Add Product</h3>
            <div className="mx-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
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
