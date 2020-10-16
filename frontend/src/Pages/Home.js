// This is the Home Page - main page. Has a carousel landing and featured products.
// All necessary components only go here

import React, { Component } from "react";
import "../App.css";
import { Container } from "react-bootstrap";
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

        <div class="swiper-slide">
          <div class="container-general">
            <div class="gallery-wrap wrap-effect-1">
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
            </div>
          </div>
        </div>

        <div>
        <Link to="/products"> <Image src="https://res.cloudinary.com/dzky4f4zb/image/upload/v1602842544/workwear_campaign_2_ruhv1l.png" fluid /> </Link> 
        </div>

        <center>
          <h1 style={{fontSize: "5rem"}}> . . . </h1><br />
          <h1 style={{fontSize: "4rem"}}> Featured Collections</h1>
        </center>

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