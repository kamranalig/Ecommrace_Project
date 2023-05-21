import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AppNavbar = () => {
  return (
    <div className='mb-5'>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
    <Container fluid>
      <Navbar.Brand href="#home">E-Commerace</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto center">
          <Nav.Link href="#features">All Products</Nav.Link>
          <Nav.Link href="#pricing">Blogs</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Login</Nav.Link>
          <Nav.Link href="#memes">Add to Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
   
  )
}
export default AppNavbar;