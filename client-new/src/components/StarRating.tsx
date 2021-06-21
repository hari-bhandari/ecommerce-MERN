import React from 'react';
import styled from "styled-components";
import StarIcon from "@/assets/icons/Star";
const RatingContainer=styled.div`
    margin-top: 15px !important;
    svg {
      padding-right: 5px;

      &:nth-child(-n + 4) {
        color: $star-yellow;
      }

      &:last-child {
        color: $round-border;
      }
    }
`
const StarRating = () => {
    return (
        <RatingContainer>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>


        </RatingContainer>
    );
};

export default StarRating;