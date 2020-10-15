// This is the things that go on the Cart Page Component - "CartComp"

import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const ProfileItems = ({ products}) => {


  return (
  <div>

<div className="cart">

  <div className="cart-list">
    <ul className="cart-list-container">
      
      {products.length === 0 
        ? <div> Cart is empty </div> // Checks if cart is empty else displays cart
        : products.map(product =>
          <li key={product._id}>
            <div className="cart-image"><img src={product.imageurl} alt="product" /></div>
            <Container>
              
                <div className="cart-name">
                  <div><Link to={"/product/" + product._id}>{product.name}</Link></div></div>
               
              
              
            </Container>
          </li>
          )}
    </ul>
  </div>

</div>
</div>
  );
};

export default ProfileItems