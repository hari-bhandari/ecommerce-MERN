import React, {useReducer} from 'react';
import CartContext from './cartContext';
import cartReducer from './cartReducer';
import {CART} from "@/redux/defines";

const CartState = props => {
        const initialState = [];

        const [state, dispatch] = useReducer(cartReducer, initialState);

        const addToCart = (product: any, quantity: number, color?: string, size?: string) => {
            dispatch({
                type: CART.ADD_TO_CART,
                product,
                quantity,
                color,
                size,
            });
        }

        const removeFromCart = (cartId: string) => {
            dispatch({
                type: CART.REMOVE_FROM_CART,
                cartId,
            })
        };

        const removeAllFromCart = () => {
            dispatch({
                type: CART.REMOVE_ALL_FROM_CART,
            })
        }

        const decreaseQuantityCart = (cartId: string) => {
            dispatch({
                type: CART.DECREASE_QUANTITY_CART,
                cartId,
            })
        };

        const increaseQuantityCart = (cartId: string) => {
            dispatch({
                type: CART.INCREASE_QUANTITY_CART,
                cartId,
            })
        };


        return (
            <CartContext.Provider
                value={{
                    cart:state,
                    addToCart,
                    removeFromCart,
                    removeAllFromCart,
                    decreaseQuantityCart,
                    increaseQuantityCart
                }}
            >
                {props.children}
            </CartContext.Provider>
        );
    }
;

export default CartState;
