import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../images/logo2.jpg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from "react-bootstrap";
const NavbarHotel = () => {

  return (
    <Navbar bg="light" variant="light" fixed="top" >
      <Container>
        <Navbar.Brand to="/" as={Link}><img src={logo} alt="Beach Resort" /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/" as={Link}>Home</Nav.Link>
          <Nav.Link to="/rooms" as={Link}>Rooms</Nav.Link>

        </Nav>
      </Container>
    </Navbar>


  );
};

NavbarHotel.propTypes = {};

export default NavbarHotel;
