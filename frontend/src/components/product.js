// This is the single Product Component for the individual product pages - "ProductComp"

import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Zoom from "react-img-zoom";

const ProductComp = ({ products }) => {
  return (
    <div>

      <div className="products-container">
        {products.map((product) => (
          <li key={product._id}>
            <div>

              <div className="container">
                <Link to={"/product/" + product._id}>
                <Zoom
                    img={product.imageurl}
                    className="image"
                    zoomScale={3}
                    width={400}
                    height={450}
                    alt={product.name}
                />
                </Link>
              </div>
              <br />

              <div className="product-name">
                <Link to={"/product/" + product._id}>{product.name}</Link>
              </div>

            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ProductComp;