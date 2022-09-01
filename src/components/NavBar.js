import "../styles/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import iconLogoNavbar from "../assets/iconLogoNavbar.svg";
import { userLogout } from "../store/user.js";
import { useDispatch } from "react-redux";


const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  //boton que desloguea un usuario
  const handleLogout = () => {
    dispatch(userLogout()).then(() => navigate("/"));
  };

  return (
    <header>
      <div className="navbar">
        <Navbar expand="lg" fixed="top">
          <Container>
            <Link to="/">
              <img
                src={iconLogoNavbar}
                alt="logo-navbar"
                style={{
                  width: "35px",
                  borderRadius: "50%",
                }}
              />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Movies
                </Nav.Link>
                <Nav.Link href="#tvshows">TV Shows</Nav.Link>

                {// condiciones para usuario
                (user && user.admin === false) ? (
                  <Nav.Link as={Link} to="/favorites">
                    Favorites
                  </Nav.Link>
                ) : null}
                {//condiciones para admin
                  (user && user.admin === true) ? (
                    <Nav.Link as={Link} to="/admin/users">
                    Users
                  </Nav.Link>
                  ) : null}
                {!user ? (
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
                ) : null}
                {user ? (
                  <div onClick={handleLogout}>
                    <Nav.Link>Log Out</Nav.Link>
                  </div>
                ) : (
                  <Nav.Link as={Link} to="/login">
                    Log In
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default NavBar;
