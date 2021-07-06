import React from 'react';
import ReviewCard from "@/components/Product/details/Review/ReviewCard";
import styled from "styled-components";
const TagsWrapper=styled.div`
  max-height: 130px;
  margin: 35px;

`
const TagsHeader=styled.div`
  color: #ffffff;
  font-size: 22px;
  margin-bottom: 14px;

`
const TagsContainer=styled.div`
  .tag {
    display: inline-flex;
    background: #1d1c2d;
    color: #8c8aa7;
    border-radius: 5px;
    padding: 12px;
    margin: 10px 3px;
    cursor: pointer;
  }

  .selected {
    background: #8780f8;
    color: #ffffff;
  }

`
const ReviewComponent = () => {
    return (
        <div >
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
            <TagsHeader/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
        </div>
    );
};

export default ReviewComponent;