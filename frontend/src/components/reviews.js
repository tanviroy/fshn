// This is the Reviews Component used to render product reviews on that individual product's page - "ReviewsComp"

import React from "react";
import "../App.css";

const ReviewsComp = ({ products }) => {
  return (
    <div>

      <div className="review-list-container">

        {products.map((product) => (
          <div key={product._id}>
            {product.reviews.length === 0
            ? <div> There are no reviews for this product yet! </div>
            :
            product.reviews.map((review) => (
                <li key={review._id}> <b>{review.user} says:</b> <p className="review">{review.body}</p></li>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsComp;