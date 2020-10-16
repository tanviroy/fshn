// This is the Shop Page / All Products Page - users can view, search for and filter products here.

import React, { Component } from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import ProductsComp from "../components/products";
import Axios from "axios";

class Shop extends Component {
  state = {
    products: [],
    searchterm: '',
    gender: "A",
    color: "A",
  };

  editSearchTerm = async(e) => {
    await this.setState({searchterm: e.target.value});
    console.log(this.state.searchterm)
    //console.log(this.state.products)
    Axios({
      method: "GET",
      withCredentials: true,
  
      url: "http://localhost:5000/productsearch/"+this.state.searchterm,
    }).then((res) => {
      this.setState({ products: res.data });
      console.log(res.data);
    });

  }

  handleGenderChange = async(e) =>{
    await this.setState({gender: e.target.value});
    //console.log(this.state.gender)
    Axios({
      method: "GET",
      withCredentials: true,
  
      url: "http://localhost:5000/productsearchbygender/"+this.state.gender,
    }).then((res) => {
      this.setState({ products: res.data });
      console.log(res.data);
    });
  }

  handleColorChange = async(e) =>{
    await this.setState({color: e.target.value});
    //console.log(this.state.color)
    Axios({
      method: "GET",
      withCredentials: true,
  
      url: "http://localhost:5000/productsearchbycolor/"+this.state.color,
    }).then((res) => {
      this.setState({ products: res.data });
      console.log(res.data);
    });
  }

  componentDidMount() {
    fetch("http://localhost:5000/getproducts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data });
        console.log(data);
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>

        <center>
          <div className = "search-bar">
            <input type = "text" className="search" value = {this.state.searchterm} onChange = {this.editSearchTerm} placeholder = "Search for a product..." />
            <img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" alt="search"/>
          </div>

          <h1 style={{fontSize: "5rem"}}> . . . </h1><br />
          <h1 style={{fontSize: "3rem"}}> View Products</h1>

          <label>
          Gender: 
          <select value={this.state.gender} onChange={this.handleGenderChange}>
            <option value="A">All</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="U">Unisex</option>
          </select>
          </label>

          <label>
          Color: 
          <select value={this.state.gender} onChange={this.handleColorChange}>
            <option value="A">All</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Orange">Orange</option>
            <option value="Grey">Grey</option>
          </select>
          </label>

        </center>

        <div className="container">
          <Container id="content">
            <ProductsComp products={this.state.products} />
          </Container>
        </div>
      </div>
    );
  }
}

export default Shop;