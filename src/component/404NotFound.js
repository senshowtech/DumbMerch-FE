const NotFound = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <div className="d-flex flex-column">
        <div style={{ width: "500px" }}>
          <img
            src={require("../assets/img/404-not-found.png")}
            className="img-fluid"
            alt="..."
          />
        </div>
        <div>
          <h1 style={{ color: "white", textAlign: "center" }}>
            Page Not Found
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
