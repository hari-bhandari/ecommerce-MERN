export interface globalStates{
    currency: {
        currency: string,
    },
    category: string,
    isAuthenticated:false,
    user:string|null,
    error:string|null,
    token:string|null
}
export interface ShopStates {
    sort: string,
    subCategory: object|null,
    category: object|null,
    currency:object
};
