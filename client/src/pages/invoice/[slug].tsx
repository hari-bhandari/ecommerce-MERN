import React from 'react';
import {SEO} from "@/components/Others/seo";
import {API_BASE_URL} from "@/utils/config";
import {useRouter} from "next/router";
import useFetch from "@/hooks/useFetch";
import OrderReceived from "@/components/cart/order-received/order-received";
import NotFound from "@/components/404/NotFound";

const OrderReceivedPage = () => {
    const {query} = useRouter()
    const [data, isLoading] = useFetch(`${API_BASE_URL}/api/v1/order/${query.slug}`, true)
    if (isLoading) {
        return <>
            <h3>Loading...</h3>
        </>
    }
    if (!data) {
        return (
            <>
                <SEO
                    title={`404 Not Found`}
                    description={`The page doesn't exist`}
                />
                <NotFound subHeader={'Maybe go back or try again later?'} header={'The order id doesn\'t match'}/>

            </>
        )
    }
    return (
        <>
            <SEO title="Invoice- Wisecart" description="Invoice Details"/>
            <OrderReceived title={'Invoice for -  Order no. ' + query.slug} data={data}/>
        </>
    );
};

//

export default OrderReceivedPage;
