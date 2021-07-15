import React from 'react';
import {AddReviewContainer, ReviewsContainer} from './ReviewComponent.style';

import ReviewIcon from "@/assets/icons/ReviewIcon";
import Reviews from "@/components/Product/details/Review/Reviews";
import {ReviewTitle} from "@/components/Product/details/ProductDetails.style";
import {OpenAddReviewTab} from "@/OpenModalFunctions";
const ReviewComponent:React.FC<{id:string,data:any}> = ({id,data}) => {
    return (
        <>
            <ReviewTitle>Reviews</ReviewTitle>
        <ReviewsContainer>
            <AddReviewContainer onClick={()=>{OpenAddReviewTab(id)}}>
                <ReviewIcon width={"75px"} height={"75px"}/>
                <span>Add a review</span>
            </AddReviewContainer>
            <Reviews reviews={data}/>
        </ReviewsContainer>
            </>
    );
};

export default ReviewComponent;