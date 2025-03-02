// This is the Signup and Login Page - user can login through email ID or Google OAuth

import React, { useState } from "react";
import Axios from "axios"; // for making http requests
import GoogleButton from "react-google-button";

export default function Login() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerMobile, setRegisterMobile] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
        mobile: registerMobile,
        email: registerEmail,
      },
      withCredentials: true,
      url: "http://localhost:5000/register",
    }).then(function (res) {
      console.log(res);
      alert(res.data);
    });
  };

  const login = () => {

    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/login",
    }).then(function (res) {
      console.log(res);
      alert(res.data);
      
    });
  };

  const googleAuth = () => {
    window.open("http://localhost:5000/google");
  };

  
  return (
    <div className="login">
      <div>
        <h1>Register Now!</h1>
        <input
          placeholder="Username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <br />
        <input
          placeholder="Mobile Number"
          onChange={(e) => setRegisterMobile(e.target.value)}
        />
        <br />
        <input
          placeholder="Email ID"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <br />
        <button onClick={register}>Submit</button>
      </div>
      <br /><br />

      <div>
        <h1>Login</h1>
        <input
          placeholder="Username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <br />
        <button onClick={login}>Continue</button><br/>

        <center>
          <GoogleButton onClick={googleAuth}/>
        </center>

      </div>
      <br /><br />

    </div>
  );
}
