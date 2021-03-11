import React from 'react';
import Carousel from "../../src/components/carousel/carousel";
import {siteOffers} from "@/siteOffers";
import dynamic from "next/dynamic";
import useAxios from "axios-hooks";

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
            'http://localhost:5000/api/v1/products/top'
        )
        if(loading){
            return <h2>Loading...</h2>
        }

        return (
        <>
            <h3 style={{paddingLeft:"30px"}}>{title}</h3>
            <Carousel deviceType={deviceType} data={siteOffers} mobile={2} tablet={3} desktop={5}>
                {// @ts-ignore
                    data.map(product=>(
                    <ProductCard title={product.title} image={product.thumbImage}
                                  currency={"£"} description={product.description}
                                 price={product.price} />
                ))}
            </Carousel>

        </>
    );
};

export default Featured;