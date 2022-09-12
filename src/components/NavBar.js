import "../styles/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../store/user.js";
import { useDispatch } from "react-redux";
import iconLogo from "../assets/iconLogo.svg"
import { BsFillPersonFill } from "react-icons/bs"
import { BiSearchAlt } from "react-icons/bi"

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
        <Navbar variant="dark" expand="lg" fixed="top">
          <Container className="style-navbar">
            <div>
            <Link to="/search">
              <BiSearchAlt className="search" />
            </Link>
            <Link to="/profile">
              <BsFillPersonFill className="profile"/>
            </Link>
            </div>
            <Link to="/">
              <img
                className="logo"
                src={iconLogo}
                alt="logo-navbar"
              />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="navbar-text" as={Link} to="/">
                  Movies
                </Nav.Link>
                <Nav.Link className="navbar-text" as={Link} to="/tvShows">
                  TV Shows
                </Nav.Link>

                {
                  // condiciones para usuario si es admin y el plan basico no puede ver favoritos 
                  user && user.admin === false && user.plan === "premium" ? (
                    <Nav.Link className="navbar-text" as={Link} to="/favorites">
                      Favorites
                    </Nav.Link>
                  ) : null
                }
                {
                  //condiciones para admin
                  user && user.admin === true ? (
                    <Nav.Link
                      className="navbar-text"
                      as={Link}
                      to="/admin/users"
                    >
                      Users
                    </Nav.Link>
                  ) : null
                }
                {!user ? (
                  <Nav.Link className="navbar-text" as={Link} to="/register">
                    Register
                  </Nav.Link>
                ) : null}
                {user ? (
                  <div onClick={handleLogout}>
                    <Nav.Link className="navbar-text">Log Out</Nav.Link>
                  </div>
                ) : (
                  <Nav.Link className="navbar-text" as={Link} to="/login">
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
