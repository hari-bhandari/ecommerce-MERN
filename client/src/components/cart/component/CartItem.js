import React from 'react';

const CartItem = ({title,quantity,photo,price,id}) => {
    return (
        <div className="cart-item-container d-md-flex justify-content-between  mb-1 pb-0" style={{backgroundColor:'#dbcfba'}}>
            <span className="remove-cart-item bg-danger d-flex">
                <i className="fal fa-times m-auto text-white" aria-hidden="true"></i>
            </span>
            <div className="px-3  text-center text-md-left">
                <a href="#">
                    <div className="cart-item-img mx-auto mx-md-0">
                        <img src={`http://localhost:5000/uploads/${photo}`} className="img-fluid cartItem--productImage" alt="" style={{width:'100px',height:'100px'}}/>
                    </div>

                </a>
            </div>
            <div className="px-3 my-3 text-center">
                <h5 className="cart-item-label text-uppercase text-secondary font-weight-bold">{title}</h5>
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
                <span>£{price}</span>
            </div>
        </div>
    );
};

export default CartItem;