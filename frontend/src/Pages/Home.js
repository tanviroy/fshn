// This is the Home Page - main page, will show all products here
// All necessary components only go here

import React, { Component } from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Products from "../components/products";
import HeroSection from "../components/HeroSection";
class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <Link />
        <HeroSection />
        {/* <h1>This is the Home Page</h1> */}
        {/* <header> */}
        {/* <ul>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul> */}
        {/* </header> */}

        <div>
          <Container id="content">
            <Products products={this.state.products} />
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
