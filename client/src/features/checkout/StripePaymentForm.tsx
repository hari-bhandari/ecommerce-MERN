import React, {useContext} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, useElements, useStripe,} from '@stripe/react-stripe-js';
import axios from "axios";
import {API_BASE_URL} from "@/utils/config";
import StripeFormWrapper, {FieldWrapper, Heading} from './stripe.style';
import Toast from 'light-toast';
import cartContext from "@/context/cart/cartContext";
import shopContext from "@/context/shop/shopContext";
import {useRouter} from "next/router";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_CLIENT_ID || '');

const StripeForm = ({getToken}) => {
    const router = useRouter()
    const cartContexts = useContext(cartContext)
    const {removeAllFromCart} = cartContexts;
    const shop = useContext(shopContext)
    const {billing, address} = shop
    // Get a reference to Stripe or Elements using hooks.
    const stripe = useStripe();
    const elements = useElements();
    const handleServerResponse = async (response, id) => {
        if (response.requires_action) {
            // Use Stripe.js to handle the required card action
            // @ts-ignore
            const {error: errorAction, paymentIntent} =
                await stripe?.handleCardAction(response.payment_intent_client_secret);

            if (errorAction) {
                Toast.fail(errorAction.message)
            } else {
                // The card action has been handled
                // The PaymentIntent can be confirmed again on the server
                try {
                    const res: any = await axios.put(
                        `${API_BASE_URL}/api/v1/order/${id}/pay`,
                        {
                            payment_intent_id: paymentIntent?.id,
                        }, {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })
                    await handleServerResponse(res.data, id);
                } catch (e) {
                    Toast.fail(e.response.data.error || 'Payment Failed')
                }
            }
        } else {
            Toast.hide()
            Toast.success('Payment has been completed')
            removeAllFromCart();
            await router.push('/orders/received')
        }
    }


    async function stripePaymentMethodHandler(result, id) {
        if (result.error) {
            Toast.fail(result.error.message)
        } else {
            // Otherwise send paymentMethod.id to your server (see Step 4)
            try {
                const res: any = await axios.put(
                    `${API_BASE_URL}/api/v1/order/${id}/pay`,
                    {
                        payment_method_id: result.paymentMethod.id,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                await handleServerResponse(res.data, id)
            } catch (e) {
                Toast.fail(e.response.data.error || 'Payment Failed')
            }
        }
    }

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
        const result = await stripe.createPaymentMethod({
            type: 'card',
            // @ts-ignore
            card: elements.getElement(CardElement) || null,
            billing_details: {
                // Include any additional collected billing details.
                name: billing.name,
                email: billing.email,
            }
        });
        await stripePaymentMethodHandler(result, token.createdOrder._id)
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
    prev:any
};
const StripePaymentForm = ({item,prev: {price}}: Item) => {
    const shop = useContext(shopContext)
    const {billing, address} = shop
    const cartContexts = useContext(cartContext)
    const {cart} = cartContexts;
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
