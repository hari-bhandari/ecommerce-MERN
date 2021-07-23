import React, {useEffect, useState} from 'react';
import useFetch from "@/hooks/useFetch";
import {API_BASE_URL} from "@/utils/config";
import {ReviewCard} from "@/components/Product/details/Review/Reviews";
import axios from "axios";
const MyReviews = () => {
    const [data, isLoading]=useFetch(`${API_BASE_URL}/api/v1/products/MyReviews`)
    return (
        <div>
            {data.map((review)=>{
                return <ReviewCard name={review.name} comment={review.comment} rating={review.rating} title={review.title}/>
            })}

        </div>
    );
};

export default MyReviews;