import React, {useContext, useState} from 'react';
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
  NoProductMsg,
} from './cart.style';
import cartContext from "@/context/cart/cartContext";
import { CloseIcon } from 'assets/icons/CloseIcon';
import { ShoppingBagLarge } from 'assets/icons/ShoppingBagLarge';
import { NoCartBag } from 'assets/icons/NoCartBag';
import {calculateTotalPrice} from "../../utils/cartUtils";
import { CartItem } from '@/components/cart/item/cart-item';

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
}) => {
  const cartContexts=useContext(cartContext)
  const {cart,decreaseQuantityCart,increaseQuantityCart,removeFromCart,removeAllFromCart}=cartContexts;

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
          {cart.length>0 ? (
            cart.map((item) => (
              <CartItem
                key={`cartItem-${item.id}`}
                onIncrement={() => {
                  increaseQuantityCart(item.cartId)
                }}
                onDecrement={() => {
                  decreaseQuantityCart(item.cartId)
                }}
                onRemove={() => {
                  removeFromCart(item.cartId)
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

                <button onClick={() => removeAllFromCart()}>
                  Remove All
                </button>
        </PromoCode>

        {(
            <Link href='/checkout'>
              <CheckoutButton onClick={onCloseBtnClick}>
                <>
                  <Title>
                    Checkout
                  </Title>
                  <PriceBox>
                    {/*{CURRENCY}*/}
                    {calculateTotalPrice(cart)}
                  </PriceBox>
                </>
              </CheckoutButton>
            </Link>
        )}
      </CheckoutButtonWrapper>
    </CartPopupBody>
  );
};

export default Cart;
