// This is the Home Page - main page. Has a carousel landing and featured products.
// All necessary components only go here

import React, { Component } from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductsComp from "../components/products";
import CarouselComp from "../components/carousel";

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
        <div className="banner">
          <Link />
          <CarouselComp />
        </div>

        <div className="container">
          <Container id="content">
            <ProductsComp products={this.state.products} />
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
