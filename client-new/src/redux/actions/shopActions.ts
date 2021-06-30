import {SHOP} from "../defines";


export const setSort = (sortType:string) => ({
  type: SHOP.SET_SORT,
  sortType,
});

export const setSubCategory = (subCategory:object) => ({
  type: SHOP.SET_SUBCATEGORY,
  subCategory,
});
export const setCategory = (category:object) => ({
  type: SHOP.SET_CATEGORY,
  category,
});
export const setCurrency = (currency:object) => ({
  type: SHOP.SET_CURRENCY,
  currency,
});
export const setDeliveryAddress = (address:object) => ({
  type: SHOP.SET_ADDRESS,
  address,
});
export const setBilling = (billing:object) => ({
  type: SHOP.SET_BILLING,
  billing,
});
export const setCARD = (card:object) => ({
  type: SHOP.SET_CARD,
  card,
});

