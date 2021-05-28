import React from 'react';
import Carousel from "../../src/components/carousel/carousel";
import {siteOffers} from "@/siteOffers";
import dynamic from "next/dynamic";
import useAxios from "axios-hooks";
import {API_BASE_URL} from "@/utils/config";
import {FeaturedLoading} from "@/components/placeholder/placeholder";

const ProductCard = dynamic(() => import("../Product/ProductItem"), {
    ssr: false,
});
type Props = {
    title: string,
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
    props?: any;
};
const Featured: React.FC<Props> = ({deviceType, title}) => {
    const [{data, loading, error}] = useAxios(
        `${API_BASE_URL}/api/v1/products/top`
    )
    if (loading) {
        return <>
            <h3 style={{paddingLeft: "30px"}}>{title}</h3>
            <FeaturedLoading deviceType={deviceType}/>
            </>
    }

    return (
        <>
            <h3 style={{paddingLeft: "30px"}}>{title}</h3>
            <Carousel deviceType={deviceType} data={siteOffers} mobile={2} tablet={3} desktop={5}>
                {
                    data.map((product) => (
                        <ProductCard title={product.title} image={product.thumbImage}
                                     currency={"£"} description={product.description}
                                     price={product.price} key={product._id} product={product}/>
                    ))}
            </Carousel>

        </>
    );
};

export default Featured;
