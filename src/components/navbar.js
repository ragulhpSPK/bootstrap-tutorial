import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images.jpg";
import { Image } from "react-bootstrap";

const Appbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-primary fw-bold fs-5">
          <Image src={Logo} style={{ width: "50px" }} />
          Mobile shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" className="fw-bold ms-5">
              Home
            </Nav.Link>
            <Nav.Link href="#product" className="fw-bold ms-5">
              Products
            </Nav.Link>
            <Nav.Link href="#best" className="fw-bold ms-5">
              Best offers
            </Nav.Link>
            <Nav.Link href="#orders" className="fw-bold ms-5">
              My orders
            </Nav.Link>
            <Nav.Link href="#detail" className="fw-bold ms-5">
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
