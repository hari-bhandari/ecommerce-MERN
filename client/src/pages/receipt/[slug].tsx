import React from 'react';
import {SEO} from "@/components/Others/seo";
import OrderReceived from "@/components/cart/order-received/order-received";

const OrderReceivedPage = () => {
    return (
        <>
            <SEO title="Invoice- Wisecart" description="Invoice Details" />
            <OrderReceived title={'order info'}/>
        </>
    );
};

export default OrderReceivedPage;
