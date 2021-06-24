import React from 'react';
import {
    Heading,
    InformationBox, TermConditionText
} from "@/features/checkouts/checkout.style";

import {Button} from "@/components/Others/button/button";

import Link from "next/link";
import { MultiStepForm, Step } from 'react-multi-form'
import styled from "styled-components";
import UpdateAddress from "@/features/checkouts/Address";
import CreateOrUpdateContact from "@/features/checkouts/BillingInfo";
import CreditCardComponent from "@/features/checkouts/CreditCardComponent";
import Address from "@/features/checkouts/Address";
import BillingInfo from "@/features/checkouts/BillingInfo";
const ButtonContainer=styled.div`
  display: flex;
  justify-content: space-between;
`
const Container=styled.div`
    margin: 0 10px 0 10px;
`

const MultiStepFormComponent = () => {
    const [active, setActive] = React.useState(1)

    const next=()=>{
        setActive(active+1)
    }
    const prev=()=>{
        setActive(active-1)
    }




    return (
        <Container>
            <MultiStepForm activeStep={active}>
                <Step label={'Delivery Address'}>
                    <Address next={next} prev={prev}/>
                </Step>

                <Step label={'Billing Info'}>
                    <BillingInfo next={next} prev={prev} />
                </Step >
                <Step label={'Payment Info'}>
                    <CreditCardComponent next={next} prev={prev}/>
                </Step>
            </MultiStepForm>
            <ButtonContainer>

            </ButtonContainer>
    </Container>
    )
}

export default MultiStepFormComponent;