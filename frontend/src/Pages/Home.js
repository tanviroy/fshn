
// This is the Home Page - main page, will show all products here

import React from 'react';

//import React from "react";
//import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div>
      <h1>This is the Home Page</h1>
      <ul>
        <li>
          <Link to="/profile"> Profile </Link>
        </li>
        <li>
          <Link to="/cart"> Cart </Link>
        </li>
        <li>
          <Link to="/login"> Login </Link>
        </li>
      </ul>
    </div>
  );
}
