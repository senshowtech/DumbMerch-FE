import React from "react";
import "../../assets/css/complain.css";
import { Form } from "react-bootstrap";
import { UserContext } from "../../context/userContext";
import CardHeadComplain from "./CardHeadComplain";
import { io } from "socket.io-client";
let socket;

const ComplainAdmin = () => {
  const [contact, setContact] = React.useState(null);
  const [contacts, setContacts] = React.useState([]);
  const [state, dispatch] = React.useContext(UserContext);

  // console.log(state.user.user?.id);

  React.useEffect(() => {
    socket = io("http://localhost:5000", {
      auth: {
        token: localStorage.getItem("token"),
      },
      query: {
        id: state.user.user?.id,
      },
    });

    loadContacts();

    socket.on("connect_error", (err) => {
      console.error(err.message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

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

export default ComplainAdmin;
