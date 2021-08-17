import React from 'react';
import {MultiStepForm, Step} from 'react-multi-form'
import styled from "styled-components";
import Stripe from "@/features/checkout/StripePaymentForm";
import Address from "@/features/checkout/Address";
import BillingInfo from "@/features/checkout/BillingInfo";

const ButtonContainer=styled.div`
  display: flex;
  justify-content: space-between;
`
const Container=styled.div`
    //div:first-child{
    //  margin-left: 20px;
    //  margin-right: 20px;
    //}


`

const MultiStepFormComponent = ({price}) => {
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
                    <Stripe item={{buttonText:'add-address-modal stripe-modal',price:price}}/>
                </Step>
            </MultiStepForm>
            <ButtonContainer>

            </ButtonContainer>
    </Container>
    )
}

export default MultiStepFormComponent;