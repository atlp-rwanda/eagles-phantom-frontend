import React,{ Component } from "react";
import '../../scss/landingNav.scss';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem,Form } from 'react-bootstrap';

export default class Navbars extends Component{
render(){
  return (
    <Navbar className="nav" collapseOnSelect expand="lg"  variant="dark">
        <Navbar.Brand href="#home">Phantom</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="justify-content-end">
      <Nav.Item className="nav_link" >
      <Nav.Link  href="#">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="AboutUs">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/ContactUs">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/login">Login</Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar.Collapse>
  <Form>
  <Form.Control  as="select">
  <option>English</option>
  <option>Francais</option>
  <option>Kinyarwanda</option>
  </Form.Control>
  </Form>
  </Navbar>
  );
  }
};
