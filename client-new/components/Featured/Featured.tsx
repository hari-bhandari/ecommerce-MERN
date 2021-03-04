import React from 'react';
import Carousel from "../../src/components/carousel/carousel";
import {siteOffers} from "@/siteOffers";
import dynamic from "next/dynamic";
import ProductCard from "../Product/ProductItem";
type Props = {
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
    props?: any;
};
const Featured:React.FC<Props> = ({deviceType}) => {
    return (
            <Carousel deviceType={deviceType} data={siteOffers} mobile={2} tablet={3} desktop={5} >
                <ProductCard title={"Aluminium"} image={"https://i.ebayimg.com/images/g/9lgAAOSwACBfGVRt/s-l400.jpg"} weight={"damnn"} currency={"£"} description={"It does what its supposed to do"} price={1150} />
                <ProductCard title={"Aluminium"} image={"https://i.ebayimg.com/images/g/9lgAAOSwACBfGVRt/s-l400.jpg"} weight={"damnn"} currency={"£"} description={"It does what its supposed to do"} price={1150} />
                <ProductCard title={"Aluminium"} image={"https://i.ebayimg.com/images/g/9lgAAOSwACBfGVRt/s-l400.jpg"} weight={"damnn"} currency={"£"} description={"It does what its supposed to do"} price={1150} />
                <ProductCard title={"Aluminium"} image={"https://i.ebayimg.com/images/g/9lgAAOSwACBfGVRt/s-l400.jpg"} weight={"damnn"} currency={"£"} description={"It does what its supposed to do"} price={1150} />
                <ProductCard title={"Aluminium"} image={"https://i.ebayimg.com/images/g/9lgAAOSwACBfGVRt/s-l400.jpg"} weight={"damnn"} currency={"£"} description={"It does what its supposed to do"} price={1150} />
                <ProductCard title={"Aluminium"} image={"https://i.ebayimg.com/images/g/9lgAAOSwACBfGVRt/s-l400.jpg"} weight={"damnn"} currency={"£"} description={"It does what its supposed to do"} price={1150} />
            </Carousel>
    );
};

export default Featured;