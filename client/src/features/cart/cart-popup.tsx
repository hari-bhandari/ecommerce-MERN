import React, {useContext, useState} from 'react';
import {createGlobalStyle} from 'styled-components';
import {themeGet} from '@styled-system/theme-get';
import Cart from './cart';
import CartPopupButton, {BoxedCartButton,} from '@/components/cart/popup/cart-popup-button';
import {CartSlidePopup} from './cart.style';
import {calculateTotalPrice} from "../../utils/cartUtils";
import cartContext from "@/context/cart/cartContext";
import shopContext from "@/context/shop/shopContext";
import {Modal} from "react-responsive-modal";

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
                                            deviceType: {mobile, tablet, desktop},
                                        }) => {
    const [isOpen, setIsOpen] = useState(false);
    const cartContexts = useContext(cartContext)
    const {cart} = cartContexts;

    const shop = useContext(shopContext)
    const {currency: {symbol}} = shop

    let cartSliderClass = isOpen ? 'cartPopupFixed' : '';
    //cart modal states
    const [open, setOpen] = useState(false)
    const handleSearchModal = () => {
        setOpen(!open)
    };
    return (
        <>
            <CartPopupStyle/>
            {mobile ? (
                <>
                    <Modal focusTrapped={false} open={open} onClose={handleSearchModal} showCloseIcon={true}
                           closeOnOverlayClick={true}
                           styles={{modal: {width: "100%"}}} classNames={{root: 'cartPopup'}}>
                        <Cart/>
                    </Modal>

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
                        onClick={handleSearchModal}
                    />
                </>
            ) : (
                <>
                    <CartSlidePopup className={cartSliderClass}>
                        {isOpen && (
                            <Cart onCloseBtnClick={() => {
                                setIsOpen(false)
                            }} scrollbarHeight='100vh'/>
                        )}
                    </CartSlidePopup>

                    <BoxedCartButton
                        className='product-cart'
                        itemCount={cart.length}
                        itemPostfix={
                            cart.length > 1 ? (
                                'items') : (
                                "item"
                            )
                        }
                        price={calculateTotalPrice(cart)}
                        pricePrefix={symbol}
                        onClick={() => {
                            setIsOpen(true)
                        }}
                    />
                </>
            )}
        </>
    );
};

export default CartPopUp;
