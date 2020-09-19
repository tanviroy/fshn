import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from './Pages/Login';

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
    </BrowserRouter>
  );
}

export default App;