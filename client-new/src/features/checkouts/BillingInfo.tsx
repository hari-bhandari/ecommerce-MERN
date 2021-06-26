import React from 'react';
import styled from 'styled-components';
import {themeGet} from '@styled-system/theme-get';
import MaskedInput from 'react-text-mask';
import {Button} from '@/components/Others/button/button';
import {FieldWrapper, Heading} from './Billing.style';
import {useLoginForm} from "@/hooks/useLoginForm";
import TextField from "@/components/Others/forms/text-field";
import {InformationBox} from "@/features/checkouts/checkout.style";
import {setDeliveryAddress} from "@/redux/actions/shopActions";
import {checkIfValueIsNotEmpty} from "@/features/checkouts/Address";
import {useDispatch} from "react-redux";
export const ButtonContainer=styled.div`
  display: flex;
  justify-content: space-between;
`


const CreateOrUpdateContact = (props:any) => {

    const {inputs, handleInputChange} = useLoginForm();
    const dispatch = useDispatch()

    const handleNext =  (e) => {
        e.preventDefault()
        if(checkIfValueIsNotEmpty(inputs?.name)&&checkIfValueIsNotEmpty(inputs?.number)||inputs.number==='+44' ){
            dispatch(setDeliveryAddress(inputs))
            props.next()
            alert(JSON.stringify(inputs))

        }
        else{
            alert("Please ensure you've filled all the values")

        }
    };
    const handlePrev=(e)=>{
        e.preventDefault()
        props.prev()
    }
    return (
        <InformationBox>
            <Heading>
                Select Your Contact Number
            </Heading>
            <form>
            <FieldWrapper>
                <TextField
                    id="name"
                    type="text"
                    placeholder="Full Name "
                    label={"Name"}
                    name={"name"}
                    onChange={handleInputChange} value={inputs.name}
                />
            </FieldWrapper>

                <FieldWrapper>
                    <MaskedInput
                        mask={[
                            '+', '4', '4',
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                        ]}
                        className='form-control'
                        placeholder='Enter a phone number'
                        guide={false}
                        id='my-input-id'
                        name='number'
                        onChange={handleInputChange} value={inputs.number}
                        render={(ref: any, props: {}) => (
                            <StyledInput ref={ref} {...props} />
                        )}
                    />
                </FieldWrapper>

                <ButtonContainer>
                        <Button
                            width={'40%'}
                            onClick={handlePrev}>
                            Previous
                        </Button>
                        <Button
                            onClick={handleNext}
                            style={{float: 'right'}}
                            width={'40%'}
                        >
                            Next
                        </Button>
                </ButtonContainer>
            </form>
        </InformationBox>
    );
};

export default CreateOrUpdateContact;

const StyledInput = styled.input`
  width: 100%;
  height: 54px;
  border-radius: ${themeGet('radii.base', '6px')};
  font-family: ${themeGet('fonts.body', 'Lato, sans-serif')};
  border: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  font-size: 16px;
  line-height: 19px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  padding: 0 18px;
  box-sizing: border-box;
  transition: border-color 0.25s ease;

  &:hover,
  &:focus {
    outline: 0;
  }

  &:focus {
    border-color: ${themeGet('colors.primary.regular', '#009e7f')};
  }

  &::placeholder {
    color: ${themeGet('colors.text.regular', '#77798C')};
  }
`;

const StyledError = styled.div`
  color: red;
  padding-bottom: 10px;
  margin-top: -5px;
`;
