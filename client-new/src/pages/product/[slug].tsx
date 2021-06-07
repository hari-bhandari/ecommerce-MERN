import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { SEO } from 'components/seo';
import { Modal } from '@redq/reuse-modal';
import ProductSingleWrapper, {
    ProductSingleContainer,
} from '../../../styles/product-style';
import useAxios from "axios-hooks";
import {API_BASE_URL} from "@/utils/config";
import Layout from "../../../components/layout";
import {useRouter} from "next/router";
import {ItemLoader} from "@/components/placeholder/placeholder";
import ProductNotFound from "../../../components/404/ProductNotFound";
const ProductDetails = dynamic(() =>
    import('components/product-details/product-details-one/product-details-one')
);


const CartPopUp = dynamic(() => import('features/carts/cart-popup'), {
    ssr: false,
});

type Props = {
    deviceType?: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
    [key: string]: any;
};

const ProductPage: NextPage<Props> = ({ deviceType }) => {
    const { query } = useRouter();

    const [{data, loading, error}] = useAxios(
        `${API_BASE_URL}/api/v1/products/single/${query.slug}`
    )

    if(loading){
        return <ItemLoader/>
    }
    if(error){
        return(
            <>
                <SEO
                    title={`404 Not Found`}
                    description={`The page doesn't exist`}
                />
                    <Layout>
                <ProductNotFound/>
                    </Layout>
            </>
        )
    }
    let content = (
        <ProductDetails product={data} deviceType={deviceType} />
    );
    return (
        <>
            <SEO
                title={`${data.name} - WiseCart`}
                description={`${data.name} Details`}
            />

            <Modal>
                <Layout>
                <ProductSingleWrapper>
                    <ProductSingleContainer>
                        {content}
                        <CartPopUp deviceType={deviceType} />
                    </ProductSingleContainer>
                </ProductSingleWrapper>
                </Layout>
            </Modal>

        </>
    );
};
export default ProductPage;