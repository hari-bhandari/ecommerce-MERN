import { SHOP } from "../defines";
import {ShopStates} from "@/redux/ReduxIntefaces";

const initialState:ShopStates = {
  sort: "default",
  category:null,
  subCategory: null,
  currency:  {
    id: 'GBP',
    defaultMessage: '£ Pounds',
    icon: 'UKFlag',
  },
};

const shopReducer = (state:ShopStates = initialState, action:any) => {
  switch (action.type) {
    case SHOP.SET_SORT:
      return {
        ...state,
        sort: action.sortType,
      };
    case SHOP.SET_SUBCATEGORY:
      return {
        ...state,
        subCategory: action.subCategory,
      };
    case SHOP.SET_CURRENCY:
      return {
        ...state,
        currency: action.currency,
      };
    default:
      return state;
  }
};

export default shopReducer;
