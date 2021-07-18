import React, {useEffect} from 'react';
import {AddReviewContainer, ReviewsContainer} from './ReviewComponent.style';

import ReviewIcon from "@/assets/icons/ReviewIcon";
import Reviews from "@/components/Product/details/Review/Reviews";
import {ReviewTitle} from "@/components/Product/details/ProductDetails.style";
import {OpenAddReviewTab} from "@/OpenModalFunctions";
import useFetch from "@/hooks/useFetch";
import {API_BASE_URL} from "@/utils/config";
import { useSSE } from "use-sse";
import axios from "axios";
const ReviewComponent:React.FC<{id:string}> = ({id}) => {
    // const [data, isLoading, error, reFetch]=
    const [data, error] = useSSE(() => {
        return fetch(`${API_BASE_URL}/api/v1/products/60cf95e3641318053e2df963/reviews`).then((res) => {
            console.log(res.json())
            return res.json()});
    }, []);

    return (
        <>
            <ReviewTitle>Reviews</ReviewTitle>
        <ReviewsContainer>
            <AddReviewContainer onClick={()=>{OpenAddReviewTab(id)}}>
                <ReviewIcon width={"75px"} height={"75px"}/>
                <span>Add a review</span>
            </AddReviewContainer>
            {/*<Reviews reviews={data.data.data}/>*/}
        </ReviewsContainer>
            </>
    );
};

export default ReviewComponent;