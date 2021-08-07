import React, {useContext, useState} from 'react';
import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Cart from './cart';
import CartPopupButton, {
  BoxedCartButton,
} from '@/components/cart/popup/cart-popup-button';
import { CartSlidePopup } from './cart.style';
import {useSelector} from "react-redux";
import {calculateTotalPrice} from "../../utils/cartUtils";
import {OpenCartModal} from "@/OpenModalFunctions";
import cartContext from "@/context/cart/cartContext";
const CartPopupStyle = createGlobalStyle`
  .cartPopup {
    top: auto !important;
    left: auto !important;
    bottom: 50px !important;
    right: 50px !important;
    box-shadow: 3px 3px 5px 6px #23ff00;;
    transform-origin: bottom right;


    @media (max-width: 580px) {
      max-width: none !important;
      width: 100% !important;
      bottom: 0 !important;
      left: 0 !important;
      background: ${themeGet('colors.white', '#ffffff')};
      overflow: initial !important;
      transform-origin: bottom center;
    }
  }
`;
type CartProps = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const CartPopUp: React.FC<CartProps> = ({
                                          deviceType: { mobile, tablet, desktop },
                                        }) => {
  const [isOpen,setIsOpen]=useState(false);
  const cartContexts=useContext(cartContext)
  const {cart}=cartContexts;

  const {currency:{symbol}} = useSelector((state:any) => state.shopReducer);

  const handleModal = () => {
    OpenCartModal()
  };

  let cartSliderClass = isOpen ? 'cartPopupFixed' : '';

  return (
      <>
        {mobile ? (
            <>
              <CartPopupStyle />
              <CartPopupButton
                  className='product-cart'
                  itemCount={cart.length}
                  itemPostfix={
                    cart.length > 1 ? (
                        "items"
                    ) : (
                        "item"
                    )
                  }
                  price={calculateTotalPrice(cart)}
                  pricePrefix={symbol}
                  onClick={handleModal}
              />
            </>
        ) : (
            <>
              <CartSlidePopup className={cartSliderClass}>
                {isOpen && (
                    <Cart onCloseBtnClick={()=>{setIsOpen(false)}} scrollbarHeight='100vh' />
                )}
              </CartSlidePopup>

              <BoxedCartButton
                  className='product-cart'
                  itemCount={cart.length}
                  itemPostfix={
                    cart.length > 1 ? (
                        'items'                    ) : (
                        "item"
                    )
                  }
                  price={calculateTotalPrice(cart)}
                  pricePrefix={symbol}
                  onClick={()=>{setIsOpen(true)}}
              />
            </>
        )}
      </>
  );
};

export default CartPopUp;
