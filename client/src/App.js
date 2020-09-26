import React, {Fragment} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./components/auth/Login";
import Navbar from "./components/Layout/Navbar";
import HomePage from "./components/pages/HomePage";
import Signup from "./components/auth/Signup";
import ShoppingCart from "./components/cart/ShoppingCart";
//importing state contexts
import AuthState from './context/auth/AuthState'
import AlertState from "./context/alert/AlertState";
import ItemState from "./context/items/ItemState";
import Alerts from "./components/Alerts";
import Footer from "./components/Layout/Footer";


function App() {
    return (
        <AuthState>
            <AlertState>
                <ItemState>
                <Router>
                    <Fragment>
                        <Navbar/>
                        <div className="container-app">
                        <Alerts/>
                        <Switch>
                            <Route exact path='/' component={HomePage}/>
                            <Route exact path='/signup' component={Signup}/>
                            <Route exact path='/login' component={Login}/>
                            <Route exact path='/cart' component={ShoppingCart}/>
                        </Switch>
                        </div>
                        <Footer/>
                    </Fragment>
                </Router>
                </ItemState>
            </AlertState>
        </AuthState>
  );
}

export default App;
