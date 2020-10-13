// This is the "view all products" Products Component for the Shop Page - "ProductsComp" (blueprint code to dynamically serve product data)

import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const ProductsComp = ({ products }) => {
  return (
    <div>

      <div className="products-container">
        {products.map((product) => (
          <li key={product._id}>
            <div className="product">
              <div className="container">
                <Link to={"/product/" + product._id}>
                  <img
                    className="product-image"
                    src={product.imageurl}
                    alt="product"
                  />
                </Link>
              </div>
              <div className="product-name">
                <Link to={"/product/" + product._id}>{product.name}</Link>
              </div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">
                {product.rating} Stars ({product.reviews} Reviews)
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ProductsComp;