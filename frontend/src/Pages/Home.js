// This is the Home Page - main page. Has a carousel landing and featured products.
// All necessary components only go here

import React, { Component } from "react";
import "../App.css";
import { Container } from "react-bootstrap";
//import { Link } from "react-router-dom";
import ProductsComp from "../components/products";
import CarouselComp from "../components/carousel";
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'

class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch("http://localhost:5000/getfeaturedproducts")
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
          <CarouselComp />
        </div>

        <center>
          <h1 style={{fontSize: "5rem"}}> . . . </h1><br />
          <h1 style={{fontSize: "4rem"}}> Featured Collections</h1>
        </center>

        <div>
        <h1>Explore the FSHN Fall 2020 <Link to="/products">Workwear Collection</Link></h1> 
        <Image src="https://res.cloudinary.com/dzky4f4zb/image/upload/v1602840916/workwear_campaign_kafr1o.png" fluid />
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