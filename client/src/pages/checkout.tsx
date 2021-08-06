import React from 'react';
import { NextPage } from 'next';
import { Modal } from '@haribhandari/react-popup-modal';
import {SEO} from "@/components/Others/seo";
import Checkout from '@/features/checkout/checkout';


type Props = {
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
};
const CheckoutPage: NextPage<Props> = ({ deviceType }) => {


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
