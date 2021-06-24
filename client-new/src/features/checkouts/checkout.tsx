import React, {useContext, useState, useEffect} from 'react';
import Router from 'next/router';
import {openModal} from '@redq/reuse-modal';
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
import Sticky from 'react-stickynode';
import {useDispatch, useSelector} from "react-redux";
import {calculateTotalPrice} from "@/utils/cartUtils";
import MultiStepFormComponent from "@/features/checkouts/MultiStepForm";

// The type of props Checkout Form receives
interface MyFormProps {
    token: string;
    deviceType: any;
}

type CartItemProps = {
    product: any;
};

const OrderItem: React.FC<CartItemProps> = ({product}) => {
    const {thumbImage, images, rating, numReviews, price, countInStock, description, id, name} = product;
    const displayPrice = price
    return (
        <Items key={id}>
            <Quantity>{countInStock}</Quantity>
            <Multiplier>x</Multiplier>
            <ItemInfo>
                {name}
            </ItemInfo>
            <Price>
                {'£'}
                {23}
            </Price>
        </Items>
    );
};

const CheckoutWithSidebar: React.FC<MyFormProps> = ({token, deviceType}) => {
    const dispatch = useDispatch()
    const cartState = useSelector((state: any) => state.cartReducer);

    const handleSubmit = async () => {
        setLoading(true);
        if (isValid) {
            dispatch(removeAllFromCart());
            Router.push('/order-received');
        }
        setLoading(false);
    };
    const [loading, setLoading] = useState(false);
    const [isValid, setIsValid] = useState(false);


    const totalPrice = calculateTotalPrice(cartState)
    useEffect(() => {
        if (
            totalPrice > 0 &&
            cartState.length > 0
        ) {
            setIsValid(true);
        }
    }, [cartState]);

    // Add or edit modal



    return (
        <form>
            <CheckoutWrapper>
                <CheckoutContainer>
                    <CheckoutInformation>

                        <MultiStepFormComponent/>

                    </CheckoutInformation>

                    <CartWrapper>
                        {/* <Sticky enabled={true} top={totalHeight} innerZ={999}> */}
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
                                            {"£"}
                                            {totalPrice}
                                        </Text>
                                    </TextWrapper>

                                    <TextWrapper>
                                        <Text>
                                            Delivery Fee
                                        </Text>
                                        <Text>{'£'}0.00</Text>
                                    </TextWrapper>

                                    <TextWrapper>
                                        <Text>
                                            Discount
                                        </Text>
                                        <Text>
                                            {'£ 0'}

                                        </Text>
                                    </TextWrapper>

                                    <TextWrapper style={{marginTop: 20}}>
                                        <Bold>
                                            Total{}
                                            <Small>
                                                (
                                                Incl. VAT
                                                )
                                            </Small>
                                        </Bold>
                                        <Bold>
                                            {'£'}
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
