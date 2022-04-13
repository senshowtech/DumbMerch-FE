import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/home.css";

const Navbars = () => {
  let isAdmin = true;
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
          {isAdmin ? (
            <Nav>
              <Nav.Link
                as={Link}
                to="/complain-admin"
                style={{ color: "white" }}
              >
                Complain
              </Nav.Link>
              <Nav.Link as={Link} to="/category" style={{ color: "white" }}>
                Category
              </Nav.Link>
              <Nav.Link as={Link} to="/product" style={{ color: "white" }}>
                Product
              </Nav.Link>
              <Nav.Link as={Link} to="/" style={{ color: "white" }}>
                Logout
              </Nav.Link>
            </Nav>
          ) : (
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
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
