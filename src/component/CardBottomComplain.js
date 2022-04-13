const CardBottomComplain = () => {
  return (
    <div className="d-flex align-items-end complain-admin-kanan">
      <div className="d-flex flex-column" style={{ width: "100%" }}>
        <div className="d-flex justify-content-end">
          <div className="d-flex box-chat-atas">
            <div className="d-flex align-items-center">
              <p className="mx-3 paragrapgh-complain">
                Hello Admin, I Need Your Help
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.25833 0.5L19.7583 11.7583L0.25833 23.0167L0.25833 0.5Z"
                fill="#262626"
              />
            </svg>
          </div>
        </div>
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
  );
};
export default CardBottomComplain;
