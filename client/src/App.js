import React, {Fragment} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./components/auth/Login";
import Navbar from "./components/Layout/Navbar";
//importing state contexts
import AuthState from './context/auth/AuthState'
import AlertState from "./context/alert/AlertState";
import HomePage from "./components/pages/HomePage";
import Signup from "./components/auth/Signup";

function App() {
    return (
        <AuthState>
            <AlertState>
            <Router>
                <Fragment>
                    <Navbar />
                        <Switch>
                            <Route exact path='/' component={HomePage} />
                            <Route exact path='/signup' component={Signup} />
                            <Route exact path='/login' component={Login} />
                        </Switch>
                </Fragment>
            </Router>
            </AlertState>
        </AuthState>
  );
}

export default App;
