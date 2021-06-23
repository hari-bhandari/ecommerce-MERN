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
import UpdateAddress from "@/components/address-card/address-card";
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
        {/*<ButtonGroup>*/}
        {/*    <RadioGroup*/}
        {/*        items={contact}*/}
        {/*        component={(item: any) => (*/}
        {/*            <RadioCard*/}
        {/*                id={item.id}*/}
        {/*                key={item.id}*/}
        {/*                title={item.type}*/}
        {/*                content={item.number}*/}
        {/*                checked={item.type === 'primary'}*/}
        {/*                onChange={() =>*/}
        {/*                    dispatch({*/}
        {/*                        type: 'SET_PRIMARY_CONTACT',*/}
        {/*                        payload: item.id.toString(),*/}
        {/*                    })*/}
        {/*                }*/}
        {/*                name='contact'*/}
        {/*                onEdit={() => handleEditDelete(item, 'edit', 'contact')}*/}
        {/*                onDelete={() =>*/}
        {/*                    handleEditDelete(item, 'delete', 'contact')*/}
        {/*                }*/}
        {/*            />*/}
        {/*        )}*/}
        {/*        secondaryComponent={*/}
        {/*            <Button*/}
        {/*                className='addButton'*/}
        {/*                variant='text'*/}
        {/*                type='button'*/}
        {/*                onClick={() =>*/}
        {/*                    handleModal(UpdateContact, 'add-contact-modal')*/}
        {/*                }*/}
        {/*            >*/}
        {/*                <IconWrapper>*/}
        {/*                    <Plus width='10px' />*/}
        {/*                </IconWrapper>*/}
        {/*                <FormattedMessage*/}
        {/*                    id='addContactBtn'*/}
        {/*                    defaultMessage='Add Contact'*/}
        {/*                />*/}
        {/*            </Button>*/}
        {/*        }*/}
        {/*    />*/}
        {/*</ButtonGroup>*/}
    </InformationBox>
    const PaymentInfo = () => <InformationBox className='paymentBox' style={{paddingBottom: 30}}>
        <Heading>
            Select Payment Option
        </Heading>
        {/*<PaymentGroup*/}
        {/*    name='payment'*/}
        {/*    deviceType={deviceType}*/}
        {/*    items={card}*/}
        {/*    onEditDeleteField={(item: any, type: string) =>*/}
        {/*        handleEditDelete(item, type, 'payment')*/}
        {/*    }*/}
        {/*    onChange={(item: any) =>*/}
        {/*        dispatch({*/}
        {/*            type: 'SET_PRIMARY_CARD',*/}
        {/*            payload: item.id.toString(),*/}
        {/*        })*/}
        {/*    }*/}
        {/*    handleAddNewCard={() => {*/}
        {/*        handleModal(*/}
        {/*            StripePaymentForm,*/}
        {/*            { totalPrice: calculatePrice() },*/}
        {/*            'add-address-modal stripe-modal'*/}
        {/*        );*/}
        {/*    }}*/}
        {/*/>*/}

        {/*Coupon start*/}
        {/*{coupon ? (*/}
        {/*    <CouponBoxWrapper>*/}
        {/*        <CouponCode>*/}
        {/*            <FormattedMessage id='couponApplied' />*/}
        {/*            <span>{coupon.code}</span>*/}

        {/*            <RemoveCoupon*/}
        {/*                onClick={(e) => {*/}
        {/*                    e.preventDefault();*/}
        {/*                    removeCoupon();*/}
        {/*                    setHasCoupon(false);*/}
        {/*                }}*/}
        {/*            >*/}
        {/*                <FormattedMessage id='removeCoupon' />*/}
        {/*            </RemoveCoupon>*/}
        {/*        </CouponCode>*/}
        {/*    </CouponBoxWrapper>*/}
        {/*) : (*/}
        {/*    <CouponBoxWrapper>*/}
        {/*        {!hasCoupon ? (*/}
        {/*            <HaveCoupon onClick={() => setHasCoupon((prev) => !prev)}>*/}
        {/*                <FormattedMessage*/}
        {/*                    id='specialCode'*/}
        {/*                    defaultMessage='Have a special code?'*/}
        {/*                />*/}
        {/*            </HaveCoupon>*/}
        {/*        ) : (*/}
        {/*            <>*/}
        {/*                <CouponInputBox>*/}
        {/*                    <CouponBox*/}
        {/*                        onClick={handleApplyCoupon}*/}
        {/*                        value={couponCode}*/}
        {/*                        onChange={handleOnUpdate}*/}
        {/*                        className='normalCoupon'*/}
        {/*                    />*/}
        {/*                </CouponInputBox>*/}

        {/*                {couponError && (*/}
        {/*                    <ErrorMsg>*/}
        {/*                        <FormattedMessage*/}
        {/*                            id='couponError'*/}
        {/*                            defaultMessage={couponError}*/}
        {/*                        />*/}
        {/*                    </ErrorMsg>*/}
        {/*                )}*/}
        {/*            </>*/}
        {/*        )}*/}
        {/*    </CouponBoxWrapper>*/}
        {/*)}*/}

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