import React from 'react';
import HalfStarIcon from "@/assets/icons/Star";
import ReactStars from "react-rating-stars-component";

interface RatingContainerProps {
    size: string
}

const StarRating: React.FC<{ rating: number, size?: number, onChange?: any }> = ({rating, size, onChange}) => {

    return (
        <ReactStars
            count={5}
            value={rating}
            onChange={onChange}
            edit={onChange?true:false}
            size={size}
            activeColor="#54C5C6"
            isHalf={true}
            halfIcon={<HalfStarIcon  className={'active'}/>}
        />
    );
};

export default StarRating;