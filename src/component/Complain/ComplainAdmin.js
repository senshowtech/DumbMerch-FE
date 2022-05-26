import React from "react";
import "../../assets/css/complain.css";
import Contact from "./Contact";
import Chat from "./Chat";
import { UserContext } from "../../context/userContext";
import { io } from "socket.io-client";
let socket;

const ComplainAdmin = () => {
  const [contact, setContact] = React.useState(null);
  const [contacts, setContacts] = React.useState([]);
  const [messages, setMessages] = React.useState([]);
  const [state, dispatch] = React.useContext(UserContext);
  const imageDefault = React.useRef(null);

  React.useEffect(() => {
    socket = io("https://api.diafragma.xyz", {
      auth: {
        token: localStorage.getItem("token"),
      },
      query: {
        id: state.user.user?.id,
      },
    });

    socket.on("new message", () => {
      socket.emit("load messages", contact?.id);
    });

    loadContacts();
    loadMessages();

    socket.on("connect_error", (err) => {
      console.error(err.message);
    });

    return () => {
      socket.disconnect();
    };
  }, [messages]);

  const loadContacts = () => {
    socket.emit("load custommer contacts");
    socket.emit("load admin contact");

    socket.on("admin contact", (data) => {
      imageDefault.current = data.profiles.image;
    });

    socket.on("custommer contacts", (data) => {
      let dataContacts = data.filter(
        (item) =>
          item.status !== "admin" &&
          (item.recipientMessage.length > 0 || item.senderMessage.length > 0)
      );
      dataContacts = dataContacts.map((item) => ({
        ...item,
        message: "Click here to start message",
      }));
      setContacts(dataContacts);
    });
  };

  const loadMessages = () => {
    socket.on("messages", (data) => {
      if (data.length > 0) {
        const dataMessages = data.map((item) => ({
          idSender: item.sender.id,
          message: item.message,
        }));
        setMessages(dataMessages);
      }
      loadContacts();
      const chatMessages = document.getElementById("chat-messages");
      chatMessages.scrollTop = chatMessages?.scrollHeight;
    });
  };

  const onClickContact = (data) => {
    setContact(data);
    socket.emit("load messages", data.id);
  };

  const onSendMessage = (e) => {
    if (e.key === "Enter") {
      const data = {
        idRecipient: contact.id,
        message: e.target.value,
      };
      socket.emit("send messages", data);
      e.target.value = "";
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-3 complain-admin-kiri">
          <Contact
            dataContact={contacts}
            clickContact={onClickContact}
            contact={contact}
          />
        </div>

        <div className="col-12 col-lg-9 complain-admin-kanan">
          <Chat
            imageDefault={imageDefault.current}
            contact={contact}
            messages={messages}
            user={state.user.user}
            sendMessage={onSendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default ComplainAdmin;
