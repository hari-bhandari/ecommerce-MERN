import {AUTH, SHOP} from "../defines";
import useFetch from "@/hooks/useFetch";
import {API_BASE_URL} from "@/utils/config";
import axios from "axios";
import setAuthToken from "@/redux/setAuthToken";


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


export const setCurrencyData = () => async (dispatch:any) => {

  try {
    const {data} = await axios.get(`https://api.currencyfreaks.com/latest?apikey=819639258bba4f27aa71b603c2fc52d8&symbols=JPY,GBP,EUR,USD`);
    dispatch({
      type: SHOP.SET_CURRENCY_DATA,
      data:data.rates,
    })

  } catch (err) {
    console.log(err)
  }
};