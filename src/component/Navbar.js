import "../assets/css/home.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Navbars = () => {
  const [state, dispatch] = useContext(UserContext);
  const navigate = useNavigate();

  let Getdatalogin = localStorage.getItem("isAdmin");
  let isAdmin = JSON.parse(Getdatalogin);

  let url = window.location.href;
  let host = window.location.host;
  let final_url = url.replace(`http://${host}`, "");

  const Logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        {isAdmin ? (
          <Navbar.Brand as={Link} to="/product">
            <img
              src={require("../assets/img/logo.png")}
              className="img-fluid"
              alt="..."
            />
          </Navbar.Brand>
        ) : (
          <Navbar.Brand as={Link} to="/">
            <img
              src={require("../assets/img/logo.png")}
              className="img-fluid"
              alt="..."
            />
          </Navbar.Brand>
        )}
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
              <Nav.Link
                onClick={() => Logout()}
                to="/login"
                className="nav-inactive-color"
              >
                Logout
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link
                as={Link}
                to="/"
                className={
                  final_url === "/" ? "nav-active-color" : "nav-inactive-color"
                }
              >
                Home
              </Nav.Link>
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
              <Nav.Link
                onClick={() => Logout()}
                to="/login"
                className="nav-inactive-color"
              >
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
