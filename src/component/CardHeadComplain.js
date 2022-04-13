const CardHeadComplain = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <img
        src={require("../assets/img/profilepict.png")}
        className="img-fluid"
        alt="..."
      />
      <div className="d-flex flex-column">
        <h6 className="mx-3 judul-complain">Admin</h6>
        <p className="mx-3 paragrapgh-complain" style={{ marginTop: "-5px" }}>
          Yes, Is there anything I can help
        </p>
      </div>
    </div>
  );
};
export default CardHeadComplain;
