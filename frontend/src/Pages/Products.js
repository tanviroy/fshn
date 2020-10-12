import React, { Component } from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import ProductsComp from "../components/products";

class Products extends Component {
  state = {
    products: [],
  };

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
          <h2>Search bar comes here</h2>
          <h1 style={{fontSize: "5rem"}}> . . . </h1><br />
          <h1 style={{fontSize: "4rem"}}> View Products</h1>
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

export default Products;