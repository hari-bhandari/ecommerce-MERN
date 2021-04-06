import React, { useState } from 'react';
import Link from 'next/link';
import {
  CartPopupBody,
  PopupHeader,
  PopupItemCount,
  CloseButton,
  PromoCode,
  CheckoutButtonWrapper,
  CheckoutButton,
  Title,
  PriceBox,
  NoProductMsg,
  NoProductImg,
  ItemWrapper,
  CouponBoxWrapper,
  CouponCode,
} from './cart.style';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { ShoppingBagLarge } from 'assets/icons/ShoppingBagLarge';
import { NoCartBag } from 'assets/icons/NoCartBag';

import { CartItem } from 'components/cart-item/cart-item';

type CartPropsType = {
  style?: any;
  className?: string;
  scrollbarHeight?: string;
  onCloseBtnClick?: (e: any) => void;
};

const Cart: React.FC<CartPropsType> = ({
  style,
  className,
  onCloseBtnClick,
  scrollbarHeight,
}) => {

  const [hasCoupon, setCoupon] = useState(false);

  return (
    <CartPopupBody className={className} style={style}>
      <PopupHeader>
        <PopupItemCount>
          <ShoppingBagLarge width='19px' height='24px' />
          <span>
            {1}
            &nbsp;
            items
          </span>
        </PopupItemCount>

        <CloseButton onClick={onCloseBtnClick}>
          <CloseIcon />
        </CloseButton>
      </PopupHeader>

        <ItemWrapper className='items-wrapper'>
          {/*{!!cartItemsCount ? (*/}
          {/*  items.map((item) => (*/}
          {/*    <CartItem*/}
          {/*      key={`cartItem-${item.id}`}*/}
          {/*      onIncrement={() => addItem(item)}*/}
          {/*      onDecrement={() => removeItem(item)}*/}
          {/*      onRemove={() => removeItemFromCart(item)}*/}
          {/*      data={item}*/}
          {/*    />*/}
          {/*  ))*/}
          {/*) : (*/}
          {/*  <>*/}
          {/*    <NoProductImg>*/}
          {/*      <NoCartBag />*/}
          {/*    </NoProductImg>*/}
          {/*    <NoProductMsg>*/}
          {/*      <FormattedMessage*/}
          {/*        id='noProductFound'*/}
          {/*        defaultMessage='No products found'*/}
          {/*      />*/}
          {/*    </NoProductMsg>*/}
          {/*  </>*/}
          {/*)}*/}
        </ItemWrapper>

      <CheckoutButtonWrapper>
        <PromoCode>
          {1 ? (
            <>
              {!hasCoupon ? (
                <button onClick={() => setCoupon((prev) => !prev)}>
                  Have a special code?
                </button>
              ) : (
                <CouponBoxWrapper>
                  {/*<Coupon*/}
                  {/*  disabled={!items.length}*/}
                  {/*  style={{*/}
                  {/*    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.06)',*/}
                  {/*  }}*/}
                  {/*/>*/}
                </CouponBoxWrapper>
              )}
            </>
          ) : (
            <CouponCode>
              Coupon Applied
              <span>Coupon</span>
            </CouponCode>
          )}
        </PromoCode>

        {true ? (
          <Link href='/checkout'>
            <CheckoutButton onClick={onCloseBtnClick}>
              <>
                <Title>
                  Checkout
                </Title>
                <PriceBox>
                  {/*{CURRENCY}*/}
                  {/*{calculatePrice()}*/}
                </PriceBox>
              </>
            </CheckoutButton>
          </Link>
        ) : (
          <CheckoutButton>
            <>
              <Title>
                Checkout
              </Title>
              <PriceBox>
                {/*{CURRENCY}*/}
                {/*{calculatePrice()}*/}
              </PriceBox>
            </>
          </CheckoutButton>
        )}
      </CheckoutButtonWrapper>
    </CartPopupBody>
  );
};

export default Cart;
