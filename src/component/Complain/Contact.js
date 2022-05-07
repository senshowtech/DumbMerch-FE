const Contact = ({ dataContact, clickContact, contact }) => {
  return (
    <div>
      {dataContact?.map((value) => {
        return (
          <div
            className={`contact d-flex justify-content-center mt-3 ${
              contact?.id === value?.id && "contact-active"
            }`}
            key={value.id}
            onClick={() => {
              clickContact(value);
            }}
          >
            <img
              src={value.profiles.image}
              className="rounded-circle me-2 mt-2 mb-2"
              style={{ width: "60px", height: "60px" }}
              alt="..."
            />
            <div className="d-flex flex-column">
              <h6 className="mx-3 judul-complain mt-3">{value.name}</h6>
              <p
                className="mx-3 paragrapgh-complain"
                style={{ marginTop: "-5px" }}
              >
                {value.message}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Contact;
