import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ShoppingCart from "./components/cart/ShoppingCart";
import Navbar from "./components/Layout/Navbar";
function App() {
  return (
    <div className="App">
        <Navbar/>
      <Login/>
      {/*<Signup/>*/}
      <ShoppingCart/>
    </div>
  );
}

export default App;
