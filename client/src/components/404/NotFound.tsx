import React from 'react';
import {NoProductImg, NoProductMsg} from "@/features/cart/cart.style";
import {NoCartBag} from "@/assets/icons/NoCartBag";
import {Button} from "@/components/Others/button/button";
import styled from "styled-components";
import {useRouter} from "next/router";

const NotFoundContainer = styled.div`
  margin-top: 90px;
`
const NotFound: React.FC<{ header: string, subHeader: string }> = ({header, subHeader}) => {
    const router = useRouter()
    return (
        <NotFoundContainer>
            <NoProductImg>
                <NoCartBag/>
            </NoProductImg>
            <NoProductMsg>
                {header}<br/>
                {subHeader}
            </NoProductMsg>
            <NoProductImg>
                <Button type={"button"} onClick={() => router.push('/')}>Go back to Homepage</Button>
            </NoProductImg>
        </NotFoundContainer>
    );
};

export default NotFound;