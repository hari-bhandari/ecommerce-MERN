import React from 'react';
import styled from "styled-components";
import HalfStarIcon from "@/assets/icons/Star";
interface RatingContainerProps{
    size:string
}
import ReactStars from "react-rating-stars-component";
const RatingContainer=styled.div<RatingContainerProps>`
    margin-top: 15px !important;
   
`
const StarRating:React.FC<{rating:number,size?:number,onChange?:any}> = ({rating,size,onChange}) => {

    return (
        <ReactStars
            count={5}
            value={rating}
            onChange={()=>{}}
            edit={onChange?true:false}
            size={size}
            activeColor="#54C5C6"
            isHalf={true}
            halfIcon={<HalfStarIcon  className={'active'}/>}
        />
    );
};

export default StarRating;