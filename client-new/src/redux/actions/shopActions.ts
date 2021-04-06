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
  type: SHOP.SET_CATEGORY,
  currency,
});
