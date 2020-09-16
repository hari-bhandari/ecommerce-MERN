import React from 'react';
import './shoppingCart.css'
import CartItem from "./component/CartItem";

const ShoppingCart = () => {
    return (
        <section className="my-cart p-0 mt-8">


            <div className="container py-5">
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>

            </div>
            <button className="btn btn-block bg-success float-right" style={{width:'300px'}}>Proceed to checkout</button>
        </section>
    );
};

export default ShoppingCart;