import React, {useState, useEffect} from 'react';
import Router from 'next/router';
import {Scrollbars} from 'react-custom-scrollbars';
import CheckoutWrapper, {
    CheckoutContainer,
    CheckoutInformation,

    CartWrapper,
    CalculationWrapper,
    OrderInfo,
    Title,
    ItemsWrapper,
    Items,
    Quantity,
    Multiplier,
    ItemInfo,
    Price,
    TextWrapper,
    Text,
    Bold,
    Small,
    NoProductMsg,
    NoProductImg,
} from './checkout.style';
import {

    removeAllFromCart
} from "@/redux/actions/cartActions";
import {NoCartBag} from '@/assets/icons/NoCartBag';
import {useDispatch, useSelector} from "react-redux";
import {calculateTotalPrice} from "@/utils/cartUtils";
import MultiStepFormComponent from "@/features/checkout/MultiStepForm";
import {router} from "next/client";
import Toast from "light-toast";

// The type of props Checkout Form receives
interface MyFormProps {
    token: string;
    deviceType: any;
}

type CartItemProps = {
    product: any;
};

const OrderItem: React.FC<CartItemProps> = ({product}) => {
    const {price, cartQuantity, id, name} = product;
    const {currency:{symbol}} = useSelector((state:any) => state.shopReducer);

    return (
        <Items key={id}>
            <Quantity>{cartQuantity}</Quantity>
            <Multiplier>x</Multiplier>
            <ItemInfo>
                {name}
            </ItemInfo>
            <Price>
                {symbol}
                {price}
            </Price>
        </Items>
    );
};

const CheckoutWithSidebar: React.FC<MyFormProps> = ({token, deviceType}) => {
    const cartState = useSelector((state: any) => state.cartReducer);
    const {currency:{symbol}} = useSelector((state:any) => state.shopReducer);


    const totalPrice = calculateTotalPrice(cartState)
    useEffect(() => {
        if(totalPrice<=0&&cartState.length<=0){
            router.push('/').then(e=>{Toast.fail('You don\'t have any products in your cart',5)})
        }
    }, []);

    // Add or edit modal



    return (
        <form>
            <CheckoutWrapper>
                <CheckoutContainer>
                    <CheckoutInformation>

                        <MultiStepFormComponent price={totalPrice}/>

                    </CheckoutInformation>

                    <CartWrapper>
                        <>
                            <OrderInfo>
                                <Title>
                                    Your Order
                                </Title>

                                <Scrollbars
                                    universal
                                    autoHide
                                    autoHeight
                                    autoHeightMax='390px'
                                    renderView={(props) => (
                                        <div
                                            {...props}
                                            style={{
                                                ...props.style,
                                                marginLeft: 0,
                                                marginRight: props.style.marginRight,
                                                paddingLeft: 0,
                                                paddingRight: 15,
                                            }}
                                        />
                                    )}
                                >
                                    <ItemsWrapper>
                                        {cartState.length > 0 ? (
                                            cartState.map((item) => (
                                                <OrderItem key={`cartItem-${item.id}`} product={item}/>
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
                                    </ItemsWrapper>
                                </Scrollbars>

                                <CalculationWrapper>
                                    <TextWrapper>
                                        <Text>
                                            Subtotal
                                        </Text>
                                        <Text>
                                            {symbol}
                                            {totalPrice}
                                        </Text>
                                    </TextWrapper>

                                    <TextWrapper>
                                        <Text>
                                            Delivery Fee
                                        </Text>
                                        <Text>
                                            {symbol}
                                            1.99
                                        </Text>
                                    </TextWrapper>

                                    <TextWrapper>
                                        <Text>
                                            Discount
                                        </Text>
                                        <Text>
                                            {symbol +' 0.00'}

                                        </Text>
                                    </TextWrapper>

                                    <TextWrapper style={{marginTop: 20}}>
                                        <Bold>
                                            Total
                                            <Small>
                                                (
                                                Incl. VAT
                                                )
                                            </Small>
                                        </Bold>
                                        <Bold>
                                            {symbol}
                                            {totalPrice}
                                        </Bold>
                                    </TextWrapper>
                                </CalculationWrapper>
                            </OrderInfo>
                        </>
                    </CartWrapper>
                </CheckoutContainer>
            </CheckoutWrapper>
        </form>
    );
};

export default CheckoutWithSidebar;
