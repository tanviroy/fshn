
import React, { useState } from "react";
import Axios from "axios";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [color, setColor] = useState("");
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");

  const addItem = () => {
    Axios({
      method: "POST",
      data: {
        name: name,
        description: desc,
        imageurl: url,
        category: category,
        price: price,
        rating: rating,
        color: color,
        gender: gender,

      },
      withCredentials: true,
      url: "https://ap-project1.herokuapp.com/addproduct",
    }).then((res) => console.log(res));
  };

  return (
    <div className="cart">
      <h1>Add new products here</h1><br/>

      <input
        placeholder="Product name"
        onChange={(e) => setName(e.target.value)}
      /><br/>
      <input
        placeholder="Add a description"
        onChange={(e) => setDesc(e.target.value)}
      /><br/>
      <input
        placeholder="Enter categories separated by a single space"
        onChange={(e) => setCategory(e.target.value.split(" "))}
      /><br/>
      <input
        placeholder="Enter color"
        onChange={(e) => setColor(e.target.value)}
      /><br/>
      <input
        placeholder="Enter gender"
        onChange={(e) => setGender(e.target.value)}
      /><br/>
      <input
        placeholder="Enter price"
        onChange={(e) => setPrice(e.target.value)}
      /><br/>
      <input
        placeholder="Enter rating"
        onChange={(e) => setRating(e.target.value.split(" "))}
      /><br/>
      <input
        placeholder="Enter image URL"
        onChange={(e) => setUrl(e.target.value)}
      /><br/>

      <button onClick={() => addItem()}>Add Product to DB</button>

    </div>
  );
}
