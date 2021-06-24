import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { Modal } from '@redq/reuse-modal';
import {SEO} from "@/components/Others/seo";
import Checkout from '@/features/checkouts/checkout';
import Layout from "@/components/Layout/layout";


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
            <Layout>
                    <Checkout token={'sx'}  deviceType={deviceType} />
            </Layout>
            </Modal>
        </>
    );
};

export default CheckoutPage;
