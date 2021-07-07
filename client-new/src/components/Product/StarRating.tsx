import React from 'react';
import styled from "styled-components";
import StarIcon from "@/assets/icons/Star";
interface RatingContainerProps{
    size:string
}
const RatingContainer=styled.div<RatingContainerProps>`
    margin-top: 15px !important;
    svg {
      padding-right: 5px;
      width: ${props=>props.size};
      
    }
  .active {
    color: #54C5C6;
  }
  .inActive {
    color: black;
  }
`
const StarRating:React.FC<{rating:number,size?:string}> = ({rating,size}) => {
    let active = Array.apply(null, {length: rating})
    let inActive = Array.apply(null, {length: 5-rating})
    const starSize:string=size?size:'22px'
    return (
        <RatingContainer size={starSize}>
            {active.map((num)=> <StarIcon className={'active'} key={num}/>)}
            {inActive.map((num)=> <StarIcon className={'inActive'} key={num}/>)}
        </RatingContainer>
    );
};

export default StarRating;