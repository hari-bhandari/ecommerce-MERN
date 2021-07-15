import { CART } from "../defines";

export const addToCart = (product:any, quantity:number, color?:string, size?:string) => ({
  type: CART.ADD_TO_CART,
  product,
  quantity,
  color,
  size,
});

export const removeFromCart = (cartId:string) => ({
  type: CART.REMOVE_FROM_CART,
  cartId,
});

export const removeAllFromCart = () => ({
  type: CART.REMOVE_ALL_FROM_CART,
});

export const decreaseQuantityCart = (cartId:string) => ({
  type: CART.DECREASE_QUANTITY_CART,
  cartId,
});

export const increaseQuantityCart = (cartId:string) => ({
  type: CART.INCREASE_QUANTITY_CART,
  cartId,
});
