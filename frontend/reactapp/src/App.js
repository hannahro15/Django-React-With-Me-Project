import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Register from "./pages/register-signin/Register.jsx"
import Signin from "./pages/register-signin/Sign-in.jsx"
import Home from "./pages/home/Home.jsx"
import Attractions from "./pages/attractions/Attractions.jsx"
import Footer from "./components/Footer.jsx"
import React, { useState } from ‘react’;
import axios from ‘axios’;

function App() {

  return (
    <div className="app">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/" className="logo">MK Attractions</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
              <Nav.Link as={Link} to="/attractions" className="nav-link">Attractions</Nav.Link>
              <NavDropdown title="Register/Sign In" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/register" className="nav-link">Register</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/sign-in" className="nav-link">Sign In</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<Signin />} />
      </Routes >
      <Footer />
    </div >
    
  );
}



export default App;
