import { Form, Button } from "react-bootstrap";
import "../assets/css/edit.css";
const EditProductForm = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex justify-content-center box-edit">
        <div className="d-flex align-items-center">
          <Form className="form-edit">
            <h3 className="judul-login-form mx-5 text-center">Edit Product</h3>
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

            <div className="mx-5 button-edit-center">
              <Button type="submit" className="button-edit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditProductForm;
