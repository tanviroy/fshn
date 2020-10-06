// Navigation bar Component - "NavbarComp"

import React, {Component} from "react";
import { Navbar, Nav} from "react-bootstrap";
import "../App.css";

  export default class NavbarComp extends Component {
    render() {    
      return (

        <Navbar style={{backgroundColor: "#020202", padding: "2%", height: "65px", fontSize: "2rem"}}>
              <Navbar.Brand href="/" style={{fontSize: "2.5rem", color: "white"}}>FSHN</Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="/cart"><a>Cart</a></Nav.Link>
                <Nav.Link href="/login"><a>Login</a></Nav.Link>
                <Nav.Link href="/profile"><a>Profile</a></Nav.Link>
              </Navbar.Collapse>
        </Navbar>
        
      );
    }
  }