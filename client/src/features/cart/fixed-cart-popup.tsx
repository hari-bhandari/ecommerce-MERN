import React, {useContext} from 'react';
import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { openModal, closeModal } from '@haribhandari/react-popup-modal';
import FixedCart from './fixed-cart';
import CartPopupButton from '../../components/cart/popup/cart-popup-button';
import shopContext from "@/context/shop/shopContext";

const CartPopupStyle = createGlobalStyle`
  .cartPopup{
    top: auto !important;
    left: auto !important;
    bottom: 50px !important;
    right: 50px !important;
    box-shadow: ${themeGet('shadows.big', '0 21px 36px rgba(0, 0, 0, 0.16)')};
    transform-origin: bottom right;

    @media (max-width: 767px) {
      max-width: none!important;
      width: 100% !important;
      bottom: 0 !important;
      left: 0!important;
      background: ${themeGet('colors.white', '#ffffff')};
      overflow: initial !important;
      transform-origin: bottom center;
    }
  }

.fixedCartPopup{
  @media (min-width: 991px) {
    display: none;
  }
}
`;

type CartProps = {
  onCheckout?: (e: any) => void;
};

const FixedCartPopup: React.FC<CartProps> = ({ onCheckout }) => {
  const { isOpen, cartItemsCount, toggleCart, calculatePrice } = {isOpen:true,cartItemsCount:10,toggleCart:()=>{},calculatePrice:10}
  const shop=useContext(shopContext)
  const {currency:{symbol}}=shop

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
      component: FixedCart,
      closeComponent: () => <div />,
      componentProps: {
        onCloseBtnClick: closeModal,
        scrollbarHeight: 370,
        onCheckout: onCheckout,
      },
    });
  };

  return (
    <>
      <CartPopupStyle />
      <CartPopupButton
        className='fixedCartPopup'
        itemCount={cartItemsCount}
        itemPostfix={
          cartItemsCount > 1 ? (
'items'          ) : (
            'item'
          )
        }
        price={calculatePrice}
        pricePrefix={symbol}
        onClick={handleModal}
      />
    </>
  );
};

export default FixedCartPopup;
