// This is the Cart Page - will show products (if any) that are in the cart

// <Container id="content">
// <CartComp products={this.state.user.cart} />
// </Container>

import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CartComp from "../components/cart";
import Axios from "axios";


class Cart extends Component {

  state = {
    products: [],
  };

  componentDidMount() {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/getcartitems",
    }).then((res) => {

      if (res.data === "Please log in to proceed!"){
        alert("Please log in to proceed!");
      }

      else{
        this.setState({ products: res.data });
        console.log(res.data);
      }
      
    });
  }

  moveToWishlist(productId){
    Axios({
      method: "POST",
      withCredentials: true,
      data:{
        productId: productId,
      },
      url: "http://localhost:5000/movetowishlist",
    }).then((res) => {
      console.log(res);
      alert(res.data);
    });
    //console.log(productId);
  }

  removeFromCart(productId){
    Axios({
      method: "POST",
      withCredentials: true,
      data:{
        productId: productId,
      },
      url: "http://localhost:5000/removefromcart",
    }).then((res) => {
      console.log(res);
      alert(res.data);
    });
    //console.log(productId);
  }

  buyProduct(productId){
    Axios({
      method: "POST",
      withCredentials: true,
      data:{
        productId: productId,
      },
      url: "http://localhost:5000/buyproduct",
    }).then((res) => {
      console.log(res.data);
      alert(res.data);
    });
    //console.log(productId);
  }


  render() {
    return (
      <div>

        <center>
          <h1 style={{fontSize: "4rem"}}> SHOPPING CART </h1>
        </center>

        <div className="container">
          <Container id="content">
            <CartComp products={this.state.products}
                                moveToWishlist={this.moveToWishlist}
                                removeFromCart={this.removeFromCart}
                                buyProduct={this.buyProduct} />
          </Container>
        </div>
      </div>
    );
  }
}

export default Cart;