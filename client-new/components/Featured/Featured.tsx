import React from 'react';
import Carousel from "../../src/components/carousel/carousel";
import {siteOffers} from "@/siteOffers";
import dynamic from "next/dynamic";

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
    const Featured
:
React.FC < Props > = ({deviceType}) => {
    return (
        <>
            <h3>Trending deals</h3>
            <Carousel deviceType={deviceType} data={siteOffers} mobile={2} tablet={3} desktop={5}>
                <ProductCard title={"Aluminium"} image={"https://i.ebayimg.com/images/g/9lgAAOSwACBfGVRt/s-l400.jpg"}
                             weight={"damnn"} currency={"£"} description={"It does what its supposed to do"}
                             price={1150}/>
                <ProductCard title={"Aluminium"} image={"https://i.ebayimg.com/images/g/9lgAAOSwACBfGVRt/s-l400.jpg"}
                             weight={"damnn"} currency={"£"} description={"It does what its supposed to do"}
                             price={1150}/>
                <ProductCard title={"Aluminium"} image={"https://i.ebayimg.com/images/g/9lgAAOSwACBfGVRt/s-l400.jpg"}
                             weight={"damnn"} currency={"£"} description={"It does what its supposed to do"}
                             price={1150}/>
                <ProductCard title={"Aluminium"} image={"https://i.ebayimg.com/images/g/9lgAAOSwACBfGVRt/s-l400.jpg"}
                             weight={"damnn"} currency={"£"} description={"It does what its supposed to do"}
                             price={1150}/>
                <ProductCard title={"Aluminium"} image={"https://i.ebayimg.com/images/g/9lgAAOSwACBfGVRt/s-l400.jpg"}
                             weight={"damnn"} currency={"£"} description={"It does what its supposed to do"}
                             price={1150}/>
                <ProductCard title={"Aluminium"} image={"https://i.ebayimg.com/images/g/9lgAAOSwACBfGVRt/s-l400.jpg"}
                             weight={"damnn"} currency={"£"} description={"It does what its supposed to do"}
                             price={1150}/>
            </Carousel>

        </>
    );
};

export default Featured;