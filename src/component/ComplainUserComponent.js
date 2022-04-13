import "../assets/css/complainadmin.css";
import { Form } from "react-bootstrap";

const ComplainUserComponent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 complain-admin-kiri">
          <div className="d-flex justify-content-center mt-3">
            <img
              src={require("../assets/img/profilepict.png")}
              className="img-fluid"
              alt="..."
            />
            <div className="d-flex flex-column">
              <h6 className="mx-3 paragrapgh-complain">Admin</h6>
              <p
                className="mx-3 paragrapgh-complain"
                style={{ marginTop: "-5px" }}
              >
                Yes, Is there anything I can help
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <img
              src={require("../assets/img/profilepict.png")}
              className="img-fluid"
              alt="..."
            />
            <div className="d-flex flex-column">
              <h6 className="mx-3 paragrapgh-complain">Admin</h6>
              <p
                className="mx-3 paragrapgh-complain"
                style={{ marginTop: "-5px" }}
              >
                Yes, Is there anything I can help
              </p>
            </div>
          </div>
        </div>

        <div className="col-8">
          <div className="d-flex align-items-end complain-admin-kanan">
            <div className="d-flex flex-column" style={{ width: "100%" }}>
              <div className="d-flex" style={{ marginTop: "70px" }}>
                <div className="mx-2">
                  <img
                    src={require("../assets/img/profilepict.png")}
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div
                  className="d-flex align-items-center"
                  style={{ marginRight: "-2px" }}
                >
                  <svg
                    width="21"
                    height="24"
                    viewBox="0 0 21 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.2583 0.5L20.2583 23.0167L0.75833 11.7583L20.2583 0.5Z"
                      fill="#575757"
                    />
                  </svg>
                </div>
                <div className="d-flex box-chat-bawah">
                  <div className="d-flex align-items-center">
                    <p className="mx-3 paragrapgh-complain">
                      Yes, Is there anyting I can help ?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
