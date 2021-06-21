import React, {useState} from 'react';
import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { openModal, closeModal } from '@redq/reuse-modal';
import Cart from './cart';
import CartPopupButton, {
  BoxedCartButton,
} from '@/components/cart/popup/cart-popup-button';
import { CartSlidePopup } from './cart.style';
import {useSelector} from "react-redux";
import {calculateTotalPrice} from "../../utils/cartUtils";
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
  const cartState = useSelector((state:any) => state.cartReducer);

  const handleModal = () => {
    openModal({
      show: true,
      config: {
        className: 'cartPopup',
        width: 'auto',
        height: 'auto',
        enableResizing: false,
        disableDragging: true,
        transition: {
          tension: 360,
          friction: 40,
        },
      },
      closeOnClickOutside: true,
      component: Cart,
      closeComponent: () => <div />,
      componentProps: { onCloseBtnClick: closeModal, scrollbarHeight: 330 },
    });
  };

  let cartSliderClass = isOpen ? 'cartPopupFixed' : '';

  return (
      <>
        {mobile ? (
            <>
              <CartPopupStyle />
              <CartPopupButton
                  className='product-cart'
                  itemCount={cartState.length}
                  itemPostfix={
                    cartState.length > 1 ? (
                        "items"
                    ) : (
                        "item"
                    )
                  }
                  price={calculateTotalPrice(cartState)}
                  pricePrefix='£'
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
                  itemCount={cartState.length}
                  itemPostfix={
                    cartState.length > 1 ? (
                        'items'                    ) : (
                        "item"
                    )
                  }
                  price={calculateTotalPrice(cartState)}
                  pricePrefix={"£"}
                  onClick={()=>{setIsOpen(true)}}
              />
            </>
        )}
      </>
  );
};

export default CartPopUp;
