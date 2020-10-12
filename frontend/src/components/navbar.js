// Navigation bar Component - "NavbarComp"

import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../App.css";

export default class NavbarComp extends Component {
  render() {
    return (
      <Navbar
        style={{
          backgroundColor: "#020202",
          padding: "2%",
          paddingRight: "4%",
          paddingLeft: "0%",
          height: "65px",
          fontSize: "2rem",
        }}
        fixed="top"
      >
        <Navbar.Brand href="/" style={{ fontSize: "2.5rem", color: "white" }}>
          <img
            src="https://res.cloudinary.com/dl6m7txan/image/upload/v1602041582/FSHN-removebg-preview_oear1z.png"
            height="60px"
            alt="FSHN"
          />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/products">All Products</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
