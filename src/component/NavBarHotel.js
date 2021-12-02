import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../images/baby.jpg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from "react-bootstrap";
const NavbarHotel = () => {

  return (
    <Navbar bg="white" variant="light" fixed="top" >
      <Container>
        <Navbar.Brand to="/" as={Link}><img src={logo} alt="baby's clothing logo" width={150} height={50} /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/" as={Link}>Home</Nav.Link>
          <Nav.Link to="/shop" as={Link}>Shop</Nav.Link>

        </Nav>
      </Container>
    </Navbar>


  );
};

NavbarHotel.propTypes = {};

export default NavbarHotel;
