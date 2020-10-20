// This is the Cart Page - will show products (if any) that are in the cart and wishlist.

// <Container id="content">
// <CartComp products={this.state.user.cart} />
// </Container>

import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CartComp from "../components/cart";
import WishComp from "../components/wishlist";
import Axios from "axios";


class Cart extends Component {

  state = {
    products: [],
    wishlist: [],
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
        //console.log(res.data);
      }
      
    });

    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/getwishlistitems",
    }).then((res) => {

      if (res.data === "Please log in to proceed!"){
        console.log("Please log in to proceed!");
      }

      else{
        this.setState({ wishlist: res.data });
        //console.log(res.data);
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
      window.location.reload(false);
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
      window.location.reload(false);
      alert(res.data);
    });
    //console.log(productId);
  }

  removeFromWishlist(productId){
    Axios({
      method: "POST",
      withCredentials: true,
      data:{
        productId: productId,
      },
      url: "http://localhost:5000/removefromwishlist",
    }).then((res) => {
      console.log(res);
      window.location.reload(false);
      alert(res.data);
    });
    //console.log(productId);
  }

  moveToCart(productId){
    Axios({
      method: "POST",
      withCredentials: true,
      data:{
        productId: productId,
      },
      url: "http://localhost:5000/movetocart",
    }).then((res) => {
      console.log(res);
      window.location.reload(false);
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
      window.location.reload(false);
      alert(res.data);
    });
    //console.log(productId);
  }

  buyAllProducts(){
    Axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:5000/buyallproducts",
    }).then((res) => {
      console.log(res.data);
      window.location.reload(false);
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
                                buyProduct={this.buyProduct}
                                buyAllProducts={this.buyAllProducts} />
          </Container>
        </div>

        <div className="container">
          <Container id="content">
            <WishComp products={this.state.wishlist}
                                moveToCart={this.moveToCart}
                                removeFromWishlist={this.removeFromWishlist} />
          </Container>
        </div>
      </div>
    );
  }
}

export default Cart;