import React from 'react';
import {DoubleContainer, FieldWrapper, Heading} from "@/features/checkouts/Address.style";
import {Button} from "@/components/Others/button/button";
import {useLoginForm} from "@/hooks/useLoginForm";
import StarRating from "@/components/Product/StarRating";
import styled from "styled-components";
import {themeGet} from "@styled-system/theme-get";
const TextArea=styled.textarea`
  width: 100%;
  height: 200px;
`

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  background-color: ${themeGet('colors.white', '#ffffff')};
  max-width: 450px;
`;

const Container = styled.div`
  
  padding: 40px 60px 0;

  @media (max-width: 768px) {
    padding: 40px 30px 0;
  }
`;

const AddReview = () => {
    const {inputs, handleInputChange} = useLoginForm();
    const handleSubmit =  (e) => {
        e.preventDefault()

    };
    return (
        <Wrapper>
            <Container>
                <StarRating rating={4} size={"20%"}/>
            <FieldWrapper>
                <TextArea
                    id="name"
                    placeholder="Address Line 2 "
                    name={"address2"}
                    onChange={handleInputChange} value={inputs.address2}
                />
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