import React from 'react';
import {
    ProductImageContainer,
    ProductInfo,
    ProductName,
    PromotionCardContainer
} from "@/components/promotion/Promotion.css";

const PromotionCard = () => {
    return (
        <PromotionCardContainer>
            <ProductImageContainer>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                <ProductInfo>
                    <ProductName>Nike air zoom vomero</ProductName>
                    {/*<ProductPrice>199</ProductPrice>*/}
                    {/*<ProductSlogan>Comfort and speed</ProductSlogan>*/}
                </ProductInfo>

            </ProductImageContainer>
        </PromotionCardContainer>
    );
};

export default PromotionCard;