import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
  };

  return (
    <Navbar
      collapseOnSelect
      className="mb-3"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">BD News</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">All News</Nav.Link>
            <Nav.Link href="">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              {user?.photoURL ? (
                <Image
                  style={{ height: "40px" }}
                  roundedCircle
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <FaUser></FaUser>
              )}
            </Nav.Link>
            <Nav>
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <Link className="ms-3 btn btn-danger" onClick={handleLogOut}>Logout</Link>
                </>
              ) : (
                <>
                  <Link className="ms-3 btn btn-primary" to="/login">Login</Link>
                  <Link className="ms-3 btn btn-primary" to="/register">Register</Link>
                </>
              )}
            </Nav>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
