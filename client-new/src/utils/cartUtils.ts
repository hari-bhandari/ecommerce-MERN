export const calculateTotalPrice = (arr:[any]) => {
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
