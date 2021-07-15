import React from 'react';
import Image from '@/components/Others/image/image';
import {Button} from '@/components/Others/button/button';
import {
    ProductCardWrapper,
    ProductImageWrapper,
    ProductInfo,
    ButtonText,
} from './product-card.style';
import {Counter} from '../../cart/counter/counter';
import {CartIcon} from '@/assets/icons/CartIcon';
import {useDispatch} from "react-redux";
import {addToCart} from "@/redux/actions/cartActions";
import {getItemCartQty} from "@/utils/cartUtils";

type ProductCardProps = {
    title: string;
    image: any;
    price: number;
    salePrice?: number;
    discountInPercent?: number;
    onClick?: (e: any) => void;
    product: any
};

import {useSelector} from "react-redux";
import StarRating from "@/components/Product/StarRating";
import Link from 'next/link';
import ConvertCurrency from "@/convertCurrency";
import {name} from "next/dist/telemetry/ci-info";

const ProductCard: React.FC<ProductCardProps> = ({
                                                     title,
                                                     image,
                                                     price,
                                                     salePrice,
                                                     discountInPercent,
                                                     onClick,
                                                     product,
                                                 }) => {
    const dispatch = useDispatch()
    const cartState = useSelector((state: any) => state.cartReducer);
    const handleAddClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        dispatch(addToCart(product, 1))

    };
    const {currency: {symbol,id},currencyDetails} = useSelector((state: any) => state.shopReducer);
    const handleRemoveClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        dispatch(addToCart(product, -1))

    };
    const cartQuantity = getItemCartQty(cartState, product.id)
    return (
        <ProductCardWrapper onClick={onClick} className="product-card">
            <a href={`/product/${product.id}`}       title={`Click to find out more about - ${product.name}`}>

                <ProductImageWrapper>


                    <Image
                        url={image}
                        className="product-image"
                        style={{position: 'relative'}}
                        alt={title}
                    />

                </ProductImageWrapper>
            </a>

            <ProductInfo>
                <h3 className="product-title">{product.name}</h3>
                <StarRating rating={4.5} size={30}/>
                <div className="product-meta">
                    <div className="productPriceWrapper">
                        <span className="product-price">
                            {symbol}
                            {ConvertCurrency(currencyDetails,price,'GBP',id)}
            </span>

                    </div>
                    {!cartQuantity ? (
                        <Button
                            className="cart-button"
                            variant="secondary"
                            borderRadius={100}
                            onClick={handleAddClick}
                        >
                            <CartIcon mr={2}/>
                            <ButtonText>
                                Cart
                            </ButtonText>
                        </Button>
                    ) : (
                        <Counter
                            value={cartQuantity ? cartQuantity : 0}
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
