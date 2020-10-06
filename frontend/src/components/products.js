// This is the Products Component - "ProductsComp" (blueprint code to dynamically serve product data)

import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const ProductsComp = ({ products }) => {
  return (
    <div>
    <center><h1>Featured Products</h1></center>

    <div className="products-container">
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
    </div>
    </div>
  )
};

export default ProductsComp