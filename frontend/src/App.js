
// This is the main file containing the core of the application. 
// It holds major routes and renders components.

import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from './Pages/Login';

//import React from "react";
//import { Route, BrowserRouter } from "react-router-dom";
//import Home from "./Pages/Home";
//import Cart from "./Pages/Cart";
//import Login from "./Pages/Login";
//import Profile from "./Pages/Profile";


function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>AP Project 1</h1>
        </header>
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
    </BrowserRouter>
  );
}

export default App;
