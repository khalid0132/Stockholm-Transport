import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
    <div >
        <Container className="header">
          {/* <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link eventKey="link-1" >Link</Nav.Link>
             </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link eventKey="link-2" >Link</Nav.Link>
        </Nav.Item>
        </Nav> */}


<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Stockholm SL</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
        <li class="nav-item">
          <Link to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/destination">Destination</Link>
        </li>
        <li class="nav-item">
          <Link to="/blog">Blog</Link>
        </li>
        <li class="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link to="/login">Login</Link>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> */}
       
      </ul>

    </div>
  </div>
</nav>



      {/* <nav>
        <div style={{textAlign: 'left'}}> <a href="#" >SL</a> </div>
        <div  style={{textAlign: 'right'}}>
        <a href="#">Home</a>
        <a href="#">Destination</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        <a href="#">Login</a>
        </div>
      
      </nav> */}
      
    </Container>
        
        </div>
        
        
    );
};

export default Header;