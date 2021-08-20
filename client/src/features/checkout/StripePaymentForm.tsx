import React, {useContext} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, useElements, useStripe,} from '@stripe/react-stripe-js';
import axios from "axios";
import {API_BASE_URL} from "@/utils/config";
import StripeFormWrapper, {FieldWrapper, Heading} from './stripe.style';
import Toast from 'light-toast';
import cartContext from "@/context/cart/cartContext";
import shopContext from "@/context/shop/shopContext";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_CLIENT_ID || '');

const StripeForm = ({getToken}) => {
    const cartContexts = useContext(cartContext)
    const {removeAllFromCart} = cartContexts;
    const shop = useContext(shopContext)
    const {billing, address} = shop
    // Get a reference to Stripe or Elements using hooks.
    const stripe = useStripe();
    const elements = useElements();

    async function handleServerResponse(response, id) {
        if (response.requires_action) {
            // Use Stripe.js to handle required card action
            const stripeDataRes = await stripe?.handleCardAction(
                response.payment_intent_client_secret
            )
            await handleStripeJsResult(stripeDataRes, id)
        } else {
            Toast.success('Payment Succeeded')
        }
    }

    async function handleStripeJsResult(result, id) {
        if (result.error) {
            console.log(result.error)
        } else {
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
                await handleServerResponse(res, id)
            } catch (e) {
                Toast.fail(e.response.data.error)
            }
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
                await handleServerResponse(res, id)
            } catch (e) {
                Toast.fail(e.response.data.error)
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
        // Toast.loading('loading')
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


        // try {
        //     const data: any = await stripe.confirmCardPayment(token.token, {
        //             payment_method: {
        //                 // @ts-ignore
        //                 card: elements.getElement(CardElement),
        //                 billing_details: {
        //                     email: '2012bhandari.ha@gmail.com',
        //                 },
        //             },
        //         }
        //     )
        //     const {paymentIntent}=data
        //     console.log(paymentIntent)
        //     if (paymentIntent?.status === "succeeded") {
        //         try {
        //
        //             const {data}: any = await axios.put(
        //                 `${API_BASE_URL}/api/v1/order/${token.createdOrder._id}/pay`,
        //                 {
        //                     id: paymentIntent.id,
        //                     status: paymentIntent.status,
        //                     update_time: paymentIntent.created,
        //                     email_address: paymentIntent.receipt_email
        //                 })
        //             if (data?.paymentResult.status === "succeeded") {
        //                 localStorage.setItem('completedOrder', JSON.stringify(data))
        //                 Toast.hide()
        //                 Toast.success('Payment has been completed')
        //                 removeAllFromCart();
        //                 Router.push('/orders/received')
        //             } else {
        //                 Toast.hide()
        //                 Toast.fail('Payment has not been completed. Please contact us for further information')
        //             }
        //         } catch (e) {
        //             Toast.hide()
        //             Toast.fail(e.response.data.error)
        //         }
        //     }}catch (e){
        //     console.log(e)
        // }

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
