import React from 'react';
import './shoppingCart.css'
import CartItem from "./component/CartItem";
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
                <div className="summary">
                    <div className="summary-total-items"><span className="total-items"></span> Items in your Bag</div>
                    <div className="summary-subtotal">
                        <div className="subtotal-title">Subtotal</div>
                        <div className="subtotal-value final-value" id="basket-subtotal">130.00</div>
                        <div className="summary-promo hide">
                            <div className="promo-title">Promotion</div>
                            <div className="promo-value final-value" id="basket-promo"></div>
                        </div>
                    </div>
                    <div className="summary-delivery">
                        <select name="delivery-collection" className="summary-delivery-selection">
                            <option value="0" selected="selected">Select Collection or Delivery</option>
                            <option value="collection">Collection</option>
                            <option value="first-class">Royal Mail 1st Class</option>
                            <option value="second-class">Royal Mail 2nd Class</option>
                            <option value="signed-for">Royal Mail Special Delivery</option>
                        </select>
                    </div>
                    <div className="summary-total">
                        <div className="total-title">Total</div>
                        <div className="total-value final-value" id="basket-total">130.00</div>
                    </div>
                    <div className="summary-checkout">
                        <button className="checkout-cta">Go to Secure Checkout</button>
                    </div>
                </div>
            </aside>
        </main>
    );
};

export default ShoppingCart;