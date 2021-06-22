import React, { useContext, useState, useEffect } from 'react';
import Router from 'next/router';
import {Button} from "@/components/Others/button/button";
import RadioCard from '@/components/Others/radio-card/radio-card';
import RadioGroup from '@/components/Others/radio-group/radio-group';
import PaymentGroup from '@/components/cart/payment-group/payment-group';
// import UpdateAddress from 'components/address-card/address-card';
// import UpdateContact from 'components/contact-card/contact-card';
// import StripePaymentForm from 'features/payment/stripe-form';

import { openModal } from '@redq/reuse-modal';
import CheckoutWrapper, {
  CheckoutContainer,
  OrderSummary,
  OrderSummaryItem,
  OrderLabel,
  OrderAmount,
  DeliverySchedule,
  Heading,
  DeliveryAddress,
  ButtonGroup,
  Contact,
  PaymentOption,
  CheckoutSubmit,
  CouponBoxWrapper,
  ErrorMsg,
} from './checkout-one.style';

import CouponBox, { CouponDisplay } from 'components/cart/coupon-box/coupon-box';
import {useDispatch, useSelector} from "react-redux";

// The type of props Checkout Form receives
interface MyFormProps {
  token: string;
  deviceType: any;
}
import {decreaseQuantityCart,increaseQuantityCart,removeFromCart,removeAllFromCart} from "@/redux/actions/cartActions";
import {calculateTotalPrice} from "@/utils/cartUtils";

