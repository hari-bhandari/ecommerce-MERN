import React from 'react';
import {AddReviewContainer, ReviewsContainer} from './ReviewComponent.style';

import ReviewIcon from "@/assets/icons/ReviewIcon";

const ReviewComponent = () => {
    return (
        <ReviewsContainer>

            <AddReviewContainer>
                <ReviewIcon width={"75px"} height={"75px"}/>
                <span>Add a review</span>
            </AddReviewContainer>
        </ReviewsContainer>
    );
};

export default ReviewComponent;