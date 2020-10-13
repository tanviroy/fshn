// This is the things that go on the Cart Page Component - "CartComp"

import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const CartComp = ({ products, moveToWishlist, removeFromCart, buyProduct }) => {

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
        <h3 className="shopping-cart">SHOPPING CART</h3>
        <div className="shopping-cart">PRICE</div>
      </li>

      {products.length === 0 
        ? <div> Cart is empty </div> // Checks if cart is empty else displays cart
        : products.map(product =>
          <li>
            <div className="cart-image"><img src={product.imageurl} alt="product" /></div>
            <div className="cart-name">
              <div><Link to={"/product/" + product._id}>{product.name}</Link></div>
            </div>
            <div className="cart-price">${product.price}</div>
            <div className="cart-action">
              <button onClick={() => moveToWishlist(product._id)}>Move to Wishlist</button>
              <button onClick={() => removeFromCart(product._id)}>Remove from Cart</button>
              <button onClick={() => buyProduct(product._id)}>Buy Now!</button>
            </div>
          </li>
          )}
    </ul>
  </div>

  <div className="cart-action">
      <h2 style={{fontWeight: "bold"}}> Subtotal </h2>
      <h3>Your cart has {`${products.length}`} items </h3>
      <h3>Your total bill is ${total} </h3>
  </div>

</div>
</div>
  );
};

export default CartComp