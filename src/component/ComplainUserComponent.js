import "../assets/css/complain.css";
import { Form } from "react-bootstrap";
import CardHeadComplain from "./CardHeadComplain";
import CardBottomAtas from "./CardBottomAtas";
import CardBottomBawah from "./CardBottomBawah";

const ComplainUserComponent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-4 complain-admin-kiri">
          <CardHeadComplain />
          <CardHeadComplain />
        </div>

        <div className="col-12 col-lg-8">
          <div className="d-flex align-items-end complain-admin-kanan">
            <div className="d-flex flex-column" style={{ width: "100%" }}>
              <CardBottomAtas />
              <CardBottomBawah />
              <div className="mx-5">
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
      </div>
    </div>
  );
};

export default ComplainUserComponent;
