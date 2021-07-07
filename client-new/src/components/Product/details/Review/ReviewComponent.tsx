import React from 'react';
import ReviewCard from "@/components/Product/details/Review/ReviewCard";
import styled from "styled-components";
import {TagsContainer, TagsHeader, TagsWrapper,ReviewsContainer} from './ReviewComponent.style';
import {ReviewTitle} from "@/components/Product/details/ProductDetails.style";

const ReviewComponent = () => {
    return (
        <ReviewsContainer>
        <div >
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
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
        </div>
            <ReviewTitle>Add a review</ReviewTitle>
        </ReviewsContainer>
    );
};

export default ReviewComponent;