// This is the things that go on the Cart Page Component - "CartComp"

import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const CartComp = ({ products, moveToWishlist, removeFromCart, buyProduct, buyAllProducts}) => {

  let total = 0;

  for (var i=0; i < products.length; i++) {
    total = total + products[i].price;
  }

  return (
  <div>

<div className="cart">

  <div className="cart-list">
    <ul className="cart-list-container">
      <li>
        <h3 className="shopping-cart">CART ITEMS</h3>
        <div className="shopping-cart">PRICE &nbsp; </div>
      </li>

      {products.length === 0 
        ? <div> Cart is empty </div> // Checks if cart is empty else displays cart
        : products.map(product =>
          <li key={product._id}>
            <div className="cart-image"><img src={product.imageurl} alt="product" /></div>
            <Container>
              
                <div className="cart-name">
                  <div><Link to={"/product/" + product._id}>{product.name}</Link></div></div>

                <div className="cart-price">${product.price}</div>
              
              <Row>
                <Col><button className="cart-button" onClick={() => moveToWishlist(product._id)}>Move to Wishlist</button></Col>
                <Col><button className="cart-button" onClick={() => removeFromCart(product._id)}>Remove from Cart</button></Col>
                <Col><button className="cart-button" onClick={() => buyProduct(product._id)}>Buy Now!</button></Col>
              </Row>
            </Container>
          </li>
          )}
    </ul>
  </div>

  <div className="cart-action">
      <h1 style={{fontWeight: "bold"}}> Subtotal </h1> <br />
      <h3>Your cart has {`${products.length}`} {products.length === 1 ? 'item' : 'items'} </h3>
      <h3>Your total bill is ${total.toFixed(2)} </h3>
      <button onClick={() => buyAllProducts()}>Buy All</button>
  </div>

</div>
</div>
  );
};

export default CartComp