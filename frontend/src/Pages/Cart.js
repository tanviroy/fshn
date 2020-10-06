// This is the Cart Page - will show products (if any) that are in the cart

import React, { useState } from "react";
import Axios from "axios";

export default function Cart() {
  const [data, setData] = useState(null);
  const [cartProduct, setCartProduct] = useState("");

  const getCart = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user",
    }).then((res) => {
      setData(res.data);
    });
  };

  const addToCart = () => {
    Axios({
      method: "POST",
      data: {
        product: cartProduct,
      },
      withCredentials: true,
      url: "http://localhost:5000/cart",
    }).then((res) => console.log(res));
  };

  const addToWishlist = (order) => {
    Axios({
      method: "POST",
      data: {
        product: order,
      },
      withCredentials: true,
      url: "http://localhost:5000/wishlist",
    }).then((res) => console.log(res));
  };

  const orderProduct = (order) => {
    Axios({
      method: "POST",
      data: {
        product: order,
      },
      withCredentials: true,
      url: "http://localhost:5000/order",
    }).then((res) => console.log(res));
  };

  const orderCancel = (order) => {
    Axios({
      method: "POST",
      data: {
        product: order,
      },
      withCredentials: true,
      url: "http://localhost:5000/cancelorder",
    }).then((res) => console.log(res));
  };

  return (
    <div className="cart">
      <h1>This is the Cart Page</h1>

      <input
        placeholder="Add a product to cart"
        onChange={(e) => setCartProduct(e.target.value)}
      />

      <button onClick={() => addToCart()}>Add to Cart</button>

      <br />

      <div>
        <button onClick={() => getCart()}>View Cart</button>
        {data ? (
          <div>
            <h3>Your Cart</h3>
              <ul>
                {data.cart.map((order, index) => (
                  <li key={index}>
                    {order}
                    <button onClick={() => orderProduct(order)}>
                      Order Now
                    </button>
                    <button onClick={() => addToWishlist(order)}>
                      Add to Wishlist
                    </button>
                    <button onClick={() => orderCancel(order)}>
                      Remove from Cart
                    </button>
                  </li>
                ))}
              </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
