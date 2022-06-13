import {SHOP} from "../defines";

export default (state: any, action: { type: any; sortType: any; subCategory: any; currency: any; address: any; billing: any; card: any; data: any; }) => {
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
    case SHOP.SET_CATEGORY_DATA:
      return {
        ...state,
        categoryData: action,
        categoryLoading: false
      }
    default:
      return state;
  }
};
