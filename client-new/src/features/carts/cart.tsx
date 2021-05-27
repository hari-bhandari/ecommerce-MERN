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
  NoProductImg,
  ItemWrapper,
  CouponBoxWrapper,
  CouponCode, NoProductMsg,
} from './cart.style';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { ShoppingBagLarge } from 'assets/icons/ShoppingBagLarge';
import { NoCartBag } from 'assets/icons/NoCartBag';
import {calculateTotalPrice} from "../../utils/cartUtils";
import { CartItem } from 'components/cart-item/cart-item';
import {useSelector} from "react-redux";
import {decreaseQuantityCart,increaseQuantityCart,removeFromCart} from "@/redux/actions/cartActions";
import {useDispatch} from "react-redux";

type CartPropsType = {
  style?: any;
  className?: string;
  scrollbarHeight?: string;
  isOpen?:boolean;
  onCloseBtnClick?: (e: any) => void;
};

const Cart: React.FC<CartPropsType> = ({
  style,
  className,
  onCloseBtnClick,
  scrollbarHeight,
}) => {
  const dispatch=useDispatch()
  const cartState = useSelector((state:any) => state.cartReducer);
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
          {cartState.length>0 ? (
            cartState.map((item) => (
              <CartItem
                key={`cartItem-${item.id}`}
                onIncrement={() => {
                  dispatch(increaseQuantityCart(item.cartId))
                }}
                onDecrement={() => {
                  dispatch(decreaseQuantityCart(item.cartId))
                }}
                onRemove={() => {
                  dispatch(removeFromCart(item.cartId))
                }}
                data={item}
              />
            ))
          ) : (
            <>
              <NoProductImg>
                <NoCartBag />
              </NoProductImg>
              <NoProductMsg>
                No products found
              </NoProductMsg>
            </>
          )}
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
                  {calculateTotalPrice(cartState)}
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
                {calculateTotalPrice(cartState)}
              </PriceBox>
            </>
          </CheckoutButton>
        )}
      </CheckoutButtonWrapper>
    </CartPopupBody>
  );
};

export default Cart;
