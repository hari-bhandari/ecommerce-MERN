import React, { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import {}
import axios from "axios";
import {API_BASE_URL} from "@/utils/config";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

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
            const {data} = await axios.post(
                `${API_BASE_URL}/api/v1/order/`,
                {firstName,lastName, email, password, role,},
                config
            )
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
                {buttonText ? buttonText : 'Pay Now'}
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
    const [getPayment] = useMutation(GET_PAYMENT);
    const sendTokenToServer = async (token: any) => {
        const payment_info = await getPayment({
            variables: { paymentInput: JSON.stringify({ token, amount: price }) },
        });
        console.log(payment_info, 'payment_info');
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
