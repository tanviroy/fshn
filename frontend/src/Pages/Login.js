
// This is the Login Page - user can login through email ID or Google OAuth

import React from 'react';

//import React from "react";


export default function Login() {
  return (
    <div>
      <h1>This is the Login/ Register Page</h1>
      <form>
        <input label="username" />
        <br />
        <input type="password" label="password" />
        <br />
        <button> Register New User </button>
      </form>
    </div>
  );
}
