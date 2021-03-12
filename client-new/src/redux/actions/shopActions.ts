import {SHOP} from "../defines";

export const setSort = (sortType:string) => ({
  type: SHOP.SET_SORT,
  sortType,
});

export const setSubCategory = (subCategory:string) => ({
  type: SHOP.SET_SUBCATEGORY,
  subCategory,
});
