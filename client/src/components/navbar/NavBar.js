import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (

      <Navbar expand="lg" sticky="top" className="mynavbar">
        <Container>
          <Navbar.Brand><NavLink to="/" className="text-light">(React) Google Books Search</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavLink to="/saved" className="btn btn-danger ml-auto">Saved books</NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  );
}

export default NavBar;