import { createContext } from 'react';

const cartContext = createContext( {
    cart:[],
    addToCart:(product: any, quantity: number, color?: string, size?: string)=>{},
    removeFromCart:(cartId: string)=>{},
    removeAllFromCart:()=>{},
    decreaseQuantityCart:(cartId: string)=>{},
    increaseQuantityCart:(cartId: string)=>{}
});

export default cartContext;
