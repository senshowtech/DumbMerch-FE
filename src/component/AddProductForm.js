import { Form, Button } from "react-bootstrap";
import "../assets/css/edit.css";
const AddProductForm = () => {
  return (
    <div className="container-fluid">
      <div class="row">
        <div className="col-1"></div>
        <div className="col-10">
          <Form>
            <h3 className="judul-login-form mx-5">Add Product</h3>
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
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default AddProductForm;
