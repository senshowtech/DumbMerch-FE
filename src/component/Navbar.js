import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/home.css";

const Navbars = () => {
  let isAdmin = false;
  let url = window.location.href;
  let host = window.location.host;
  let final_url = url.replace(`http://${host}`, "");
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
                className={
                  final_url === "/complain-admin"
                    ? "nav-active-color"
                    : "nav-inactive-color"
                }
              >
                Complain
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/category"
                className={
                  final_url === "/category"
                    ? "nav-active-color"
                    : "nav-inactive-color"
                }
              >
                Category
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/product"
                className={
                  final_url === "/product"
                    ? "nav-active-color"
                    : "nav-inactive-color"
                }
              >
                Product
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="nav-inactive-color">
                Logout
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link
                as={Link}
                to="/complain"
                className={
                  final_url === "/complain"
                    ? "nav-active-color"
                    : "nav-inactive-color"
                }
              >
                Complain
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/profile"
                className={
                  final_url === "/profile"
                    ? "nav-active-color"
                    : "nav-inactive-color"
                }
              >
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="nav-inactive-color">
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
