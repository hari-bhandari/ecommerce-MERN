import React from 'react';
import styled from "styled-components";
const CardContainer=styled.div`
  width: 456px;
  height: 215px;
  background-color: #F8907D;
  color: white;
  display: flex;
  font-family: "Arial";
`
const LHS=styled.div`
  display: flex;
  flex-direction: column;
  /*margin-top: 30px;*/
  margin-left: 30px;
  justify-content: center;
`
const HeaderText=styled.span`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 10px;
`
const DescriptionText=styled.div`
  font-size: 14px;
`
const ButtonShop=styled.button`
  outline: none;
  background: white;
  border: none;
  width: 106px;
  height: 27px;
  margin-top: 30px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  color: #F8907D;
  &:focus{
    outline: none;
  }
`
const Image=styled.img`
  max-height: 80%;
  margin-left: 40px;
  margin-top: 10px;
`
const SiteOfferComponent = () => {
    return (
        <CardContainer>
            <LHS>

                  <HeaderText>
                    Iphone 12
                  </HeaderText>
                <DescriptionText>
                    40% off on selected iphones
                </DescriptionText>
                <ButtonShop>Shop Now</ButtonShop>
            </LHS>
            <div className="rhs">
                <Image src="https://res.cloudinary.com/wisecart/image/upload/v1628454035/smartphone_udniub.png"
                     alt=""/>
            </div>
        </CardContainer>
    );
};

export default SiteOfferComponent;