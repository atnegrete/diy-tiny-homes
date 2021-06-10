import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import { Button, Form, FormControl, NavDropdown } from "react-bootstrap";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">DIY Tiny Homes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink url="/" name="Home"></NavLink>
            <NavLink url="/profile" name="Profile"></NavLink>
          </Nav>
          <Navbar.Collapse className="justify-content-end mr-2">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

function NavLink({ url, name }) {
  return (
    <Link href={url} passHref>
      <Nav.Link>{name}</Nav.Link>
    </Link>
  );
}

export default NavigationBar;
