import React from 'react';
import {NextPage} from 'next';
import {SEO} from "@/components/Others/seo";
import Checkout from '@/features/checkout/checkout';


type Props = {
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
};
const CheckoutPage: NextPage<Props> = ({deviceType}) => {


    return (
        <>
            <SEO title="Checkout - WiseCart" description="Checkout Details" />
                    <Checkout token={'sx'}  deviceType={deviceType} />
        </>
    );
};

export default CheckoutPage;
