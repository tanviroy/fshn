// Navigation bar Component - "SearchComp"

import React, { Component, useState, useEffect } from "react";
import "../App.css";
import ProductsComp from "./products";
import products from "../data";


function SearchComp() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  React.useEffect(() => {
    const results = products.products.filter(product =>
      product.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search for a Product"
        value={searchTerm}
        onChange={handleChange}
      />
        {searchResults.map(item => (
          <ProductsComp results />
        ))}
    </div>
  );
}

export default SearchComp