import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { SEO } from '@/components/Others/seo';
import { Modal } from '@redq/reuse-modal';
import ProductSingleWrapper, {
    ProductSingleContainer,
} from '../../../styles/product-style';
import {API_BASE_URL} from "@/utils/config";
import ProductNotFound from "@/components/404/ProductNotFound";
import ProductDetails from "@/components/Product/details/ProductDetails";
import axios from "axios";
const CartPopUp = dynamic(() => import('features/cart/cart-popup'), {
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
        data: res.data.data,
    }))
    .catch(() => ({
            error: true,
            data: null,
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
    if(!data.data){
        console.log(data)
        return(
            <>
                <SEO
                    title={`404 Not Found`}
                    description={`The page doesn't exist`}
                />
                <ProductNotFound/>

            </>
        )
    }
    let content = (
        <ProductDetails product={data.data} deviceType={deviceType} />
    );
    return (
        <>
            <SEO
                title={`${data.data.name} - WiseCart`}
                description={`${data.data.name} Details`}
                image={data.data.thumbImage}
            />
            <Modal>
                <ProductSingleWrapper>
                    <ProductSingleContainer>
                        {content}
                        <CartPopUp deviceType={deviceType} />
                    </ProductSingleContainer>
                </ProductSingleWrapper>
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