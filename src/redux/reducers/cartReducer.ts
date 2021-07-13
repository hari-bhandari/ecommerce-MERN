import { v4 as uuidv4 } from "uuid";
import { CART } from "../defines";

const initialState:Array<any> = [];

export default function cartReducer(state:Array<any> = initialState, action:any) {
  const cartItem = state.find((item) => item.cartId === action.cartId);
  const cartItemIndex = cartItem && state.indexOf(cartItem);
  switch (action.type) {
    case CART.ADD_TO_CART:
        const addedCartItem = state.find(
            (item) => item._id === action.product._id
        );
        const addedCartItemIndex =
            addedCartItem && state.indexOf(addedCartItem);
        if (!addedCartItem) {
          return [
            ...state,
            {
              ...action.product,
              cartQuantity: action.quantity || 1,
              cartId: uuidv4(),
            },
          ];
        } else {
          return [
            ...state.slice(0, addedCartItemIndex),
            {
              ...addedCartItem,
              cartQuantity: action.quantity
                  ? addedCartItem.cartQuantity + action.quantity
                  : addedCartItem.cartQuantity + 1,
            },
            ...state.slice(addedCartItemIndex + 1),
          ];
        }
    case CART.REMOVE_FROM_CART:
      return [
        ...state.slice(0, cartItemIndex),
        ...state.slice(cartItemIndex + 1),
      ];
    case CART.REMOVE_ALL_FROM_CART:
      return [];
    case CART.INCREASE_QUANTITY_CART:
      return [
        ...state.slice(0, cartItemIndex),
        { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 },
        ...state.slice(cartItemIndex + 1),
      ];
    case CART.DECREASE_QUANTITY_CART:
      if(cartItem.cartQuantity===1){
        return [
          ...state.slice(0, cartItemIndex),
          ...state.slice(cartItemIndex + 1),
        ]
      }
      if (cartItem.cartQuantity < 2) {
        return;
      }
      return [
        ...state.slice(0, cartItemIndex),
        { ...cartItem, cartQuantity: cartItem.cartQuantity - 1 },
        ...state.slice(cartItemIndex + 1),
      ];
    default:
      return state;
  }
}
