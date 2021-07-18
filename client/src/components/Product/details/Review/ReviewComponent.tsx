import React, {useRef} from 'react';
import {AddReviewContainer, ReviewsContainer} from './ReviewComponent.style';

import ReviewIcon from "@/assets/icons/ReviewIcon";
import Reviews from "@/components/Product/details/Review/Reviews";
import {ReviewTitle} from "@/components/Product/details/ProductDetails.style";
import {OpenAddReviewTab} from "@/OpenModalFunctions";
const ReviewComponent:React.FC<{id:string,reviews:any}> = ({id,reviews}) => {
    return (
        <div id={'reviews'}>
            {reviews.length>0&&<ReviewTitle>Reviews</ReviewTitle>}
            <ReviewsContainer>

                <AddReviewContainer onClick={()=>{OpenAddReviewTab(id)}}>
                    {reviews.length===0&&<span className={'not-found'}> No reviews found! click here to add one!</span>}
                    <ReviewIcon width={"75px"} height={"75px"}/>
                    <span>Add a review</span>
                </AddReviewContainer>
                {reviews.length>0&&<Reviews reviews={reviews}/>}
            </ReviewsContainer>
        </div>
    );
};

export default ReviewComponent;