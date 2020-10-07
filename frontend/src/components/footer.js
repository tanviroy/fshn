// Footer Component - "FooterComp"

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
                <a href="/about-us">About Us</a>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="/terms-and-conditions">
                <a href="/terms-and-conditions">Terms and Conditions</a>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="/contact-us">
                <a href="/contact-us">Contact Us</a>
              </Nav.Link>
            </li>
          </div>
        </div>
      </div>
    );
  }
}
