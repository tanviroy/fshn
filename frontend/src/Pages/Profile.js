// This is the Profile Page - users can see all their profile details here

import React, { useState } from "react";
import Axios from "axios";

export default function Profile() {
  const [data, setData] = useState(null);
  const [updateMobile, setUpdateMobile] = useState("");
  const [updateAddress, setUpdateAddress] = useState("");

  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user",
    }).then((res) => {
      setData(res.data);
    });
  };
  const updateNum = () => {
    Axios({
      method: "POST",
      data: {
        //username: updateUsername,
        mobile: updateMobile,
      },
      withCredentials: true,
      url: "http://localhost:5000/update/number",
    }).then((res) => console.log(res));
  };
  const updateAdd = () => {
    Axios({
      method: "POST",
      data: {
        //username: updateUsername,
        address: updateAddress,
      },
      withCredentials: true,
      url: "http://localhost:5000/update/address",
    }).then((res) => console.log(res));
  };
  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <button onClick={getUser}>User Details</button>
        {data ? <h3>Hello, {data.username}!</h3> : null}
        {data ? (
          <h3>
            Delivery Address: {data.address}
            <input
              placeholder="enter new address"
              onChange={(e) => setUpdateAddress(e.target.value)}
            />
            <button type="submit" onClick={() => updateAdd()}>
              Update Address
            </button>
          </h3>
        ) : null}
        {data ? (
          <h3>
            Registered Mobile Number: {data.mobile}
            <input
              placeholder="enter new number"
              onChange={(e) => setUpdateMobile(e.target.value)}
            />
            <button type="submit" onClick={() => updateNum()}>
              Update Number
            </button>
          </h3>
        ) : null}
      </div>
      <div>
        <h1>Orders</h1>
        {data ? (
          <h3>
            <ul>
              {data.orders.map((order, index) => (
                <li key={index}>{order}</li>
              ))}
            </ul>
          </h3>
        ) : null}
        <h1>Cart</h1>
        {data ? (
          <h3>
            <ul>
              {data.cart.map((order, index) => (
                <li key={index}>{order}</li>
              ))}
            </ul>
          </h3>
        ) : null}
        <h1>Wishlist</h1>
        {data ? (
          <h3>
            <ul>
              {data.wishlist.map((order, index) => (
                <li key={index}>{order}</li>
              ))}
            </ul>
          </h3>
        ) : null}
      </div>
    </div>
  );
}
