import React, {useReducer} from 'react';
import shopReducer from './shopReducer';
import {CART, SHOP} from "@/redux/defines";
import ShopContext from './shopContext'
import axios from "axios";

const ShopState = props => {
        const initialState = {
            sort: "default",
            category: null,
            subCategory: null,
            currency: {
                id: 'GBP',
                defaultMessage: '£ Pounds',
                symbol: '£',
                icon: 'UKFlag',
            },
            billing: null,
            address: null,
            card: null,
            currencyDetails: null,
            categoryData: null
        };

        const [state, dispatch] = useReducer(shopReducer, initialState);
        //set sort
        const setSort = (sortType: string) => {
            dispatch({
                type: SHOP.SET_SORT,
                sortType,
            })
        };
        //set subcategory
        const setSubCategory = (subCategory: object) => {
            dispatch({
                type: SHOP.SET_SUBCATEGORY,
                subCategory,
            })
        };
        //set category
        const setCategory = (category: object) => {
            dispatch({
                type: SHOP.SET_CATEGORY,
                category,
            })
        };
        //set currency
        const setCurrency = (currency: object) => ({
            type: SHOP.SET_CURRENCY,
            currency,
        });
        //set delivery address
        const setDeliveryAddress = (address: object) => {
            dispatch({
                type: SHOP.SET_ADDRESS,
                address,
            })
        };
        //set billing
        const setBilling = (billing: object) => {
            dispatch({
                type: SHOP.SET_BILLING,
                billing,
            })
        };
        //set card
        const setCARD = (card: object) => {
            dispatch({
                type: SHOP.SET_CARD,
                card,
            })
        };
        //set currency data
        const setCurrencyData = () => async (dispatch: any) => {

            try {
                const {data} = await axios.get(`https://api.twelvedata.com/exchange_rate?symbol=GBP/JPY,GBP/USD,GBP/EUR&apikey=${process.env.NEXT_PUBLIC_CURRENCY_TOKEN}`);
                dispatch({
                    type: SHOP.SET_CURRENCY_DATA,
                    data: data,
                })

            } catch (err) {
                console.log(err)
            }
        };
        //set category data
        const setCategoryData = (data: object) => ({
            type: SHOP.SET_CATEGORY_DATA,
            data: data,
        });

        return (
            <ShopContext.Provider
                value={{
                    sort: state.sort,
                    category: state.category,
                    subCategory: state.subCategory,
                    currency: state.currency,
                    billing: state.billing,
                    address: state.address,
                    card: state.card,
                    currencyDetails: state.currencyDetails,
                    categoryData: state.categoryData,
                    setSort,
                    setSubCategory,
                    setCategory,
                    setCurrency,
                    setDeliveryAddress,
                    setBilling,
                    setCARD,
                    setCurrencyData,
                    setCategoryData,

                }}
            >
                {props.children}
            </ShopContext.Provider>
        );
    }
;

export default ShopState;
