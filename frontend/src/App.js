// This is the main file containing the core of the application. 
// It holds major routes and renders pages (Home, Cart, SignUp, Profile) as components. 

import React, {Component} from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

class App extends Component {

  render() {

    return (

        <BrowserRouter>
            <div>
              <header>
                <h1>AP Project 1</h1>
              </header>
            </div>

            <ul className="header">
            <li><Route path="/" exact component={Home} /></li>
            <li><Route path="/cart" component={Cart} /></li>
            <li><Route path="/login" component={Login} /></li>
            <li><Route path="/profile" component={Profile} /></li>
            </ul>
            
        </BrowserRouter>

    );
  }
}

export default App;