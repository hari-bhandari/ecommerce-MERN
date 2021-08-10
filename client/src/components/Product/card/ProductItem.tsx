import React, {useContext} from 'react';
import Image from '@/components/Others/image/image';
import {Button} from '@/components/Others/button/button';
import {ButtonText, ProductCardWrapper, ProductImageWrapper, ProductInfo, RatingContainer,} from './product-card.style';
import {Counter} from '../../cart/counter/counter';
import {CartIcon} from '@/assets/icons/CartIcon';
import {getItemCartQty} from "@/utils/cartUtils";
import StarRating from "@/components/Product/StarRating";
import ConvertCurrency from "@/convertCurrency";
import cartContext from "@/context/cart/cartContext";
import shopContext from "@/context/shop/shopContext";
import {transformCloudinaryImage} from "@/utils/config";
import {cartAnimation} from "@/components/Product/cart-animation";

type ProductCardProps = {
    title: string;
    image: any;
    price: number;
    salePrice?: number;
    discountInPercent?: number;
    onClick?: (e: any) => void;
    product: any
};

const ProductCard: React.FC<ProductCardProps> = ({
                                                     title,
                                                     image,
                                                     price,
                                                     salePrice,
                                                     discountInPercent,
                                                     onClick,
                                                     product,
                                                 }) => {
    const cartContexts = useContext(cartContext)
    const {cart, addToCart} = cartContexts;
    const handleAddClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        addToCart(product, 1)

    };
    const shop = useContext(shopContext)
    const {currency: {symbol, id}, currencyDetails} = shop
    const handleRemoveClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        cartAnimation(e)
        addToCart(product, -1)

    };
    const cartQuantity = getItemCartQty(cart, product.id)
    return (
        <ProductCardWrapper onClick={onClick} className="product-card">
            <a href={`/product/${product.id}`} title={`Click to find out more about - ${product.name}`}>

                <ProductImageWrapper>


                    <Image
                        url={transformCloudinaryImage(image, 258, 230, '.webp')}
                        className="product-image image"
                        alt={title} width={"258px"} height={"230px"}
                    />

                </ProductImageWrapper>
            </a>

            <ProductInfo>
                <h3 className="product-title">{product.name}</h3>
                <RatingContainer>
                    <StarRating rating={product.rating} size={30}/>
                    <span className={'total-review-count'}>({product.numReviews})</span>
                </RatingContainer>

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
