// This is the Profile Page - users can view and update their information here.

import React, { Component } from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import ProductsComp from "../components/products";
import Axios from "axios";

class Profile extends Component{
  state = {
    address: "",
    name: "",
    mobile: 0,
    orders: [],
    cart: [],
    wishlist: []
  };

  componentDidMount() {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user",
    }).then((res) => {
      this.setState({ mobile: res.data.mobile,
                      name: res.data.username,
                      address: res.data.address});
      console.log(res.data);
    });
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/getcartitems",
    }).then((res) => {
      this.setState({ cart: res.data});
      console.log(res.data);
    });
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/getwishlistitems",
    }).then((res) => {
      this.setState({ wishlist: res.data});
      console.log(res.data);
    });
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/getorderitems",
    }).then((res) => {
      this.setState({ orders: res.data});
      console.log(res.data);
    });
  };



  //updateNum = () => {
    //Axios({
    //  method: "POST",
    //  data: {
        //username: updateUsername,
     //   mobile: updateMobile,
    //  },
    //  withCredentials: true,
    //  url: "http://localhost:5000/update/number",
   // }).then((res) => console.log(res));
  //};

  //updateAdd = () => {
  //  Axios({
  //    method: "POST",
  //    data: {
  //      //username: updateUsername,
  //      address: updateAddress,
  //    },
  //    withCredentials: true,
  //    url: "http://localhost:5000/update/address",
  //  }).then((res) => console.log(res));
  //};


  render() {

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <h3>Hello, <b>{this.state.name}</b>!</h3>
        <h3><b>Registerd Mobile number: </b>{this.state.mobile}</h3>
        <h3><b>Delivery Address: </b>{this.state.address}</h3>

        <div className="container">
          <h1>My Cart</h1>
          <Container id="content">
            <ProductsComp products={this.state.cart} />
          </Container>
        </div>

        <div className="container">
          <h1>My Wishlist</h1>
          <Container id="content">
            <ProductsComp products={this.state.wishlist} />
          </Container>
        </div>

        <div className="container">
          <h1>Previous Orders</h1>
          <Container id="content">
            <ProductsComp products={this.state.orders} />
          </Container>
        </div>
      </div>
    </div>
  );
}
}
export default Profile;