import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from "./components/auth/Login";
import ShoppingCart from "./components/cart/ShoppingCart";
import Navbar from "./components/Layout/Navbar";
import AuthState from './context/auth/AuthState'
import NewlyReleased from "./components/home/Featured/NewlyReleased";

function App() {
    return (
        <AuthState>
            <div className="App">
                {/*<Navbar/>*/}
                {/*<Login/>*/}
                {/*<Signup/>*/}
                {/*<ShoppingCart/>*/}
                <NewlyReleased/>
            </div>
        </AuthState>
  );
}

export default App;
