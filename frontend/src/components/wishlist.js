// This is the Wishlist Comp on the Cart Page - "WishComp"

import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const WishComp = ({ products, moveToCart, removeFromWishlist}) => {

  
  return (
  <div style={{width: "50rem"}}>


    <ul className="cart-list-container">
      <li>
        <h3 className="shopping-cart">WISHLIST </h3>
        <div className="shopping-cart">PRICE &nbsp; </div>
      </li>

      {products.length === 0 
        ? <div> Wishlist is empty </div> // Checks if cart is empty else displays cart
        : products.map(product =>
          <li key={product._id}>
            <div className="cart-image"><img src={product.imageurl} alt="product" /></div>
            <Container>
              
                <div className="cart-name">
                  <div><Link to={"/product/" + product._id}>{product.name}</Link></div></div>
                
                <div className="cart-price">${product.price}</div>
              
              <Row>
                <Col><button className="cart-button" onClick={() => moveToCart(product._id)}>Move to Cart</button></Col>
                <Col><button className="cart-button" onClick={() => removeFromWishlist(product._id)}>Remove</button></Col>
              </Row>
            </Container>
          </li>
          )}
    </ul>
  </div>

  );
};

export default WishComp