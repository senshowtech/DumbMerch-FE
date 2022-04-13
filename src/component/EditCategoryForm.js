import { Form, Button } from "react-bootstrap";
import "../assets/css/edit.css";
const EditCategory = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex justify-content-center box-edit">
        <div className="d-flex align-items-center">
          <Form className="form-edit">
            <h3 className="judul-login-form mx-5 text-center">Edit Category</h3>
            <div className="mx-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Category"
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

export default EditCategory;
