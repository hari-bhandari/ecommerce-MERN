import React from 'react';
import {
    CheckoutSubmit,
    Heading,
    InformationBox, TermConditionText
} from "@/features/checkouts/checkout.style";

import {Button} from "@/components/Others/button/button";

import Link from "next/link";
import { MultiStepForm, Step } from 'react-multi-form'
import styled from "styled-components";
import UpdateAddress from "@/features/checkouts/address-card";
import CreateOrUpdateContact from "@/features/checkouts/contact-card";
import CreditCardComponent from "@/features/checkouts/CreditCardComponent";
import Loader from "@/components/Others/loader/loader";
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
    const DeliveryAddress = () => <InformationBox>
        <Heading>
            Delivery Address
        </Heading>
                <UpdateAddress next={next} prev={prev}/>
    </InformationBox>

    const BillingInfo = () => <InformationBox>
        <Heading>
            Select Your Contact Number
        </Heading>
        <CreateOrUpdateContact next={next} prev={prev}/>
    </InformationBox>
    const PaymentInfo = () => <InformationBox className='paymentBox' style={{paddingBottom: 30}}>
        <Heading>
            Select Payment Option
        </Heading>
        <CreditCardComponent/>
        <TermConditionText>
            By making this purchase you agree to our
            <Link href='#'>
                terms and conditions.
            </Link>
        </TermConditionText>

        {/* CheckoutSubmit */}
        <CheckoutSubmit>
             <Button
                  // onClick={handleSubmit}
                  type='button'
                  // disabled={!isValid}
                  title='Proceed to Checkout'
                  intlButtonId='proceesCheckout'
                  loader={<Loader />}
                  isLoading={false}
                />

            <Button
                type='button'
                // onClick={handleSubmit}
                // disabled={!isValid}
                // size='big'
                // loading={loading}
                // style={{ width: '100%' }}
            >
                Proceed to Checkout
            </Button>
        </CheckoutSubmit>
    </InformationBox>


    return (
        <Container>
            <MultiStepForm activeStep={active}>
                <Step label={'Delivery Address'}>
                    <DeliveryAddress />
                </Step>

                <Step label={'Billing Info'}>
                    <BillingInfo />
                </Step >
                <Step label={'Payment Info'}>
                    <PaymentInfo/>
                </Step>
            </MultiStepForm>
            <ButtonContainer>
            {active !== 1 && (
                <Button
                    width={'40%'}

                    onClick={(e) => {
                    e.preventDefault();
                    setActive(active - 1)
                }
                }>
                    Previous
                </Button>
            )}
            {active !== 3 && (
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        setActive(active + 1)
                    }}
                    style={{float: 'right'}}
                    width={'40%'}
                >
                    Next
                </Button>
            )}
            </ButtonContainer>
    </Container>
    )
}

export default MultiStepFormComponent;