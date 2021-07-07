import React from 'react';
import ReviewCard from "@/components/Product/details/Review/ReviewCard";
import {TagsContainer, TagsHeader, TagsWrapper, ReviewsContainer, ReviewContainer,AddReviewContainer} from './ReviewComponent.style';
import {ReviewTitle} from "@/components/Product/details/ProductDetails.style";
import AddReview from "@/components/Product/details/Review/AddReview";
import {Scrollbar} from "@/components/Scrollbar";

const ReviewComponent = () => {
    return (
        <ReviewsContainer>
            <ReviewTitle>Customer reviews</ReviewTitle>
            <TagsWrapper>
                <TagsHeader>Tags</TagsHeader>
                <TagsContainer>
                    <div className="tag">Experience</div>
                    <div className="tag">Quality</div>
                    <div className="tag selected">Design</div>
                    <div className="tag">Size</div>
                    <div className="tag">Features</div>
                    <div className="tag">Value</div>
                    <div className="tag">Replacement</div>
                </TagsContainer>
            </TagsWrapper>
            <Scrollbar style={{height:"450px",width:"100%"}}>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            </Scrollbar>
            <AddReviewContainer>
            <ReviewTitle>Add a review</ReviewTitle>
            <AddReview/>
            </AddReviewContainer>
        </ReviewsContainer>
    );
};

export default ReviewComponent;