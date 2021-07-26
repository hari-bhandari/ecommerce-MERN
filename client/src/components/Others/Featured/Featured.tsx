import React from 'react';
import Carousel from "../carousel/carousel";
import {siteOffers} from "@/siteOffers";
import dynamic from "next/dynamic";
import useAxios from "axios-hooks";
import {API_BASE_URL, transformCloudinaryImage} from "@/utils/config";
import {FeaturedLoading} from "@/components/Others/placeholder/placeholder";
import {useSelector} from "react-redux";

const ProductCard = dynamic(() => import("../../Product/card/ProductItem"), {
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
    const {currency: {symbol}} = useSelector((state: any) => state.shopReducer);

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
            <Carousel deviceType={deviceType} data={siteOffers} mobile={1.5} tablet={3} desktop={4.5} tv={5.5}
                      laptop={4} miniTablet={2}>
                {
                    data.data.map((product) => (
                        <ProductCard title={product.title}
                                     image={transformCloudinaryImage(product.thumbImage, 300, 320)}
                                     price={product.price} key={product._id} product={product}/>
                    ))}
            </Carousel>

        </>
    );
};

export default Featured;
