import React, {useEffect, useState} from 'react';
import useFetch from "@/hooks/useFetch";
import {API_BASE_URL} from "@/utils/config";
import {ReviewCard} from "@/components/Product/details/Review/Reviews";
import axios from "axios";
const MyReviews = () => {
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get(`${API_BASE_URL}/api/v1/products/MyReviews`).then(data=>{
            console.log(data)
            setData(data.data.data)
        })
    },[])

    return (
        <div>
            {data.map((review)=>{
                return <ReviewCard name={review.name} comment={review.comment} rating={review.rating} title={review.title}/>
            })}

        </div>
    );
};

export default MyReviews;