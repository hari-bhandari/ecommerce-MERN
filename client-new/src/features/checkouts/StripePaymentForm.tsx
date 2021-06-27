import React, { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import axios from "axios";
import {API_BASE_URL} from "@/utils/config";
import StripeFormWrapper, { Heading, FieldWrapper } from './stripe.style';
import {useSelector} from "react-redux";

const stripePromise = loadStripe('pk_live_51HR1HeEbiqPmtL9pdUHFdn2xTERjIoxSVtZ4GsYJjoFPcQqQsikhuLzslXvF9VgTiOsNazL7ie82M4gdGhIM1GpY00ovrQ8sTT');

const StripeForm = ({ buttonText, getToken }) => {
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
        const { token } = await stripe.createToken(cardElement);
        getToken(token);
        if (token) {

        }
        console.log(token, 'token');
    };
    return (
        <StripeFormWrapper>
            <Heading>Enter card info</Heading>
            <FieldWrapper>
                <CardElement />
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
const StripePaymentForm = ({ item: { price, buttonText } }: Item) => {
    const cartState = useSelector((state:any) => state.cartReducer);
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const sendTokenToServer = async (token: any) => {
        const {data} = await axios.post(
            `${API_BASE_URL}/api/v1/order/`,
            {stripeToken:token,orderItems:cartState,},
            config
        )
    };

    return (
        <Elements stripe={stripePromise}>
            <StripeForm
                getToken={(token) => sendTokenToServer(token)}
                buttonText={buttonText}
            />
        </Elements>
    );
};

export default StripePaymentForm;
