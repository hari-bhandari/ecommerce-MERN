import React from 'react';
import useFetch from "@/hooks/useFetch";
import {API_BASE_URL} from "@/utils/config";
import {ReviewCard} from "@/components/Product/details/Review/Reviews";
const MyReviews:React.FC<{data:any,isLoading:boolean}> = ({data,isLoading}) => {
    if(isLoading||!data){
        return <h3>Loading...</h3>
    }
    return (
        <div>
            {data.data.map((review)=>{
                return <ReviewCard name={review.name} comment={review.comment} rating={review.rating} title={review.title} myReview={true} createdAt={review.createdAt}/>
            })}

        </div>
    );
};

export default MyReviews;