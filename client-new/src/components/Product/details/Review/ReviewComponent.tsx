import React from 'react';
import {AddReviewContainer, ReviewsContainer} from './ReviewComponent.style';

import ReviewIcon from "@/assets/icons/ReviewIcon";
import Reviews from "@/components/Product/details/Review/Reviews";

const ReviewComponent = () => {
    return (
        <ReviewsContainer>

            <AddReviewContainer>
                <ReviewIcon width={"75px"} height={"75px"}/>
                <span>Add a review</span>
            </AddReviewContainer>
            <Reviews/>
        </ReviewsContainer>
    );
};

export default ReviewComponent;