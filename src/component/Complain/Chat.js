import React from "react";

const Chat = ({ setContact, contact, user, messages, sendMessage }) => {
  return (
    <div>
      <div
        id="chat-messages"
        style={{ height: "80vh" }}
        className="overflow-auto px-3 py-2"
      >
        {messages.map((item, index) => (
          <div key={index}>
            <div
              className={`d-flex py-1 ${
                item.idSender === user.id
                  ? "justify-content-end"
                  : "justify-content-start"
              }`}
            >
              <div
                className={item.idSender === user.id ? "chat-me" : "chat-other"}
              >
                {item.message}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: "6vh" }} className="px-3">
        <input
          placeholder="Send Message"
          className="input-message px-4"
          onKeyPress={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
