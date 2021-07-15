import React from 'react';
import styled from "styled-components";
import StarRating from "@/components/Product/StarRating";
import {ReviewTitle} from "@/components/Product/details/ProductDetails.style";
import {TagsContainer, TagsHeader, TagsWrapper} from "@/components/Product/details/Review/ReviewComponent.style";
import {Scrollbar} from "@/components/Scrollbar";
import {Button} from "@/components/Others/button/button";

const ReviewCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 709px;
  width: 100%;
  max-height: 250px;
  background: #ffffff;
  border-radius: 10px;
  margin: 0.5px 0px;
  box-shadow: #eeeeee 2px 2px 2px 2px;
`
const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000000;
  font-weight: bold;`
const NameGroup = styled.div`
  display: flex;
  text-overflow: ellipsis;
  p{
    text-overflow: ellipsis;
    width: 75px;
    overflow:hidden;
    white-space:nowrap;
  }
`
const Initials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  margin-right: 12px;
  border-radius: 50%;
  background: #d56a6a;
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  b{
    text-align: center;
  }
  color: #2b2b2b;
  font-weight: 400;
  margin: 0px 45px;
`
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 45px;
  align-items: center;
  color: #8c8aa7;
`
const ShareGroup = styled.div`
  display: flex;
  padding: 8px;
  color: white;
  background: #104D92;
  border-radius: 5px;
  cursor: pointer;
`
const ReviewsButtonContainer = styled.div`
  margin: 10px auto;
  button{
    margin: 5px auto;
  }
`

const ReviewCard:React.FC<{name:string,comment:string,rating:number,title:string}> = ({name,comment,rating,title}) => {
    return (
        <ReviewCardContainer>
            <ReviewHeader>
                <NameGroup>
                    <Initials>{name.slice(0,1)}</Initials>
                    <p>{name}</p>
                </NameGroup>
                <StarRating rating={rating}/>
            </ReviewHeader>
            <Description>
                <b>{title}</b>
                {comment}
            </Description>
            <Details>
                <div className="review-date">Feb 13, 2021</div>
                <ShareGroup>
                    <p>Share</p>
                </ShareGroup>
            </Details>
        </ReviewCardContainer>
    );
};
const Reviews:React.FC<{reviews:any}> = ({reviews}) => {
    return (
        <div style={{flex: '0.6', margin: "0 auto"}}>
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
            {/*<Scrollbar style={{height:"450px",width:"100%"}}>*/}
            {reviews.map(({name,comment,rating,title})=>(<ReviewCard name={name} comment={comment} title={title} rating={rating}/>))}

            <ReviewsButtonContainer>
                <Button type={'button'}>Show More reviews</Button>
            </ReviewsButtonContainer>
            {/*</Scrollbar>*/}
        </div>
    )
}

export default Reviews;