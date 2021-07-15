import React, {useState} from 'react';
import {DoubleContainer, FieldWrapper, Heading} from "@/features/checkouts/Address.style";
import {Button} from "@/components/Others/button/button";
import {useLoginForm} from "@/hooks/useLoginForm";
import StarRating from "@/components/Product/StarRating";
import styled from "styled-components";
import {themeGet} from "@styled-system/theme-get";
import TextField from "@/components/Others/forms/text-field";

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

const AddReview = () => {
    const {inputs, handleInputChange} = useLoginForm();
    const handleSubmit = (e) => {
        e.preventDefault()

    };
    const[rating,setRating]=useState(1)
    const onChangeForReview=(review)=>{
        setRating(review)
        console.log(review)
    }
    return (
        <Wrapper>
            <h4> Add a review</h4>
            <Container>
                <StarRating rating={4} size={50} onChange={onChangeForReview}/>
                <FieldWrapper>
                    <TextField type={'text'} id={'12'} placeholder={'What\'s the most important thing to know? '}
                               name={"title"} onChange={handleInputChange} value={inputs.title} label={"Review headline"}/>
                </FieldWrapper>
                <FieldWrapper>
                    <TextField type={'text'} id={'12'} textArea={true}
                               placeholder={'What did you like/dislike and what did you use this product for?'}
                               name={"title"} onChange={handleInputChange} value={inputs.title} label={"Review description"}/>

                </FieldWrapper>
                <Button
                    onClick={handleSubmit}
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