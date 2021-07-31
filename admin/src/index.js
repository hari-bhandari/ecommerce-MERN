import React, {Component, useContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.scss';
import App from './components/app';
import { ScrollContext } from 'react-router-scroll-4';

// Components1
import Dashboard from './components/dashboard';

// Products physical
import Category from './components/products/physical/category';
import Sub_category from './components/products/physical/SubCategory';
import Product_list from './components/products/physical/ProductList';
import Add_product from './components/products/physical/AddProduct';

//Sales
import Orders from './components/sales/orders';
import Transactions_sales from './components/sales/transactions-sales';
//Coupons
import ListCoupons from './components/coupons/list-coupons';
import Create_coupons from './components/coupons/create-coupons';

//Pages

import List_user from './components/users/list-user';
import Create_user from './components/users/create-user';

import Profile from './components/settings/profile';
import Invoice from './components/invoice';
import Login from './components/auth/login';
import {ToastContainer} from "react-toastify";
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

                            <ProtectedRoute path={`/products/physical/category`} component={Category} />
                            <ProtectedRoute path={`/products/physical/sub-category`} component={Sub_category} />
                            <ProtectedRoute path={`/products/physical/product-list`} component={Product_list} />
                            <ProtectedRoute path={`/products/physical/add-product`} component={Add_product} />

                            <ProtectedRoute path={`/sales/orders`} component={Orders} />
                            <ProtectedRoute path={`/sales/transactions`} component={Transactions_sales} />

                            <ProtectedRoute path={`/coupons/list-coupons`} component={ListCoupons} />
                            <ProtectedRoute path={`/coupons/create-coupons`} component={Create_coupons} />
x

                            <ProtectedRoute path={`/users/list-user`} component={List_user} />
                            <ProtectedRoute path={`/users/create-user`} component={Create_user} />


                            <ProtectedRoute path={`/settings/profile`} component={Profile} />

                            <ProtectedRoute path={`/invoice`} component={Invoice} />


                        </App>
                    </Switch>
                </ScrollContext>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

            </BrowserRouter>
        )
}

ReactDOM.render(<AuthState><Root /></AuthState>, document.getElementById('root'));


