// This is the main file containing the core of the application. 
// It holds major routes and renders pages as components. 

import React, {Component} from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import TnC from "./Pages/T&C";

import NavbarComp from "./components/navbar";
import FooterComp from "./components/footer";


class App extends Component {

  render() {

    return (

        <BrowserRouter>

          <NavbarComp />
            
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/terms-and-conditions" component={TnC} />

          <FooterComp />
          
        </BrowserRouter>

    );
  }
}

export default App;