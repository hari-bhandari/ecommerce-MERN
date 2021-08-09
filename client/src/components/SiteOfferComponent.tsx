import React from 'react';
import styled from "styled-components";
import {useRouter} from "next/router";

const CardContainer = styled.div<{ color: string }>`
  width: 456px;
  max-width: 100%;
  height: 215px;
  background-color: ${props => props.color};
  color: white;
  display: flex;
  font-family: "Arial";
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
const Image = styled.img`
  max-height: 70%;
  margin-left: 30px;
  margin-top: 10px;
`

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
            <div className="rhs">
                <Image src={image}
                       alt='image of a icon'/>
            </div>
        </CardContainer>
    );
};

export default SiteOfferComponent;