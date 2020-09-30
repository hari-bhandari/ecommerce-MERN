import React, {useContext, useEffect} from 'react';
import './shoppingCart.css'
import CartItem from "./component/CartItem";
import AuthContext from "../../context/auth/authContext";

const ShoppingCart = () => {
    const authContext=useContext(AuthContext);
    const {getCart,isAuthenticated,cart,loadUser}=authContext;
    useEffect(()=>{
        loadUser()
        if(isAuthenticated){
            getCart()
        }
    },[isAuthenticated])

    return (
        <section className="my-cart p-0 ">
            <div className="container py-5">
                {cart&&cart.map(item=>(
                    <CartItem title={item.productName} price={item.price} quantity={item.quantity} photo={item.images} id={item._id}/>
                ))}

            </div>
            <button className="btn btn-block bg-success" style={{width:'300px'}}>Proceed to checkout</button>
        </section>
    );
};

export default ShoppingCart;