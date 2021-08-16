import React, {useState} from 'react';
import {AddReviewContainer, ReviewsContainer} from './ReviewComponent.style';

import ReviewIcon from "@/assets/icons/ReviewIcon";
import Reviews from "@/components/Product/details/Review/Reviews";
import {ReviewTitle} from "@/components/Product/details/ProductDetails.style";
import {Modal} from "react-responsive-modal";
import AddReview from "@/components/Product/details/Review/AddReview";

const ReviewComponent: React.FC<{ id: string, reviews: any }> = ({id, reviews}) => {
    const [open, setOpen] = useState(false)
    const handleModal = () => {
        setOpen(!open)
    };
    return (
        <div id={'reviews'}>
            {reviews.length > 0 && <ReviewTitle>Reviews</ReviewTitle>}
            <Modal focusTrapped={false} open={open} onClose={handleModal} showCloseIcon={false}
                   closeOnOverlayClick={true} center={true}>
                <AddReview id={id} onCloseBtnClick={handleModal}/>
            </Modal>
            <ReviewsContainer>

                <AddReviewContainer onClick={handleModal}>
                    {reviews.length === 0 &&
                    <span className={'not-found'}> No reviews found! click here to add one!</span>}
                    <ReviewIcon width={"75px"} height={"75px"}/>
                    <span>Add a review</span>
                </AddReviewContainer>
                {reviews.length > 0 && <Reviews reviews={reviews}/>}
            </ReviewsContainer>
        </div>
    );
};

export default ReviewComponent;