import React from 'react';
import {
    ButtonGroup, CheckoutSubmit, CouponBoxWrapper, CouponCode, CouponInputBox,
    DeliverySchedule, ErrorMsg, HaveCoupon,
    Heading,
    IconWrapper,
    InformationBox, RemoveCoupon, TermConditionText
} from "@/features/checkouts/checkout-two.style";
import RadioGroup from "@/components/Others/radio-group/radio-group";
import RadioCard from "@/components/Others/radio-card/radio-card";
import {Button} from "@/components/Others/button/button";
import {Plus} from "@/assets/icons/PlusMinus";
import PaymentGroup from "@/components/cart/payment-group/payment-group";
import CouponBox from "@/components/cart/coupon-box/coupon-box";
import { openModal } from '@redq/reuse-modal';

import Link from "next/link";
import { MultiStepForm, Step } from 'react-multi-form'
import styled from "styled-components";
import UpdateAddress from "@/features/checkouts/address-card";
import CreateOrUpdateContact from "@/features/checkouts/contact-card";
const ButtonContainer=styled.div`
  display: flex;
  justify-content: space-between;
`
const Container=styled.div`
    margin: 0 10px 0 10px;
`
const MultiStepFormComponent = () => {
    const handleModal = (
        modalComponent: any,
        modalProps = {},
        className: string = 'add-address-modal'
    ) => {
        openModal({
            show: true,
            config: {
                width: 360,
                height: 'auto',
                enableResizing: false,
                disableDragging: true,
                className: className,
            },
            closeOnClickOutside: true,
            component: modalComponent,
            componentProps: {item: modalProps},
        });
    };

    const DeliveryAddress = () => <InformationBox>
        <Heading>
            Delivery Address
        </Heading>
                <UpdateAddress/>
    </InformationBox>

    const BillingInfo = () => <InformationBox>
        <Heading>
            Select Your Contact Number
        </Heading>
        <CreateOrUpdateContact/>
    </InformationBox>
    const PaymentInfo = () => <InformationBox className='paymentBox' style={{paddingBottom: 30}}>
        <Heading>
            Select Payment Option
        </Heading>


        <TermConditionText>
            By making this purchase you agree to our
            <Link href='#'>
                terms and conditions.
            </Link>
        </TermConditionText>

        {/* CheckoutSubmit */}
        <CheckoutSubmit>
            {/* <Button
                  onClick={handleSubmit}
                  type='button'
                  disabled={!isValid}
                  title='Proceed to Checkout'
                  intlButtonId='proceesCheckout'
                  loader={<Loader />}
                  isLoading={loading}
                /> */}

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

    const [active, setActive] = React.useState(1)

    return (
        <Container>
            <MultiStepForm activeStep={active}>
                <Step label={'Delivery Address'}>
                    <DeliveryAddress />
                </Step>

                <Step label={'Billing Info'}>
                    <BillingInfo/>
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