// This is the Footer Component for all pages - "FooterComp"

import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "../App.css";

export default class FooterComp extends Component {
  render() {
    return (
      <div className="footer">
        <div style={{ color: "white" }}>
          <img
            src="https://res.cloudinary.com/dl6m7txan/image/upload/v1602041582/FSHN-removebg-preview_oear1z.png"
            height="50px"
            alt="FSHN"
          />

          <div className="wrapper">
            <li>
              <Nav.Link href="/about-us">
                About Us
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="/terms-and-conditions">
                Terms and Conditions
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="/contact-us">
                Contact Us
              </Nav.Link>
            </li>
          </div>
        </div>
      </div>
    );
  }
}
