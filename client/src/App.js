import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ShoppingCart from "./components/cart/ShoppingCart";
function App() {
  return (
    <div className="App">
      {/*<Login/>*/}
      {/*<Signup/>*/}
      <ShoppingCart/>
    </div>
  );
}

export default App;