const Checkout= () => {
  const dispatch = useDispatch()
  const cartState = useSelector((state: any) => state.cartReducer);
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (isValid) {
      dispatch(removeAllFromCart())
      Router.push('/order-received');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (
        true
    ) {
      setIsValid(true);
    }
  }, [cartState]);

  // Add or edit modal
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

  const handleEditDelete = async (item: any, type: string, name: string) => {
    if (type === 'edit') {
      // const modalComponent = name === 'address' ? UpdateAddress : UpdateContact;
      const modalComponent = null;
      handleModal(modalComponent, item);
    } else {
      //   switch (name) {
      //     case 'payment':
      //       dispatch({ type: 'DELETE_CARD', payload: item.id });
      //
      //       return await deletePaymentCardMutation({
      //         variables: { cardId: JSON.stringify(item.id) },
      //       });
      //     case 'contact':
      //       dispatch({ type: 'DELETE_CONTACT', payload: item.id });
      //
      //       return await deleteContactMutation({
      //         variables: { contactId: JSON.stringify(item.id) },
      //       });
      //     case 'address':
      //       dispatch({ type: 'DELETE_ADDRESS', payload: item.id });
      //
      //       return await deleteAddressMutation({
      //         variables: { addressId: JSON.stringify(item.id) },
      //       });
      //     default:
      //       return false;
      //   }
      // }
    }
    ;

    // const handleApplyCoupon = async () => {
    //   const { data }: any = await appliedCoupon({
    //     variables: { code: couponCode },
    //   });
    //   if (data.applyCoupon && data.applyCoupon.discountInPercent) {
    //     applyCoupon(data.applyCoupon);
    //     setCouponCode('');
    //   } else {
    //     setError('Invalid Coupon');
    //   }
    // };
    // const handleOnUpdate: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    //   setCouponCode(e.currentTarget.value);
    // };

    return (
        <form>
          <CheckoutWrapper>
            <CheckoutContainer>
              <OrderSummary>
                <OrderSummaryItem style={{marginBottom: 15}}>
                  <OrderLabel>
                    Subtotal ({cartState.length}{' '}
                    items)
                  </OrderLabel>
                  <OrderAmount>${calculateTotalPrice(cartState)}</OrderAmount>
                </OrderSummaryItem>

                <OrderSummaryItem style={{marginBottom: 30}}>
                  <OrderLabel>
                    Shipping Fee
                  </OrderLabel>
                  <OrderAmount>$0.00</OrderAmount>
                </OrderSummaryItem>

                <OrderSummaryItem
                    style={{marginBottom: 30}}
                    className="voucherWrapper"
                >
                  <OrderLabel>
                    Voucher
                  </OrderLabel>
                  {/*{coupon ? (*/}
                  {/*  <CouponDisplay*/}
                  {/*    code={coupon.code}*/}
                  {/*    sign="-"*/}
                  {/*    currency="$"*/}
                  {/*    price={calculateDiscount()}*/}
                  {/*    onClick={(e) => {*/}
                  {/*      e.preventDefault();*/}
                  {/*      removeCoupon();*/}
                  {/*    }}*/}
                  {/*  />*/}
                  {/*) : (*/}
                  {/*  <>*/}
                  {/*    <CouponBoxWrapper>*/}
                  {/*      <CouponBox*/}
                  {/*        onClick={handleApplyCoupon}*/}
                  {/*        value={couponCode}*/}
                  {/*        onChange={handleOnUpdate}*/}
                  {/*        style={{ maxWidth: 350, height: 50 }}*/}
                  {/*      />*/}
                  {/*      {couponError && <div>Coupon</div>}*/}
                  {/*    </CouponBoxWrapper>*/}
                  {/*  </>*/}
                  {/*)}*/}
                </OrderSummaryItem>

                <OrderSummaryItem>
                  <OrderLabel>
                    Total
                  </OrderLabel>
                  <OrderAmount>${calculateTotalPrice(cartState)}</OrderAmount>
                </OrderSummaryItem>
              </OrderSummary>
              {/* DeliverySchedule */}
              <DeliverySchedule>
                <Heading>
                  Select Your Delivery Schedule
                </Heading>
                {/*<RadioGroup*/}
                {/*  items={schedules}*/}
                {/*  component={(item: any) => (*/}
                {/*    <RadioCard*/}
                {/*      id={item.id}*/}
                {/*      key={item.id}*/}
                {/*      title={item.title}*/}
                {/*      content={item.time_slot}*/}
                {/*      name="schedule"*/}
                {/*      checked={item.type === 'primary'}*/}
                {/*      withActionButtons={false}*/}
                {/*      onChange={() =>*/}
                {/*        dispatch({*/}
                {/*          type: 'SET_PRIMARY_SCHEDULE',*/}
                {/*          payload: item.id.toString(),*/}
                {/*        })*/}
                {/*      }*/}
                {/*    />*/}
                {/*  )}*/}
                {/*/>*/}
              </DeliverySchedule>
              {/* DeliveryAddress */}
              <DeliveryAddress>
                <Heading>
                  Select Your Delivery Address
                </Heading>
                <ButtonGroup>
                  {/*<RadioGroup*/}
                  {/*  items={address}*/}
                  {/*  component={(item: any) => (*/}
                  {/*      */}
                  {/*    <RadioCard*/}
                  {/*      id={item.id}*/}
                  {/*      key={item.id}*/}
                  {/*      title={item.name}*/}
                  {/*      content={item.info}*/}
                  {/*      name="address"*/}
                  {/*      checked={item.type === 'primary'}*/}
                  {/*      onChange={() =>*/}
                  {/*        dispatch({*/}
                  {/*          type: 'SET_PRIMARY_ADDRESS',*/}
                  {/*          payload: item.id.toString(),*/}
                  {/*        })*/}
                  {/*      }*/}
                  {/*      onEdit={() => handleEditDelete(item, 'edit', 'address')}*/}
                  {/*      onDelete={() => handleEditDelete(item, 'delete', 'address')}*/}
                  {/*    />*/}
                  {/*  )}*/}
                  {/*  secondaryComponent={*/}
                  {/*    // <Button*/}
                  {/*    //   title="Add Address"*/}
                  {/*    //   iconPosition="right"*/}
                  {/*    //   colors="primary"*/}
                  {/*    //   size="small"*/}
                  {/*    //   variant="outlined"*/}
                  {/*    //   type="button"*/}
                  {/*    //   intlButtonId="addAddressBtn"*/}
                  {/*    //   onClick={() =>*/}
                  {/*    //     handleModal(UpdateAddress, 'add-address-modal')*/}
                  {/*    //   }*/}
                  {/*    // />*/}

                  {/*    <Button*/}
                  {/*      size="big"*/}
                  {/*      variant="outlined"*/}
                  {/*      type="button"*/}
                  {/*      className="add-button"*/}
                  {/*      onClick={() =>*/}
                  {/*        handleModal(()=>{}, 'add-address-modal')*/}
                  {/*      }*/}
                  {/*      style={{ borderStyle: 'dashed' }}*/}
                  {/*    >*/}
                  {/*      Add Address*/}
                  {/*    </Button>*/}
                  {/*  }*/}
                  {/*/>*/}
                </ButtonGroup>
              </DeliveryAddress>
              {/* Contact number */}
              <Contact>
                <Heading>
                  Select Your Contact Number
                </Heading>
                <ButtonGroup>
                  {/*<RadioGroup*/}
                  {/*  items={contact}*/}
                  {/*  component={(item: any) => (*/}
                  {/*    <RadioCard*/}
                  {/*      id={item.id}*/}
                  {/*      key={item.id}*/}
                  {/*      title={item.type}*/}
                  {/*      content={item.number}*/}
                  {/*      checked={item.type === 'primary'}*/}
                  {/*      onChange={() =>*/}
                  {/*        dispatch({*/}
                  {/*          type: 'SET_PRIMARY_CONTACT',*/}
                  {/*          payload: item.id.toString(),*/}
                  {/*        })*/}
                  {/*      }*/}
                  {/*      name="contact"*/}
                  {/*      onEdit={() => handleEditDelete(item, 'edit', 'contact')}*/}
                  {/*      onDelete={() => handleEditDelete(item, 'delete', 'contact')}*/}
                  {/*    />*/}
                  {/*  )}*/}
                  {/*  secondaryComponent={*/}
                  {/*    // <Button*/}
                  {/*    //   title='Add Contact'*/}
                  {/*    //   iconPosition='right'*/}
                  {/*    //   colors='primary'*/}
                  {/*    //   size='small'*/}
                  {/*    //   variant='outlined'*/}
                  {/*    //   type='button'*/}
                  {/*    //   intlButtonId='addContactBtn'*/}
                  {/*    //   onClick={() =>*/}
                  {/*    //     handleModal(UpdateContact, 'add-contact-modal')*/}
                  {/*    //   }*/}
                  {/*    // />*/}

                  {/*    <Button*/}
                  {/*      size="big"*/}
                  {/*      variant="outlined"*/}
                  {/*      type="button"*/}
                  {/*      className="add-button"*/}
                  {/*      // onClick={() =>*/}
                  {/*      //   handleModal(UpdateContact, 'add-contact-modal')*/}
                  {/*      // }*/}
                  {/*      style={{ borderStyle: 'dashed' }}*/}
                  {/*    >*/}
                  {/*      Add Contact*/}
                  {/*    </Button>*/}
                  {/*  }*/}
                  {/*/>*/}
                </ButtonGroup>
              </Contact>
              {/* PaymentOption */}
              {/*<PaymentOption>*/}
              {/*  <Heading>*/}
              {/*    Select Payment Option*/}
              {/*  </Heading>*/}
              {/*  <PaymentGroup*/}
              {/*    name="payment"*/}
              {/*    deviceType={deviceType}*/}
              {/*    items={card}*/}
              {/*    onEditDeleteField={(item: any, type: string) =>*/}
              {/*      handleEditDelete(item, type, 'payment')*/}
              {/*    }*/}
              {/*    onChange={(item: any) =>*/}
              {/*      dispatch({*/}
              {/*        type: 'SET_PRIMARY_CARD',*/}
              {/*        payload: item.id.toString(),*/}
              {/*      })*/}
              {/*    }*/}
              {/*    handleAddNewCard={() => {*/}
              {/*      handleModal(*/}
              {/*        StripePaymentForm,*/}
              {/*        { totalPrice: calculatePrice() },*/}
              {/*        'add-address-modal stripe-modal'*/}
              {/*      );*/}
              {/*    }}*/}
              {/*  />*/}
              {/*</PaymentOption>*/}
              {/* CheckoutSubmit */}
              <CheckoutSubmit>
                {/* <Button
              onClick={handleSubmit}
              type='button'
              disabled={!isValid}
              title='Proceed to Checkout'
              // size='small'
              intlButtonId='proceesCheckout'
              loader={<Loader />}
              isLoading={loading}
            /> */}

                <Button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!isValid}
                    size="big"
                    loading={loading}
                    width="100%"
                >
                  Proceed to Checkout
                </Button>
              </CheckoutSubmit>
            </CheckoutContainer>
          </CheckoutWrapper>
        </form>
    );
  };
}

export default Checkout;
