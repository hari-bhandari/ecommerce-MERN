import {createContext} from 'react';

type ContextProps = {
    sort: string,
    category: any,
    subCategory: any,
    currency: {
        id: string,
        defaultMessage: string,
        symbol: string,
        icon: string,
    },
    categoryLoading: boolean,
    billing: any,
    address: any,
    card: any,
    currencyDetails: any,
    categoryData: any,
    setSort: (sortType: string) => void,
    setSubCategory: (subCategory: object) => void,
    setCategory: (category: object) => void,
    setCurrency: (currency: object) => void,
    setDeliveryAddress: (address: object) => void,
    setBilling: (billing: object) => void,
    setCARD: (card: object) => void,
    setCurrencyData: () => void,
    setCategoryData: (data: any) => void,
}
const shopContext = createContext<Partial<ContextProps>>({});

export default shopContext;
