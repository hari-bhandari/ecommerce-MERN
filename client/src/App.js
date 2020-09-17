import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
//
// import Login from "./components/auth/Login";
// import ShoppingCart from "./components/cart/ShoppingCart";
// import Navbar from "./components/Layout/Navbar";
import AuthState from './context/auth/AuthState'
// import NewlyReleased from "./components/home/Featured/NewlyReleased";
// import FeaturedPage from "./components/home/Featured/FeaturedPage";
// import HomePage from "./components/pages/HomePage";
import SearchBar from "./components/Layout/SearchBar";

function App() {
    return (
        <AuthState>
            <div className="App">
                {/*<Navbar/>*/}
                {/*<Login/>*/}
                {/*<Signup/>*/}
                {/*<ShoppingCart/>*/}
                {/*<NewlyReleased/>*/}
                {/*<HomePage/>*/}
                <SearchBar/>
            </div>
        </AuthState>
  );
}

export default App;
