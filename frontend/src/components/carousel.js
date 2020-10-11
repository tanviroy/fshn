// Carousel Component - "CarouselComp"

import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "../App.css";

export default class CarouselComp extends Component {
  render() {
    return (
      <Carousel style={{ width: "100%", height: "40%" }} interval={2000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dl6m7txan/image/upload/v1602013956/3_rlqeb0.png"
            alt="First slide"
            style={{ height: "20%" }}
          />
          <Carousel.Caption>
            <h3>Explore the latest range of apparels for everyone</h3>
            <p>&emsp; &emsp; &emsp;</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dl6m7txan/image/upload/v1602013955/2_xfsn8r.png"
            alt="Second slide"
            style={{ height: "20%" }}
          />
          <Carousel.Caption>
            <h3>Urban fashion at affordable rates</h3>
            <p>&emsp; &emsp; &emsp;</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dl6m7txan/image/upload/v1602013956/1_w6rug9.png"
            alt="Third slide"
            style={{ height: "20%" }}
          />
          <Carousel.Caption>
            <h3>Original Style. Responsibly Made.</h3>
            <p>&emsp; &emsp; &emsp;</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
