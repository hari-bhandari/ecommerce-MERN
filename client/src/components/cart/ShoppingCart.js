import React from 'react';
import './shoppingCart.css'
import CartItem from "./component/CartItem";
import TotalCard from "./component/TotalCard";
const ShoppingCart = () => {
    return (
        <main>
            <div className="basket">

                <div className="basket-labels">
                    <ul>
                        <li className="item item-heading">Item</li>
                        <li className="price">Price</li>
                        <li className="quantity">Quantity</li>
                        <li className="subtotal">Subtotal</li>
                    </ul>
                </div>
                <CartItem/>

            </div>
            <aside>
                <TotalCard/>
            </aside>
        </main>
    );
};

export default ShoppingCart;