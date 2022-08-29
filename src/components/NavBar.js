import "../styles/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import iconLogoNavbar from "../assets/iconLogoNavbar.svg";


const NavBar = () => {
  return (
    <header>
      <div clasName="navbar">
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
                <Nav.Link href="#movies">Movies</Nav.Link>
                <Nav.Link href="#tvshows">TV Shows</Nav.Link>
                <Nav.Link href="#favorites">Favorites</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                <Nav.Link href="#login">Log In</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default NavBar;
