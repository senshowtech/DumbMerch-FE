import React from "react";
import "../../assets/css/complain.css";
import { Form } from "react-bootstrap";
import CardHeadComplain from "./CardHeadComplain";
import { io } from "socket.io-client";

let socket;

const ComplainUserComponent = () => {
  const [contact, setContact] = React.useState(null);
  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    socket = io("http://localhost:5000", {
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

        <div className="col-12 col-lg-9"></div>
      </div>
    </div>
  );
};

export default ComplainUserComponent;
