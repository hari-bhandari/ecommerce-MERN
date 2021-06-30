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
import {useSelector} from "react-redux";

const stripePromise = loadStripe('pk_test_51HR1HeEbiqPmtL9pHZqB2BQzFzjisQybiUnf6wzJHj1UD4stgUOuzQLLfcxowVS0c8RhEAAIRVO643Mu4QSsE3jk007D69CHI7');

const StripeForm = ({buttonText, getToken}) => {
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
        const cardElement = elements.getElement(CardElement);

        // Pass the Element directly to other Stripe.js methods:
        // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
        const {token} = await stripe.createToken(cardElement);
        if (token) {
            getToken(token);

            console.log({token:token})
        }
    };
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
    const billing = useSelector((state: any) => state.shopReducer);
    const cartState = useSelector((state: any) => state.cartReducer);
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const sendTokenToServer = async () => {
        const {data} = await axios.post(
            `${API_BASE_URL}/api/v1/order/`,
            {
                orderItems: cartState, paymentMethod: "card",
                itemsPrice: 500,
                taxPrice: 20,
                shippingPrice: 4,
                totalPrice: price,
                shippingAddress:billing.address ,
                name:billing.billing.name,
                number:billing.billing.number

            },
            config
        )
    };

    return (
        <Elements stripe={stripePromise}>
            <StripeForm
                getToken={() => sendTokenToServer()}
                buttonText={buttonText}
            />
        </Elements>
    );
};

export default StripePaymentForm;
