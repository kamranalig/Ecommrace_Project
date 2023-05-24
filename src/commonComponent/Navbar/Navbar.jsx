import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 
const AppNavbar = () => {
  return (
    <div className='mb-5'>
       <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark" fixed='top'>
    <Container fluid>
    <Link to="/"><Navbar.Brand href="#home">E-Commerace</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto center">
        <Link to="/"><Nav.Link href="#/">Home</Nav.Link></Link>
        <Link to="/products"><Nav.Link href="#features">All Products</Nav.Link></Link>
        <Link to="/blogs"><Nav.Link href="#pricing">Blogs</Nav.Link></Link>
        <Link to="/about"><Nav.Link href="#about">About Us</Nav.Link></Link>
        <Link to="/contact"><Nav.Link href="#contact">Contact Us</Nav.Link></Link>
        </Nav>
        <Nav>
        <Link to="./login"><Nav.Link href="#Login">Login</Nav.Link></Link>
        <Link to="./cart"><Nav.Link href="#cart">Add to Cart</Nav.Link></Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
   
  )
}
export default AppNavbar;