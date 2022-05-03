import React from "react";
import "../../assets/css/complain.css";
import { Form } from "react-bootstrap";
import CardHeadComplain from "./CardHeadComplain";
import CardBottomAtas from "./CardBottomAtas";
import CardBottomBawah from "./CardBottomBawah";
import { io } from "socket.io-client";
let socket;

const ComplainAdmin = () => {
  const [contact, setContact] = React.useState(null);
  const [contacts, setContacts] = React.useState([]);

  const loadContacts = () => {
    socket.emit("load custommer contacts");

    socket.on("custommer contacts", (data) => {
      let dataContacts = data.filter((item) => item.status !== "admin");

      dataContacts = dataContacts.map((item) => ({
        ...item,
        message: "Click here to start message",
      }));

      setContacts(dataContacts);
    });
  };

  React.useEffect(() => {
    socket = io("http://localhost:5000");
    loadContacts();
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-3 complain-admin-kiri">
          <CardHeadComplain />
          <CardHeadComplain />
        </div>

        <div className="col-12 col-lg-9">
          <div className="complain-admin-kanan">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplainAdmin;
