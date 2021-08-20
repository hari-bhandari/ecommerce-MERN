import React, {useContext, useEffect} from 'react';
import {Scrollbar} from "@/components/Scrollbar";
import CheckoutWrapper, {
    Bold,
    CalculationWrapper,
    CartWrapper,
    CheckoutContainer,
    CheckoutInformation,
    ItemInfo,
    Items,
    ItemsWrapper,
    Multiplier,
    NoProductImg,
    NoProductMsg,
    OrderInfo,
    Price,
    Quantity,
    Small,
    Text,
    TextWrapper,
    Title,
} from './checkout.style';
import {NoCartBag} from '@/assets/icons/NoCartBag';
import {calculateTotalPrice} from "@/utils/cartUtils";
import MultiStepFormComponent from "@/features/checkout/MultiStepForm";
import {useRouter} from "next/router";
import Toast from "light-toast";
import cartContext from "@/context/cart/cartContext";
import shopContext from "@/context/shop/shopContext";

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
    const shop = useContext(shopContext)
    const {currency} = shop
    const symbol = currency?.symbol
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
    const cartContexts = useContext(cartContext)
    const {cart} = cartContexts;
    const shop = useContext(shopContext)
    const {currency} = shop
    const symbol = currency?.symbol
    const router = useRouter()


    const totalPrice = calculateTotalPrice(cart)
    useEffect(() => {
        if (totalPrice <= 0 && cart.length <= 0) {
            router.push('/').then(e => {
                Toast.fail('You don\'t have any products in your cart', 5)
            })
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

                                <Scrollbar
                                    style={{
                                        marginLeft: 0,
                                        paddingLeft: 0,
                                        paddingRight: 15,
                                        maxHeight:'390px'
                                    }}
                                >
                                    <ItemsWrapper>
                                        {cart.length > 0 ? (
                                            cart.map((item: any) => (
                                                <OrderItem key={`cartItem-${item?.id}`} product={item}/>
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
                                </Scrollbar>

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
                                            {totalPrice + 1.99}
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
