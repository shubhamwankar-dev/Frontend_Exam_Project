import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container">
      <Navbar
        data-bs-theme="primary"
        expand="lg"
        className="container bg-transparent pt-3 fixed-top hover:text-primary"
      >
        <Container fluid>
          <Navbar.Brand href="#home" className="navLinkColor fs-3 fw-bolder">
            CodeBizz
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 mx-auto fs-5 fw-semibold gap-4"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link to="/" href="#home" className="navLinkColor">
                Home
              </Nav.Link>

              <Nav.Link href="#blogs" className="navLinkColor">
                Blogs
              </Nav.Link>

              <Nav.Link href="#testiminials" className="navLinkColor">
                Testimonials
              </Nav.Link>

              <Nav.Link href="#services" className="navLinkColor">
                Services
              </Nav.Link>
              <Nav.Link href="#footer" className="navLinkColor">
                Contact
              </Nav.Link>
            </Nav>

            <div className="d-flex gap-5">
              <Link to="/login" className="btn btn-success btn-md">
                Login
              </Link>
              <Link to="/signup" className="btn btn-primary btn-md">
                Signup
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
