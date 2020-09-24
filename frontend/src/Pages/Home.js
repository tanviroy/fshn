// This is the Home Page - main page, will show all products here

import React from "react";

//import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>This is the Home Page</h1>
      <ul>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
}
