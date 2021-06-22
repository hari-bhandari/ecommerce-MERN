import React from 'react';
import {NoProductImg, NoProductMsg} from "@/features/carts/cart.style";
import {NoCartBag} from "@/assets/icons/NoCartBag";
import {Button} from "@/components/Others/button/button";
import styled from "styled-components";
import {useRouter} from "next/router";

const NotFoundContainer=styled.div`
  margin-top: 90px;
`
const ProductNotFound = () => {
    const router=useRouter()
    return (
        <NotFoundContainer>
            <NoProductImg>
                <NoCartBag />
            </NoProductImg>
            <NoProductMsg>
                Looking for something?<br/>
                We are sorry the product you are looking for doesn't exist.
            </NoProductMsg>
            <NoProductImg>
            <Button type={"button"} onClick={()=>router.push('/')}>Go back to Homepage</Button>
            </NoProductImg>
        </NotFoundContainer>
    );
};

export default ProductNotFound;