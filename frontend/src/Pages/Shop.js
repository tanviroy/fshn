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