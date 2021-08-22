import React from 'react';
import styled from "styled-components";
import {useRouter} from "next/router";
import Image from '../components/Others/image/image'

const CardContainer = styled.div<{ color: string }>`
  width: 100%;
  max-width: 100%;
  height: 215px;
  background-color: ${props => props.color};
  color: white;
  display: flex;
  font-family: "Arial", serif;
  font-display: swap;
  border-left: 2px solid white;


`
const LHS = styled.div`
  display: flex;
  flex-direction: column;
  /*margin-top: 30px;*/
  margin-left: 30px;
  justify-content: center;
`
const HeaderText=styled.span`
  font-weight: bolder;
  font-size: 26px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`
const DescriptionText = styled.div`
  font-size: 14px;
  font-weight: bold;
`
const ButtonShop = styled.button<{ color: string }>`
  outline: none;
  background: white;
  border: none;
  width: 106px;
  height: 27px;
  margin-top: 30px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.color};

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`
const RHS = styled.div`
  div:first-of-type {
    max-height: 80% !important;
    margin-left: 30px !important;
    margin-top: 10px !important;
  }

`
// const Image = styled.img`
//   max-height: 70%;
//   margin-left: 30px;
//   margin-top: 10px;
// `

interface Props {
    image: string,
    title: string,
    description: string,
    buttonURL: string,
    color: string
}

const SiteOfferComponent: React.FC<Props> = ({image, title, description, buttonURL, color}) => {
    const router = useRouter()
    const onClick = () => {
        router.push(buttonURL)
    }
    return (
        <CardContainer color={color}>
            <LHS>

                <HeaderText>
                    {title}
                </HeaderText>
                <DescriptionText>
                    {description}
                </DescriptionText>
                <ButtonShop onClick={onClick} color={color}>Shop Now</ButtonShop>
            </LHS>
            <RHS>
                <Image url={image} className={'image-carousel'}
                       alt='image of a icon' width={"150"} height={"150"}/>
            </RHS>
        </CardContainer>
    );
};

export default SiteOfferComponent;