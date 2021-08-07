import { createContext } from 'react';

const shopContext = createContext( {
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
    categoryData:null,
    setSort:(sortType: string)=>{},
    setSubCategory:(subCategory: object)=>{},
    setCategory:(category: object)=>{},
    setCurrency:(currency: object)=>{},
    setDeliveryAddress:(address: object)=>{},
    setBilling:(billing: object)=>{},
    setCARD:(card: object)=>{},
    setCurrencyData:()=>{},
    setCategoryData:(data: object)=>{},
});

export default shopContext;
