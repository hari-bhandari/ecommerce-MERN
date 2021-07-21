import React from 'react';
import {SEO} from "@/components/Others/seo";
import OrderReceived from "@/components/cart/order-received/order-received";
import {useRouter} from "next/router";

const OrderReceivedPage = () => {
    const router=useRouter()
    const orderNumber=router.query.slug
    return (
        <>
            <SEO title="Invoice- Wisecart" description="Invoice Details" />
            <OrderReceived title={'Invoice for -  Order no. '+ orderNumber}/>
        </>
    );
};

export default OrderReceivedPage;
