import React, {useState} from 'react';
import Cards from 'react-credit-cards';
import "react-credit-cards/es/styles-compiled.css";
import styled from "styled-components";
import {FieldWrapper} from "@/features/checkouts/Billing.style";
import TextField from "@/components/Others/forms/text-field";
const PaymentContainer=styled.div`
    display: flex;
    flex-direction: column;
    
`
import MaskedInput from 'react-text-mask';
import {StyledInput} from "@/components/Layout/search-box/search-box.style";
import {DoubleContainer} from "@/features/checkouts/Address.style";
import {Button} from "@/components/Others/button/button";
import {ButtonContainer} from "@/features/checkouts/BillingInfo";
import {Heading, InformationBox, TermConditionText} from "@/features/checkouts/checkout.style";
import Link from "next/link";

const CreditCardComponent = (props:any) => {
    const [focus,setFocus]=useState<"name" | "number" | "expiry" | "cvc">('number')
    const [creditCardInformation,setCreditCardInformation]=useState({
        cvc: '',
        expiry: '',
        name: '',
        number: '',
    })
    const onSubmit=(e)=>{
        e.preventDefault()

    }
    const onPrev=(e)=>{
        e.preventDefault()
        props.prev()
    }
    const handleInputFocus = (e) => {
        setFocus(e.target.name)
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCreditCardInformation({...creditCardInformation,[name]:value})
    }
    const {cvc,expiry,name,number}=creditCardInformation
    return (
        <InformationBox className='paymentBox' style={{paddingBottom: 30}}>
            <Heading>
                Select Payment Option
            </Heading>
        <PaymentContainer>
            <Cards
                cvc={cvc}
                expiry={expiry}
                focused={focus}
                name={name}
                number={number}
            />
            <form>

                <FieldWrapper>
                    <TextField
                        id="name"
                        type="text"
                        placeholder="Full Name "
                        label={"Name"}
                        name={"name"}
                        onFocus={handleInputFocus}
                        onChange={handleInputChange} value={name}
                    />
                </FieldWrapper>

                <FieldWrapper>
                    <label className='label' htmlFor={'my-input-id'}>
                        {"Credit Card Number"}
                    </label>
                    <MaskedInput
                        mask={[
                            /[1-9]/,
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
                        placeholder='Enter a Card Number'
                        guide={false}
                        id='my-input-id'
                        name='number'
                        onFocus={handleInputFocus}
                        onChange={handleInputChange} value={number}
                        render={(ref: any, props: {}) => (
                            <StyledInput ref={ref} {...props} />
                        )}
                    />
                </FieldWrapper>

                <DoubleContainer>
                    <FieldWrapper>
                        <label className='label' htmlFor={'my-input-id'}>
                            {"Expiry Date"}
                        </label>
                        <MaskedInput
                            mask={[
                                /\d/,
                                /\d/,
                                '-',
                                /\d/,
                                /\d/,
                            ]}
                            className='form-control'
                            placeholder='Enter a Card Number'
                            guide={true}
                            id='my-input-id'
                            name='expiry'
                            onFocus={handleInputFocus}

                            onChange={handleInputChange} value={expiry}
                            render={(ref: any, props: {}) => (
                                <StyledInput ref={ref} {...props} />
                            )}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <label className='label' htmlFor={'my-input-id'}>
                            {"CVC"}
                        </label>
                        <MaskedInput
                            mask={[
                                /\d/,
                                /\d/,
                                /\d/,
                                /\d/,
                            ]}
                            className='form-control'
                            placeholder='Enter your Card CVC'
                            guide={false}
                            id='my-input-id'
                            name='cvc'
                            onFocus={handleInputFocus}
                            onChange={handleInputChange} value={cvc}
                            render={(ref: any, props: {}) => (
                                <StyledInput ref={ref} {...props} />
                            )}
                        />
                    </FieldWrapper>
                </DoubleContainer>
            </form>
            <TermConditionText>
                By making this purchase you agree to our
                <Link href='#'>
                    terms and conditions.
                </Link>
            </TermConditionText>
            <ButtonContainer>
                <Button
                    width={'33%'}
                    onClick={onPrev}>
                    Previous
                </Button>
                <Button
                    onClick={onSubmit}
                    style={{float: 'right'}}
                    width={'65%'}
                >
                    Complete My purchase
                </Button>
            </ButtonContainer>
        </PaymentContainer>
        </InformationBox>

    );
};

export default CreditCardComponent;