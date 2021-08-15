import React from 'react';
import Carousel from "../carousel/carousel";
import dynamic from "next/dynamic";
import useAxios from "axios-hooks";
import {API_BASE_URL} from "@/utils/config";
import {ProductCardLoader} from "@/components/Others/placeholder/placeholder";
import styled from "styled-components";


const ProductCard = dynamic(() => import("../../Product/card/ProductItem"), {
    ssr: false,
});
const ProductHeader = styled.h3`
  padding-left: 30px;
`
const FeaturedContainer = styled.div`
  .react-multiple-carousel__arrow {
    top: 30%;

  }
`
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
    const max = [1, 2, 3, 4, 5, 6]

    return (
        <FeaturedContainer>
            <ProductHeader>{title}</ProductHeader>
            <Carousel deviceType={deviceType} mobile={1.5} tablet={3} desktop={4.5} tv={5.5}
                      laptop={4} miniTablet={2} infinite={false}>
                {loading ? max.map(index => <ProductCardLoader id={index} width={300}/>) : data.data.map((product) => (
                    <ProductCard title={product.title}
                                 image={product.thumbImage}
                                 price={product.price} key={product._id} product={product}/>
                ))}
            </Carousel>

        </FeaturedContainer>
    );
};

export default Featured;
