import HomePage from "../../component/Home/HomePage";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  let url = window.location.href;
  let host = window.location.host;
  let final_url = url.replace(`http://${host}`, "");
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/product">
            <img
              src={require("../../assets/img/logo.png")}
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
              <Nav.Link
                as={Link}
                to="/login"
                className={
                  final_url === "/login"
                    ? "nav-active-color"
                    : "nav-inactive-color"
                }
              >
                Login
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/register"
                className={
                  final_url === "/register"
                    ? "nav-active-color"
                    : "nav-inactive-color"
                }
              >
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <HomePage />
    </div>
  );
};

export default Home;
