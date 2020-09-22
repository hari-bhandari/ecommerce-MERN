import React, {Fragment} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./components/auth/Login";
import Navbar from "./components/Layout/Navbar";
import HomePage from "./components/pages/HomePage";
import Signup from "./components/auth/Signup";

//importing state contexts
import AuthState from './context/auth/AuthState'
import AlertState from "./context/alert/AlertState";
import ItemState from "./context/items/ItemState";


function App() {
    return (
        <AuthState>
            <AlertState>
                <ItemState/>
                <Router>
                    <Fragment>
                        <Navbar/>
                        <Switch>
                            <Route exact path='/' component={HomePage}/>
                            <Route exact path='/signup' component={Signup}/>
                            <Route exact path='/login' component={Login}/>
                        </Switch>
                    </Fragment>
                </Router>
                <ItemState/>
            </AlertState>
        </AuthState>
  );
}

export default App;
