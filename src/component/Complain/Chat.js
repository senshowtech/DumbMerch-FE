import React from "react";

const Chat = ({
  setContact,
  contact,
  user,
  messages,
  sendMessage,
  imageDefault,
}) => {
  return (
    <div>
      {contact === null ? (
        <div style={{ height: "80vh" }}>
          <h6 className="text-center" style={{ color: "white" }}>
            Tidak ada pesan
          </h6>
        </div>
      ) : (
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
                {item.idSender !== user.id && (
                  <div className="d-flex">
                    <img
                      src={contact?.profiles.image}
                      className="rounded-circle me-2 img-chat"
                      alt="bubble avatar"
                    />
                    <div
                      className={
                        item.idSender === user.id ? "chat-me" : "chat-other"
                      }
                    >
                      {item.message}
                    </div>
                  </div>
                )}
                {item.idSender === user.id && (
                  <div className="d-flex">
                    <div
                      className={
                        item.idSender === user.id ? "chat-me" : "chat-other"
                      }
                    >
                      {item.message}
                    </div>
                    <img
                      style={{ marginLeft: "20px" }}
                      src={imageDefault}
                      className="rounded-circle me-2 img-chat"
                      alt="bubble avatar"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <div style={{ height: "6vh" }} className="px-3">
        {contact === null ? (
          ""
        ) : (
          <input
            placeholder="Send Message"
            className="input-message px-4"
            onKeyPress={sendMessage}
          />
        )}
      </div>
    </div>
  );
};

export default Chat;
