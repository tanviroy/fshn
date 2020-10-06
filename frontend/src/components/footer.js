// Footer Component - "FooterComp"

import React, {Component} from "react";
import { Nav } from "react-bootstrap";
import "../App.css";

  export default class FooterComp extends Component {
    render() {    
      return (
 
            <div className="footer">
                <div style={{color: "white"}}>
                    <p style={{fontSize: "larger"}}>FSHN</p>
                    <div className="wrapper">
                        <li><Nav.Link href="/about-us"><a>About Us</a></Nav.Link></li>
                        <li><Nav.Link href="/terms-and-conditions"><a>Terms and Conditions</a></Nav.Link></li>
                        <li><Nav.Link href="/contact-us"><a>Contact Us</a></Nav.Link></li>
                    </div>
                </div>
            </div>
    
      );
    }
  }