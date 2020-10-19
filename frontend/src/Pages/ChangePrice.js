import React, { useState } from "react";
import Axios from "axios";

export default function AddProduct() {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");


  const addItem = () => {
    Axios({
      method: "POST",
      data: {
        productId: id,
        newprice: price,

      },
      withCredentials: true,
      url: "http://localhost:5000/changeprice",
    }).then((res) => console.log(res));
  };

  return (
    <div className="cart">
      <h1>Update Product Price:</h1>
      <br/>

      <input
        placeholder="Product ID"
        onChange={(e) => setId(e.target.value)}
      /><br/>
      <input
        placeholder="Enter new price"
        onChange={(e) => setPrice(e.target.value)}
      /><br/>
      
      <button onClick={() => addItem()}>Update Product Detail</button>

    </div>
  );
}
