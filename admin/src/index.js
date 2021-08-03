import React, { useContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import App from './components/app';
import { ScrollContext } from 'react-router-scroll-4';

// Components1
import Dashboard from './components/dashboard';

// Products physical
import Category from './components/products/category';
import Sub_category from './components/products/SubCategory';
import Product_list from './components/products/ProductList';
import Add_product from './components/products/AddProduct';

//Sales
import Orders from './components/sales/orders';


import List_user from './components/users/list-user';
import Create_user from './components/users/create-user';

import Profile from './components/settings/profile';
import Login from './components/auth/login';
import AuthState from "./context/auth/AuthState";
import AuthContext from "./context/auth/authContext";
import ProtectedRoute from "./util/ProtectedRoute";

const Root =()=> {
    const authContext=useContext(AuthContext);
    const {loadUser}=authContext;
    useEffect(()=>{
        loadUser()
    },[])

        return (
            <BrowserRouter basename={'/'}>
                <ScrollContext>

                    <Switch>
                        <Route exact path={`/`} component={Login} />

                        <App>
                            <ProtectedRoute path={`/dashboard`} component={Dashboard} />

                            <ProtectedRoute path={`/products/category`} component={Category} />
                            <ProtectedRoute path={`/products/sub-category`} component={Sub_category} />
                            <ProtectedRoute path={`/products/product-list`} component={Product_list} />
                            <ProtectedRoute path={`/products/add-product`} component={Add_product} />

                            <ProtectedRoute path={`/sales/orders`} component={Orders} />

                            <ProtectedRoute path={`/users/list-user`} component={List_user} />
                            <ProtectedRoute path={`/users/create-user`} component={Create_user} />


                            <ProtectedRoute path={`/settings/profile`} component={Profile} />



                        </App>
                    </Switch>
                </ScrollContext>


            </BrowserRouter>
        )
}

ReactDOM.render(<AuthState><Root /></AuthState>, document.getElementById('root'));


