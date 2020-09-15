import React from 'react';

const CartItem = () => {
    return (
            <div className="basket-product">
                <div className="item">
                    <div className="product-image">
                        <img src="http://placehold.it/120x166" alt="Placholder Image 2" className="product-frame"/>
                    </div>
                    <div className="product-details">
                        <h1><strong><span className="item-quantity">4</span> x Eliza J</strong> Lace Sleeve Cuff Dress</h1>
                        <p><strong>Navy, Size 18</strong></p>
                        <p>Product Code - 232321939</p>
                    </div>
                </div>
                <div className="price">26.00</div>
                <div className="quantity">
                    <input type="number" value="4" min="1" className="quantity-field"/>
                </div>
                <div className="subtotal">104.00</div>
                <div className="remove">
                    <button>Remove</button>
                </div>
            </div>
    );
};

export default CartItem;