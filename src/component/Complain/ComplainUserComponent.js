import React from "react";
import "../../assets/css/complain.css";
import { Form } from "react-bootstrap";
import CardHeadComplain from "./CardHeadComplain";
import CardBottomAtas from "./CardBottomAtas";
import CardBottomBawah from "./CardBottomBawah";
import { io } from "socket.io-client";

let socket;

const ComplainUserComponent = () => {
  const [contact, setContact] = React.useState(null);
  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    socket = io("http://localhost:5000", {
      // code here
      auth: {
        token: localStorage.getItem("token"),
      },
    });

    loadContact();

    socket.on("connect_error", (err) => {
      console.error(err.message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const loadContact = () => {
    socket.emit("load admin contact");

    socket.on("admin contact", (data) => {
      const dataContact = {
        ...data,
        message: "Click here to start message",
      };
      setContacts([dataContact]);
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-3 complain-admin-kiri">
          <CardHeadComplain
            dataContact={contacts}
            setContact={setContact}
            contact={contact}
          />
        </div>

        <div className="col-12 col-lg-9">
          {/* <div className="complain-admin-kanan">
            <div className="overflow-auto">
              <CardBottomAtas />
              <CardBottomBawah />
              <CardBottomAtas />
              <CardBottomBawah />
              <CardBottomAtas />
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ComplainUserComponent;
