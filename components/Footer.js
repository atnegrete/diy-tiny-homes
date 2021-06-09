import React from "react";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavbarBrand>Footer</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
