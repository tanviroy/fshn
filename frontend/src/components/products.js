// This is the Product component (blueprint code to dynamically serve product data)

import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <div>
      <center><h1>Products List</h1></center>

      <ul className="products">
          {products.map((product) => (
              <li key={product._id}>
                  <div className="product">
                  <div className="container">
                  <Link to={"/product/" + product._id}><img className="product-image" src={product.image} alt="product"/></Link>
                  </div>
                  <div className="product-name">
                      <Link to={"/product/" + product._id}>{product.name}</Link>
                  </div>
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">${product.price}</div>
                  <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
                  </div>
              </li>
          ))}
      </ul>
    </div>
  )
};

export default Products