import React from 'react';
import Carousel from "../../src/components/carousel/carousel";
import {siteOffers} from "@/siteOffers";
import dynamic from "next/dynamic";
import useAxios from "axios-hooks";
import {URL} from '../../APILocation'
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
        props? : any;
    };
    const Featured:React.FC < Props > = ({deviceType,title}) => {
        const [{ data, loading, error }] = useAxios(
            `${URL}/api/v1/products/top`
        )
        if(loading){
            return <h2>Loading...</h2>
        }

        return (
        <>
            <h3 style={{paddingLeft:"30px"}}>{title}</h3>
            <Carousel deviceType={deviceType} data={siteOffers} mobile={2} tablet={3} desktop={5}>
                {// @ts-ignore
                    data.map((product)=>(
                    <ProductCard title={product.title} image={product.thumbImage}
                                  currency={"£"} description={product.description}
                                 price={product.price} key={product._id} />
                ))}
            </Carousel>

        </>
    );
};

export default Featured;
