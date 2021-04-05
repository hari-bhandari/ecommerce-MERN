import { SHOP } from "../defines";
import {ShopStates} from "@/redux/ReduxIntefaces";

const initialState:ShopStates = {
  sort: "default",
  category:null,
  subCategory: null,
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
    case SHOP.SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    default:
      return state;
  }
};

export default shopReducer;
