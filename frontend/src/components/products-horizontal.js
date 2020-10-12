import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const ProductsHorizontal = ({ products, moveToWishlist, removeFromCart, buyProduct }) => {
  return (
    <div>

      <div className = "products-horizontal">
        {products.map((product) => (
          <li key={product._id}>
            <div className="product">

                <Link to={"/product/" + product._id}>
                  <img
                    className="product-image"
                    src={product.imageurl}
                    alt="product"
                  />
                </Link>

              <div className="product-name">
                {product.name} ${product.price}<br/>
                <button onClick={() => moveToWishlist(product._id)}>Move to Wishlist</button>
                <button onClick={() => removeFromCart(product._id)}>Remove from Cart</button>
                <button onClick={() => buyProduct(product._id)}>Buy Now!</button>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ProductsHorizontal;