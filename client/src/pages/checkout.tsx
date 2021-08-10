import React from 'react';
import {NextPage} from 'next';
import dynamic from "next/dynamic";
import {SEO} from "@/components/Others/seo";
import Checkout from '@/features/checkout/checkout';

const Modal = dynamic(() =>
    import('@haribhandari/react-popup-modal').then((mod) => mod.Modal)
)


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
            <Modal>
                    <Checkout token={'sx'}  deviceType={deviceType} />
            </Modal>
        </>
    );
};

export default CheckoutPage;
