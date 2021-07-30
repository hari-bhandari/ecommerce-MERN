import React from 'react';
import ReactStars from "react-rating-stars-component";
import Star from "./Star";
const StarRating= ({rating,size,onChange}) => {

    return (
        <ReactStars
            count={5}
            value={rating}
            onChange={onChange}
            edit={onChange?true:false}
            size={size}
            activeColor="#54C5C6"
            isHalf={true}
            halfIcon={<Star  className={'active'}/>}
        />
    );
};

export default StarRating;