const CardBottomBawah = () => {
  return (
    <div className="d-flex" style={{ marginTop: "10px" }}>
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
  );
};
export default CardBottomBawah;
