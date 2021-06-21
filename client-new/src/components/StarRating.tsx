import React from 'react';
import styled from "styled-components";
import StarIcon from "@/assets/icons/Star";
const RatingContainer=styled.div`
    margin-top: 15px !important;
    svg {
      padding-right: 5px;
      width: 22px;

     
    }
  .active {
    color: #54C5C6;
  }

  .inActive {
    color: black;
  }
`
const StarRating:React.FC<{rating:number}> = ({rating}) => {
    let active = Array.apply(null, {length: rating})
    let inActive = Array.apply(null, {length: 5-rating})

    return (
        <RatingContainer>
            {active.map((num)=> <StarIcon className={'active'} key={num}/>)}
            {inActive.map((num)=> <StarIcon className={'inActive'} key={num}/>)}
        </RatingContainer>
    );
};

export default StarRating;