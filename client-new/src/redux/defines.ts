export const GLOBAL = {
  SET_LANGUAGE: "SET_LANGUAGE",
  SET_CURRENCY: "SET_CURRENCY",
  SET_CATEGORY: "SET_CATEGORY",
  SET_SEARCH: "SET_SEARCH",
};

export const CART = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  REMOVE_ALL_FROM_CART: "REMOVE_ALL_FROM_CART",
  DECREASE_QUANTITY_CART: "DECREASE_QUANTITY_CART",
  INCREASE_QUANTITY_CART: "INCREASE_QUANTITY_CART",
};

export const WISHLIST = {
  ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
  REMOVE_FROM_WISHLIST: "REMOVE_FROM_WISHLIST",
};

export const SHOP = {
  SET_SORT: "SET_SORT",
  SET_SUBCATEGORY: "SET_SUBCATEGORY",
  SET_CATEGORY: "SET_CATEGORY",
};
export const FORM = {
  SET_CURRENT_FORM: "SET_CURRENT_FORM",
};
export const AUTH = {
  LOG_IN: "LOG_IN",
  LOG_IN_ERROR: "LOG_IN_ERROR",
  SIGN_UP_ERROR:"SIGN_UP_ERROR",
  SIGN_UP:"SIGN_UP",
  LOG_OUT:"LOG_OUT",
  LOAD_USER:"LOAD_USER",
  LOAD_USER_FAIL:"LOAD_USER_FAIL",
  ORDER_SUCCESS:"ORDER_SUCCESS",
  ORDER_SUCCESS_FAIL:"ORDER_SUCCESS_FAIL",
};
export interface CartActionObject {
  type:string,
  product:string,
  quantity:Number,
  color:string,
  size:string,

}
