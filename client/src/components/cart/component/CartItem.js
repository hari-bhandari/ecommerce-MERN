import React from 'react';

const CartItem = () => {
    return (
        <div className="cart-item-container d-md-flex justify-content-between pt-2 mb-5 pb-0" style={{backgroundColor:'#dbcfba'}}>
            <span className="remove-cart-item bg-danger d-flex">
                <i className="fal fa-times m-auto text-white" aria-hidden="true"></i>
            </span>
            <div className="px-3 my-3 text-center text-md-left">
                <a href="#">
                    <div className="cart-item-img mx-auto mx-md-0 mb-3">
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="img-fluid cartItem--productImage" alt=""/>
                    </div>

                </a>
            </div>
            <div className="px-3 my-3 text-center">
                <div className="cart-item-label text-uppercase text-secondary font-weight-bold">
                    Quantity
                </div>
                <div className="d-inline-block">
                    <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                </div>
            </div>
            <div className="px-3 my-3 text-center">
                <h5 className="cart-item-label text-uppercase text-secondary font-weight-bold">Price</h5>
                <span>$190</span>
            </div>
            <div className="px-3 my-3 text-center">
                <h5 className="cart-item-label text-uppercase text-secondary font-weight-bold">Applied Coupon</h5>
                <span>---</span>
            </div>
        </div>
    );
};

export default CartItem;