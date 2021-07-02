import { SHOP } from "../defines";
import {ShopStates} from "@/redux/ReduxIntefaces";

const initialState:ShopStates = {
  sort: "default",
  category:null,
  subCategory: null,
  currency:  {
    id: 'GBP',
    defaultMessage: '£ Pounds',
    symbol: '£',
    icon: 'UKFlag',
  },
  billing:null,
  address:null,
  card:null,
  currencyDetails:null,
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
    case SHOP.SET_ADDRESS:
      return {
        ...state,
        address:action.address
      }
    case SHOP.SET_BILLING:
      return {
        ...state,
        billing:action.billing
      }
    case SHOP.SET_CARD:
      return {
        ...state,
        address:action.card
      }
    case SHOP.SET_CURRENCY_DATA:
      return {
        ...state,
        currencyDetails:action.data
      }
    default:
      return state;
  }
};

export default shopReducer;
