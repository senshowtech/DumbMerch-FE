import React from "react";
import "../../assets/css/complain.css";
import { UserContext } from "../../context/userContext";
import Contact from "./Contact";
import Chat from "./Chat";
import { io } from "socket.io-client";

let socket;

const ComplainUserComponent = () => {
  const [contact, setContact] = React.useState(null);
  const [contacts, setContacts] = React.useState([]);
  const [messages, setMessages] = React.useState([]);
  const [state, dispatch] = React.useContext(UserContext);

  React.useEffect(() => {
    socket = io("http://localhost:5000", {
      auth: {
        token: localStorage.getItem("token"),
      },
      query: {
        id: state.user.user?.id,
      },
    });

    socket.on("new message", () => {
      // console.log(contact?.id);
      socket.emit("load messages", contact?.id);
    });

    loadContact();
    loadMessages();

    socket.on("connect_error", (err) => {
      console.error(err.message);
    });

    return () => {
      socket.disconnect();
    };
  }, [messages, contact]);

  const loadContact = () => {
    socket.emit("load admin contact");
    socket.on("admin contact", async (data) => {
      const dataContact = {
        ...data,
        message:
          messages.length > 0
            ? messages[messages.length - 1].message
            : "Click here to start message",
      };
      setContacts([dataContact]);
    });
  };

  const loadMessages = () => {
    socket.on("messages", async (data) => {
      if (data.length > 0) {
        const dataMessages = data.map((item) => ({
          idSender: item.sender.id,
          message: item.message,
        }));
        setMessages(dataMessages);
      }
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
      loadContact();
    }
  };

  // console.log(contact);

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

export default ComplainUserComponent;
