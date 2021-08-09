import React from 'react';
import {NextPage} from 'next';
import dynamic from 'next/dynamic';
import {SEO} from '@/components/Others/seo';
import {Modal} from '@haribhandari/react-popup-modal';
import ProductSingleWrapper, {ProductSingleContainer,} from '../../../styles/product-style';
import {API_BASE_URL} from "@/utils/config";
import NotFound from "@/components/404/NotFound";
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
const fetchData = (url: string) => axios.get(url)
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
        return(
            <>
                <SEO
                    title={`404 Not Found`}
                    description={`The page doesn't exist`}
                />
                <NotFound header={'Looking for something?'}
                          subHeader={'We are sorry the product you are looking for doesn\'t exist.'}/>

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
    const data = await fetchData(`${API_BASE_URL}/api/v1/products/single/${params.slug}`).then(data=>data
        ).catch((error)=>{
            console.log(error)
        })
    return {
        props: {
            data,
        },
    };
}
export default ProductPage;