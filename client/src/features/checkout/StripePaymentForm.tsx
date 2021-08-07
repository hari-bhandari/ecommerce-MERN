import React, {useContext} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import axios from "axios";
import {API_BASE_URL} from "@/utils/config";
import StripeFormWrapper, {Heading, FieldWrapper} from './stripe.style';
import Toast from 'light-toast';
import Router from "next/router";
import cartContext from "@/context/cart/cartContext";
import shopContext from "@/context/shop/shopContext";

const stripePromise = loadStripe('pk_test_51HR1HeEbiqPmtL9pHZqB2BQzFzjisQybiUnf6wzJHj1UD4stgUOuzQLLfcxowVS0c8RhEAAIRVO643Mu4QSsE3jk007D69CHI7');

const StripeForm = ({getToken}) => {
    const cartContexts=useContext(cartContext)
    const {removeAllFromCart}=cartContexts;
    // Get a reference to Stripe or Elements using hooks.
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async () => {
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        // Use elements.getElement to get a reference to the mounted Element.

        // Pass the Element directly to other Stripe.js methods:
        // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
        Toast.loading('loading')
        const token = await getToken()
        const {paymentIntent} = await stripe.confirmCardPayment(token.token, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        email: '2012bhandari.ha@gmail.com',
                    },
                },
            }
        )
        if (paymentIntent.status === "succeeded") {
            try {

                const {data} = await axios.put(
                    `${API_BASE_URL}/api/v1/order/${token.createdOrder._id}/pay`,
                    {
                        id: paymentIntent.id,
                        status: paymentIntent.status,
                        update_time: paymentIntent.created,
                        email_address: paymentIntent.receipt_email
                    })
                if (data?.paymentResult.status === "succeeded") {
                    localStorage.setItem('completedOrder', JSON.stringify(data))
                    Toast.hide()
                    Toast.success('Payment has been completed')
                    removeAllFromCart();
                    Router.push('/orders/received')
                } else {
                    Toast.hide()
                    Toast.fail('Payment has not been completed. Please contact us for further information')
                }
            } catch (e) {
                Toast.fail(e.response.data.error)
            }
        }

    }
    return (
        <StripeFormWrapper>
            <Heading>Enter card info</Heading>
            <FieldWrapper>
                <CardElement/>
            </FieldWrapper>
            <button type="button" onClick={handleSubmit}>
                Pay Now
            </button>
        </StripeFormWrapper>
    );
};
type Item = {
    item: {
        price: any;
        buttonText: string;
    };
};
const StripePaymentForm = ({item: {price, buttonText}}: Item) => {
    const shop=useContext(shopContext)
    const {billing,address}=shop
    const cartContexts=useContext(cartContext)
    const {cart}=cartContexts;
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const sendTokenToServer = async () => {
        const {data} = await axios.post(
            `${API_BASE_URL}/api/v1/order/`,
            {
                orderItems: cart, paymentMethod: "card",
                itemsPrice: 500,
                taxPrice: 20,
                shippingPrice: 4,
                totalPrice: price,
                shippingAddress: address,
                name: billing.name,
                number: billing.number
            },
            config
        )
        return data
    };

    return (
        <Elements stripe={stripePromise}>
            <StripeForm
                getToken={() => sendTokenToServer()}
            />
        </Elements>
    );
};

export default StripePaymentForm;
