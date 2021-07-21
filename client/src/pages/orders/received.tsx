import React, {useEffect, useState} from 'react';
import {SEO} from "@/components/Others/seo";
import OrderReceived from "@/components/cart/order-received/order-received";
import {useRouter} from "next/router";
import Toast from "light-toast";

const OrderReceivedPage = () => {
    const router = useRouter()
    const [data, ] = useState(JSON.parse(localStorage.getItem('completedOrder')))

        useEffect(()=>{

            if(data){
                localStorage.removeItem('completedOrder')
            }
            else{
                router.push('/').then(e=>{Toast.fail('Please view your orders from your profile',4)})
            }

        })
    return (
        <>
            <SEO title="Invoice- Wisecart" description="Invoice Details"/>
            {data ?
                <OrderReceived data={data}/>
                : <b>Loading...</b>
            }
        </>
    );
}
;

export default OrderReceivedPage;
