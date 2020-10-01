// This is the main file containing the core of the application. 
// It holds major routes and renders pages (Home, Cart, SignUp, Profile) as components. 

import React, {Component} from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import EpicMenu from './EpicMenu';
import logo from './logo.png';
// import _Navbar from './components/_Navbar';


class App extends Component {

  render() {
  
    let links = [
      { label: 'Home', link: '/', active: true },
      { label: 'Cart', link: '/cart' },
      { label: 'Login', link: '/login' },
      { label: 'Profile', link: '/profile' },
    ];

    return (

        <BrowserRouter>
          {/* <_Navbar /> */}
            <div>
              <header>
                {/* <h1>AP Project 1</h1> */}
              </header>
            </div>
            <div className="container center">
              <EpicMenu links={links} logo={logo} onSearch={this.handleSearch} />

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