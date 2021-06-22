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
import Link from "next/link";
import MultiStep from 'react-multistep'

const MultiStepFormComponent = () => {
    const DeliveryAddress = ()=><InformationBox>
        <Heading>
            Delivery Address
        </Heading>
        <ButtonGroup>
            {/*<RadioGroup*/}
            {/*    items={address}*/}
            {/*    component={(item: any) => (*/}
            {/*        <RadioCard*/}
            {/*            id={item.id}*/}
            {/*            key={item.id}*/}
            {/*            title={item.name}*/}
            {/*            content={item.info}*/}
            {/*            name='address'*/}
            {/*            checked={item.type === 'primary'}*/}
            {/*            onChange={() =>*/}
            {/*                dispatch({*/}
            {/*                    type: 'SET_PRIMARY_ADDRESS',*/}
            {/*                    payload: item.id.toString(),*/}
            {/*                })*/}
            {/*            }*/}
            {/*            onEdit={() => handleEditDelete(item, 'edit', 'address')}*/}
            {/*            onDelete={() =>*/}
            {/*                handleEditDelete(item, 'delete', 'address')*/}
            {/*            }*/}
            {/*        />*/}
            {/*    )}*/}
            {/*    secondaryComponent={*/}
            {/*        <Button*/}
            {/*            className='addButton'*/}
            {/*            variant='text'*/}
            {/*            type='button'*/}
            {/*            onClick={() =>*/}
            {/*                handleModal(UpdateAddress, 'add-address-modal')*/}
            {/*            }*/}
            {/*        >*/}
            {/*            <IconWrapper>*/}
            {/*                <Plus width='10px' />*/}
            {/*            </IconWrapper>*/}
            {/*            <FormattedMessage id='addNew' defaultMessage='Add New' />*/}
            {/*        </Button>*/}
            {/*    }*/}
            {/*/>*/}
        </ButtonGroup>
    </InformationBox>

    const DeliveryScheduleCard =()=> <InformationBox>
        <DeliverySchedule>
            <Heading>
                Select Your Delivery Schedule
            </Heading>
            {/*<RadioGroup*/}
            {/*    items={schedules}*/}
            {/*    component={(item: any) => (*/}
            {/*        <RadioCard*/}
            {/*            id={item.id}*/}
            {/*            key={item.id}*/}
            {/*            title={item.title}*/}
            {/*            content={item.time_slot}*/}
            {/*            name='schedule'*/}
            {/*            checked={item.type === 'primary'}*/}
            {/*            withActionButtons={false}*/}
            {/*            onChange={() =>*/}
            {/*                dispatch({*/}
            {/*                    type: 'SET_PRIMARY_SCHEDULE',*/}
            {/*                    payload: item.id.toString(),*/}
            {/*                })*/}
            {/*            }*/}
            {/*        />*/}
            {/*    )}*/}
            {/*/>*/}
        </DeliverySchedule>
    </InformationBox>
    const BillingInfo = ()=><InformationBox>
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
    const PaymentInfo = ()=><InformationBox className='paymentBox' style={{paddingBottom: 30}}>
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
    const steps = [
        { component: <DeliveryAddress /> },
        { component: <DeliveryScheduleCard /> },
        { component: <BillingInfo /> },
        { component: <PaymentInfo /> }
    ]

    const prevStyle = {'background': '#33c3f0', 'border-width': '2px'}
    const nextStyle = {'background': '#33c3f0',  'border-width': '2px'}

    return (
        <>
            <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle}/>
        </>
    );
};

export default MultiStepFormComponent;