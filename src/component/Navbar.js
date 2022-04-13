import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/home.css";

const Navbars = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={require("../assets/img/logo.png")}
            className="img-fluid"
            alt="..."
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link as={Link} to="/complain" style={{ color: "white" }}>
              Complain
            </Nav.Link>
            <Nav.Link as={Link} to="/profile" style={{ color: "white" }}>
              Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/" style={{ color: "white" }}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
