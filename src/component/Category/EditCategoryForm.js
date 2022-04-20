import { Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "../../assets/css/edit.css";
import { dataCategory } from "../../dummy/dataCategory";

const EditCategory = () => {
  const { state } = useLocation();
  let data_detail = dataCategory[state.id];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <Form>
            <h3 className="judul-login-form mx-5">Edit Product</h3>
            <div className="mx-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  defaultValue={data_detail.category}
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
