export interface globalStates{
    currency: {
        locales: string,
        currency: string,
    },
    category: string,
    isAuthenticated:false,
    user:null,
    error:null
}
export interface ShopStates {
    sort: string,
    subCategory: string,
};