// This is the component that is used for products in cart, wishlist and past orders on Profile Page - "ProfileComp"

import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const ProfileComp = ({ products}) => {


  return (
  <div>

    <ul className="profile-list-container">
      
      {products.length === 0 
        ? <div> This is empty </div>
        : products.map(product =>
          <li key={product._id} style={{width: "100%"}}>
            <div><img src={product.imageurl} alt="product" style={{display: "flex",height: "15rem"}}/></div>
            <Container>
                <div>
                  <div><Link to={"/product/" + product._id}>{product.name}</Link></div>
                  <div><b>${product.price}</b></div>
                </div>
            </Container>
          </li>
          )}
    </ul>

</div>
  );
};

export default ProfileComp