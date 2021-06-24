import React from 'react';
import Image from '@/components/Others/image/image';
import { Button } from '@/components/Others/button/button';
import {
    ProductCardWrapper,
    ProductImageWrapper,
    ProductInfo,
    DiscountPercent,
    ButtonText,
} from './product-card.style';
import { Counter } from '../../cart/counter/counter';
import { CartIcon } from '@/assets/icons/CartIcon';
import {useDispatch} from "react-redux";
import {addToCart} from "@/redux/actions/cartActions";
import {getItemCartQty} from "@/utils/cartUtils";

type ProductCardProps = {
    title: string;
    image: any;
    weight?: string;
    currency: string;
    description: string;
    price: number;
    salePrice?: number;
    discountInPercent?: number;
    onClick?: (e: any) => void;
    onChange?: (e: any) => void;
    increment?: (e: any) => void;
    decrement?: (e: any) => void;
    cartProducts?: any;
    addToCart?: any;
    updateCart?: any;
    value?: any;
    deviceType?: any;
    product:any
};
import {useSelector} from "react-redux";
import StarRating from "@/components/Product/StarRating";

const ProductCard: React.FC<ProductCardProps> = ({
                                                     title,
                                                     image,
                                                     weight,
                                                     price,
                                                     salePrice,
                                                     discountInPercent,
                                                     cartProducts,
                                                     updateCart,
                                                     value,
                                                     currency,
                                                     onChange,
                                                     increment,
                                                     decrement,
                                                     deviceType,
                                                     onClick,
                                                     product,
                                                     ...props
                                                 }) => {
    const dispatch=useDispatch()
    const cartState = useSelector((state:any) => state.cartReducer);
    const handleAddClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        dispatch(addToCart(product,1))

    };
    const handleRemoveClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        dispatch(addToCart(product,-1))

    };
    const cartQuantity=getItemCartQty(cartState,product.id)
    return (
        <ProductCardWrapper onClick={onClick} className="product-card">
            <ProductImageWrapper href={`/product/${product.id}`}>

                <Image
                    url={image}
                    className="product-image"
                    style={{ position: 'relative' }}
                    alt={title}
                />

            </ProductImageWrapper>
            <ProductInfo>
                <h3 className="product-title">{product.name}</h3>
                <StarRating rating={4}/>
                <div className="product-meta">
                    <div className="productPriceWrapper">
                        {discountInPercent ? (
                            <span className="discountedPrice">
                {currency}
                                {price}
              </span>
                        ) : (
                            ''
                        )}

                        <span className="product-price">
              {currency}
                            {salePrice ? salePrice : price}
            </span>

                    </div>
                    {!cartQuantity ? (
                        <Button
                            className="cart-button"
                            variant="secondary"
                            borderRadius={100}
                            onClick={handleAddClick}
                        >
                            <CartIcon mr={2} />
                            <ButtonText>
                                Cart
                            </ButtonText>
                        </Button>
                    ) : (
                        <Counter
                            value={cartQuantity?cartQuantity:0}
                            onDecrement={handleRemoveClick}
                            onIncrement={handleAddClick}
                        />
                    )}
                </div>
            </ProductInfo>
        </ProductCardWrapper>
    );
};

export default ProductCard;