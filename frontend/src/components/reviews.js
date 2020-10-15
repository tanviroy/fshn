
import React from "react";
import "../App.css";
//import { Link } from "react-router-dom";

const ReviewsComp = ({ products }) => {
  return (
    <div>

      <div className="products-container">

        {products.map((product) => (
          <li key={product._id}>
            {product.reviews.map((review) => (
                <li key={review._id}> <b>{review.user} says: </b>{review.body}</li>
            ))}
          </li>
        ))}
      </div>
    </div>
  );
};

export default ReviewsComp;