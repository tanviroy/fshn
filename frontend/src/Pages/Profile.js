// This is the Profile Page - users can view and update their information here.

import React, { Component } from "react";
import "../App.css";
import { Container } from "react-bootstrap";
//import ProductsComp from "../components/products";
import ProfileItems from "../components/profileitems";
import Axios from "axios";
import {Link} from 'react-router-dom'
import Image from 'react-bootstrap/Image'


class Profile extends Component{
  state = {
    address: "",
    name: "",
    mobile: 0,
    orders: [],
    cart: [],
    wishlist: [],
    modal: false,
    newmobile: 0,
    newaddress: "",
  };

  componentDidMount() {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user",
    }).then((res) => {
      if (res.data === "Please login first"){
        alert(res.data)
      }
      else{
        this.setState({ mobile: res.data.mobile,
          name: res.data.username,
          address: res.data.address});
      }
      
    });
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/getcartitems",
    }).then((res) => {
     
        this.setState({ cart: res.data});
      //console.log(res.data);
      
      
    });
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/getwishlistitems",
    }).then((res) => {
      this.setState({ wishlist: res.data});
      //console.log(res.data);
    });
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/getorderitems",
    }).then((res) => {
      this.setState({ orders: res.data});
      //console.log(res.data);
    });
  };

  logout = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/logout",
    });
  }

  updateNum = () => {
    Axios({
      method: "POST",
      data: {
        mobile: this.state.newmobile,
      },
      withCredentials: true,
      url: "http://localhost:5000/update/number",
    }).then((res) => console.log(res));
  };

  updateAdd = () => {
    Axios({
      method: "POST",
      data: {
        address: this.state.newaddress,
      },
      withCredentials: true,
      url: "http://localhost:5000/update/address",
    }).then((res) => console.log(res));
  };

  //handleShow = () => {this.state.modal=true;
  //handleClose = () => this.state.modal=false;
  handleNumChange = async(e) => {
    await this.setState({newmobile: e.target.value});
    //console.log(this.state.newmobile)
  }

  handleAddChange = async(e) => {
    await this.setState({newaddress: e.target.value});
    //console.log(this.state.newaddress)
  }

  render() {

  return (
    <div>

      <Image src="https://res.cloudinary.com/dzky4f4zb/image/upload/v1602847602/welcome_hhin5h.png" fluid /> 
      <h1>Hi <b>{this.state.name}</b>!</h1>

      <div>
        <h3>Registered Mobile number: <b>{this.state.mobile}</b> Delivery Address: <b>{this.state.address}</b></h3>
        <br></br>
        <h4> If you would like to update your number: <input type="text" onChange={this.handleNumChange}/> <button onClick={this.updateNum}> Update Mobile </button> </h4> 
        <h4> If you would like to update your address: <input type="text" onChange={this.handleAddChange}/> <button onClick={this.updateAdd}> Update Address </button> </h4>
{/*}
        <Button variant="primary" onClick={this.handleShow}>
        Update Delivery Address
        </Button>

        <Modal
        show={true}
        onHide={this.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
  */}
        <div className="container">

        <Image src="https://res.cloudinary.com/dzky4f4zb/image/upload/v1602847816/yourcart_hb4g2u.png" fluid /> 


          <div>
            <h2>Ooh so close! Want to <Link to="/cart">Checkout</Link>?</h2>
            <h2> <div></div></h2> 

            <Container id="content">
            <ProfileItems products={this.state.cart} />
          </Container>
          </div>
        </div>


        <div className="container">

        <Image src="https://res.cloudinary.com/dzky4f4zb/image/upload/v1602847974/wishlist_x6cv29.png" fluid /> 

          <div>
            <Container id="content">
            <ProfileItems products={this.state.wishlist} />
          </Container>
          </div>

        </div>


        <div className="container">
        <Image src="https://res.cloudinary.com/dzky4f4zb/image/upload/v1602848155/previousorders_i2wtru.png" fluid /> 
          <Container id="content">
            <ProfileItems products={this.state.orders} />
          </Container>
        </div>

      <center>
      <button onClick={this.logout}> Logout </button>
      </center>

      </div>
    </div>
  );
}
}
export default Profile;