

export const calculateTotalPrice = (arr:any[]) => {
    let total = 0;
    arr.forEach((item) => {
        if (item.discount) {
            total += item.cartQuantity
                ? (item.price - item.discount) * item.cartQuantity
                : item.price - item.discount;
        } else {
            total += item.cartQuantity ? item.price * item.cartQuantity : item.price;
        }
    });
    return total;
};
export const isInCart=(arr:[any],id)=>{
    return arr.some((item) => item.id === id);
}
export const getItemCartQty = (arr:any[],id:string) => {
    const item=arr.find((item) => item.id === id);
    return item?.cartQuantity?item.cartQuantity:null
};