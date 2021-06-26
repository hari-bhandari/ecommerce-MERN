import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { SEO } from '@/components/Others/seo';
import { Modal } from '@redq/reuse-modal';
import ProductSingleWrapper, {
    ProductSingleContainer,
} from '../../../styles/product-style';
import useAxios from "axios-hooks";
import {API_BASE_URL} from "@/utils/config";
import Layout from "../../components/Layout/layout";
import {useRouter} from "next/router";
import {ItemLoader} from "@/components/Others/placeholder/placeholder";
import ProductNotFound from "@/components/404/ProductNotFound";
import ProductDetails from "@/components/Product/details/ProductDetails";
import axios from "axios";
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
const fetchData = async (url:string) => await axios.get(url)
    .then(res => ({
        error: false,
        product: res.data,
    }))
    .catch(() => ({
            error: true,
            product: null,
        }),
    );

const ProductPage: NextPage<Props> = ({ deviceType,data }) => {
    // const { query } = useRouter();
    // const [{data, loading, error}] = useAxios(
    //     `${API_BASE_URL}/api/v1/products/single/${query.slug}`
    // )
    // if(loading){
    //     return <ItemLoader/>
    // }
    if(!data.product){
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
        <ProductDetails product={data.product} deviceType={deviceType} />
    );
    return (
        <>
            <SEO
                title={`${data.product.name} - WiseCart`}
                description={`${data.product.name} Details`}
                image={data.product.thumbImage}
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
export async function getServerSideProps({ params }) {
    const data = await fetchData(`${API_BASE_URL}/api/v1/products/single/${params.slug}`);
    return {
        props: {
            data,
        },
    };
}
export default ProductPage;