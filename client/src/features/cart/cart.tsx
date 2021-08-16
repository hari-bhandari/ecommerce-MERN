import React, {useContext} from 'react';
import Link from 'next/link';
import {
    CartPopupBody,
    CheckoutButton,
    CheckoutButtonWrapper,
    CloseButton,
    ItemWrapper,
    NoProductImg,
    NoProductMsg,
    PopupHeader,
    PopupItemCount,
    PriceBox,
    PromoCode,
    Title,
} from './cart.style';
import cartContext from "@/context/cart/cartContext";
import {CloseIcon} from 'assets/icons/CloseIcon';
import {ShoppingBagLarge} from 'assets/icons/ShoppingBagLarge';
import {NoCartBag} from 'assets/icons/NoCartBag';
import {calculateTotalPrice} from "../../utils/cartUtils";
import {CartItem} from '@/components/cart/item/cart-item';
import {Scrollbar} from "@/components/Scrollbar";

type CartPropsType = {
    style?: any;
    className?: string;
    scrollbarHeight?: string;
    isOpen?: boolean;
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
                    <ShoppingBagLarge width='19px' height='24px'/>
                    <span>
            {cart.length}
                        &nbsp;
                        items
          </span>
                </PopupItemCount>

                <CloseButton onClick={onCloseBtnClick}>
                    <CloseIcon />
                </CloseButton>
            </PopupHeader>

            <ItemWrapper className='items-wrapper'>
                <Scrollbar style={{height: '240px'}}>
                    {cart.length > 0 ? (
                        cart.map((item: any) => (
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
                                <NoCartBag/>
                            </NoProductImg>
                            <NoProductMsg>
                                No products found
                            </NoProductMsg>
                        </>
                    )}
                </Scrollbar>
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
