import "../assets/css/complainadmin.css";
import { Form } from "react-bootstrap";
import CardHeadComplain from "./CardHeadComplain";
import CardBottomComplain from "./CardBottomComplain";

const ComplainUserComponent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 complain-admin-kiri">
          <CardHeadComplain />
          <CardHeadComplain />
        </div>

        <div className="col-8">
          <CardBottomComplain />
          <div className="mx-5 my-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  placeholder="Send Message"
                  className="form-complain"
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplainUserComponent;
