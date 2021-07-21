import React, {useState} from 'react';
import {DoubleContainer, FieldWrapper, Heading} from "@/features/checkout/Address.style";
import {Button} from "@/components/Others/button/button";
import {useLoginForm} from "@/hooks/useLoginForm";
import StarRating from "@/components/Product/StarRating";
import styled from "styled-components";
import {themeGet} from "@styled-system/theme-get";
import TextField from "@/components/Others/forms/text-field";
import axios from "axios";
import {API_BASE_URL} from "@/utils/config";
import {JSONConfig} from "@/axiosHeaders";
import Toast from "light-toast";

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  background-color: ${themeGet('colors.white', '#ffffff')};
  max-width: 450px;
  margin: 20px 0;
`;

const Container = styled.div`

  padding: 40px 60px 0;

  @media (max-width: 768px) {
    padding: 40px 30px 0;
  }
`;
import {useSelector} from "react-redux";

const AddReview = ({id, onCloseBtnClick}) => {
    const {isAuthenticated} = useSelector((state:any) => state.globalReducer);
    const {inputs, handleInputChange} = useLoginForm();
    const [rating, setRating] = useState(1)
    const onChangeForReview = (review) => {
        setRating(review)
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isAuthenticated){
            Toast.fail('Please login to add a review')
        }
        try {
            const {data} = await axios.post(
                `${API_BASE_URL}/api/v1/products/${id}/reviews`,
                {title: inputs.title, comment: inputs.comment, rating},
                JSONConfig
            )
            Toast.success('Review successfully added')
            onCloseBtnClick()

        }catch (e){
            Toast.fail(e.response.data.error)
        }
    }
    return (
        <Wrapper>
            <h4> Add a review</h4>
            <Container>
                <StarRating rating={rating} size={50} onChange={onChangeForReview}/>
                <FieldWrapper>
                    <TextField type={'text'} id={'12'} placeholder={'What\'s the most important thing to know? '}
                               name={"title"} onChange={handleInputChange} value={inputs.title} required={true}
                               label={"Review headline"}/>
                </FieldWrapper>
                <FieldWrapper>
                    <TextField type={'text'} id={'12'} textArea={true}
                               placeholder={'What did you like/dislike and what did you use this product for?'}
                               name={"comment"} onChange={handleInputChange} value={inputs.comment} required={true}
                               label={"Comment on product"}/>

                </FieldWrapper>
                <Button
                    onClick={onSubmit}
                    type="submit"
                    style={{width: '100%', height: '44px'}}
                >
                    Add this review
                </Button>
            </Container>
        </Wrapper>
    );
};

export default AddReview;