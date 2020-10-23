// This is the Home Page - main page. Has a carousel landing, catchy banners, and featured products.
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
    fetch("https://ap-project1.herokuapp.com/getfeaturedproducts")
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

        <h1 style={{marginTop: "5%", fontSize: "6rem"}}>Welcome to <span style={{color: "#edca0d", fontWeight: "bold"}}>FSHN</span></h1>
        <h1 style={{marginTop: "2%", fontSize: "2.7rem"}}>FSHN (pronounced <b>fashion</b>) stands for "Fashionable, Sustainable, Haute & Nouveau" <br />
        We strive to make quality design available to everyone in an affordable and sustainable way. <br /> </h1>
        
        <Link to="/products">
        <button class="btn">
          <span style={{color: "#edca0d", fontSize: "3rem"}}>SHOP NOW</span>
          <div class="spiral-top"></div>
          <div class="spiral-bottom"></div>
        </button>
        </Link>

        <div class="swiper-slide">
          <div class="container-general">
          <h1 style={{fontSize: "8rem", margin: "0", color: "#edca0d", top: "275px", position: "relative", zIndex: "1", width: "100%"}}> every(wear) </h1><br />
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
          <h1 style={{fontSize: "5rem", marginTop: "5%"}}> # Get The Look </h1>
        </center>

        <div className="container" style={{marginBottom: "5%"}}>
          <Container id="content">
            <ProductsComp products={this.state.products} />
          </Container>
        </div>

      </div>
    );
  }
}

export default Home;