// Carousel Component - "CarouselComp"

import React, {Component} from "react";
import { Carousel, Container } from "react-bootstrap";
import "../App.css";

export default class CarouselComp extends Component {
    render() {    
      return (
    
        <Container spacing={2}>
        <Carousel style={{width: "90%", height: "40%"}}>
            <Carousel.Item>
                <img className="d-block w-100" 
                src="https://cdn1.expertreviews.co.uk/sites/expertreviews/files/2019/08/best_online_clothes_shops.jpg" 
                alt="First slide" 
                style={{height: "20%"}}/>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" 
                src="https://cdn.trendhunterstatic.com/thumbs/pepe-jeans-fall-2013.jpeg" 
                alt="Second slide" 
                style={{height: "20%"}} />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" 
                src="https://static.vecteezy.com/system/resources/thumbnails/000/662/999/original/Fashion_Sale_Banner_1.jpg" 
                alt="Third slide" 
                style={{height: "20%"}}/>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Container>
        
      );
    }
  }