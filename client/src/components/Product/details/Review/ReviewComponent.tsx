import React from 'react';
import {AddReviewContainer, ReviewsContainer} from './ReviewComponent.style';

import ReviewIcon from "@/assets/icons/ReviewIcon";
import Reviews from "@/components/Product/details/Review/Reviews";
import {ReviewTitle} from "@/components/Product/details/ProductDetails.style";

const ReviewComponent = () => {
    return (
        <>
            <ReviewTitle>Reviews</ReviewTitle>
        <ReviewsContainer>
            <AddReviewContainer>
                <ReviewIcon width={"75px"} height={"75px"}/>
                <span>Add a review</span>
            </AddReviewContainer>
            <Reviews/>
        </ReviewsContainer>
            </>
    );
};

export default ReviewComponent;