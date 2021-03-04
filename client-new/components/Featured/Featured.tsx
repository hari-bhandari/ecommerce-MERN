import React from 'react';
import Carousel from "../../src/components/carousel/carousel";
import {siteOffers} from "@/siteOffers";
import {data} from "browserslist";
type Props = {
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
    props?: any;
};
console.log(data)
const Featured:React.FC<Props> = ({deviceType}) => {
    return (
            <Carousel deviceType={deviceType} data={siteOffers} mobile={2} tablet={4} desktop={5}/>
    );
};

export default Featured;