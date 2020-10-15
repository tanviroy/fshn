// This is the Terms and Conditions Page 

import React, { Component } from "react";
import "../App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Shop from "../Pages/Shop";
import {Link} from 'react-router-dom'

class AboutUs extends Component {

  render() {
    return (
      <div className="container" style={{marginBottom: "5%"}}>

        <h1>About Us</h1> 
        <br/><br/><br/><br/>
        
        <p style={{textAlign: "left", fontSize: "small"}}>
        FSHN Corporation is a global leader in sustainable design, marketing, and transportation of luxury comfort and lifestyle products, including apparel and accessories. Our reputation is globally renowned and counted among the top luxury and apparel companies.
        
        <br/><br/><br/><br/>
        <h2>Our Products and Brands</h2> 
        Since 2020, our distinctive image and colors have been consistently associated with an expanding number of products, prices, and international markets. Our products are the result of a unified vision for a more luxurious and sustainable future. We reflect a distinctive millennial perspective, and we strive to be innovators for an aspirational and green lifestyle. We believe that, through collaboration we succeed together, and are associated with the Annual Green Carpet Challenge held with the Met Gala®. We are grateful to have had a considerable influence on the way people think and feel about fashion and the way that fashion is advertised and celebrated. We combine consumer insights with advanced artificial intelligence analytics, efficient and comfortable design, marketing, and graphic skills to offer apparel with a unified vision.
        <br/><br/><br/>

        <h2>Green Carpet</h2> 
        We design our pieces through the multicultural experiences of our designers. We have a unique perspective on the modern, multidimensional generation and have won industry recognition for our CFDA/Vogue Fashion Challenges. We are exclusively debuting our Fall/Winter collection on Snapchat and Instagram this year. This is made possible through our direct-to-consumer model, which increases transparency, personalization, lowers pricing and promotes sustainability by increasing transportation efficiency and reducing waste. We celebrate our consumers who embrace individuality while contributing to the health and of the planet. 
        <br/><br/><br/>

        <h2> View our Product Collections</h2> 
        <h2> <div><Link to="/products">Keep Browsing</Link></div></h2> 

        <br/><br/><br/>
        <h2>We hope you enjoy FSHN</h2> 

        <br/><br/><br/>

        </p>
      </div>
    );
  }
}

export default AboutUs;