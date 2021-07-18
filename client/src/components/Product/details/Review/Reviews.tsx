import React from 'react';
import styled from "styled-components";
import StarRating from "@/components/Product/StarRating";
import {TagsContainer, TagsWrapper} from "@/components/Product/details/Review/ReviewComponent.style";
import {Scrollbar} from "@/components/Scrollbar";
import {Button} from "@/components/Others/button/button";
import {themeGet} from "@styled-system/theme-get";
import {OpenReviewsTab} from "@/OpenModalFunctions";

const ReviewCardContainer = styled.div`
  margin: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 709px;
  width: 100%;
  max-height: 250px;
  padding: 8px 8px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(144, 144, 144, 0.37);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
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
  color: ${themeGet('colors.primary.light', '#009e7f')};
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
    text-align: left;
    font-size: larger;
    color: ${themeGet('colors.primary.regular', '#009e7f')};
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
                    <p>Helpful</p>
                </ShareGroup>
            </Details>
        </ReviewCardContainer>
    );
};
const Reviews:React.FC<{reviews:any}> = ({reviews}) => {
    const loadMore=reviews.length>3?true:false
    return (
        <div style={{flex: '0.6', margin: "0 auto"}}>
            <TagsWrapper>
                <TagsContainer>
                    <div className="tag">⭐</div>
                    <div className="tag">⭐⭐</div>
                    <div className="tag selected">⭐⭐⭐</div>
                    <div className="tag">⭐⭐⭐⭐</div>
                    <div className="tag">⭐⭐⭐⭐⭐</div>
                </TagsContainer>
            </TagsWrapper>
            {/*<Scrollbar style={{height:"450px",width:"100%"}}>*/}

            {reviews.slice(0,3).map(({comment,rating,title,name})=>(<ReviewCard name={name} comment={comment} title={title} rating={rating}/>))}
            {loadMore &&
            <ReviewsButtonContainer>
                <Button type={'button'} onClick={()=>{OpenReviewsTab(reviews)}}>Show More reviews</Button>
            </ReviewsButtonContainer>
            }

        </div>
    )
}
export const ReviewsModal:React.FC<{reviews:any}> = ({reviews}) => {
    return (
        <div style={{flex: '0.6', margin: "0 auto"}}>
            <TagsWrapper>
                <TagsContainer>
                    <div className="tag">⭐</div>
                    <div className="tag">⭐⭐</div>
                    <div className="tag selected">⭐⭐⭐</div>
                    <div className="tag">⭐⭐⭐⭐</div>
                    <div className="tag">⭐⭐⭐⭐⭐</div>
                </TagsContainer>
            </TagsWrapper>
            <Scrollbar style={{height:"450px",width:"100%"}}>
                {reviews.map(({name,comment,rating,title})=>(<ReviewCard name={name} comment={comment} title={title} rating={rating}/>))}
            </Scrollbar>
        </div>
    )
}
export default Reviews;