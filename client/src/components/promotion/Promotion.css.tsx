import styled from "styled-components";
export const PromotionCardContainer=styled.div`
  width: 580px;
  height: 270px;
  display: block;
  background: linear-gradient(101deg, #0f7a94 174px, #fff 174px, #9c9c9c);
  box-shadow: 0 0 30px 0 #ffffff;
  border-radius: 15px;
  position: relative;
`
export const ProductImageContainer=styled.div`
  width: 50%;
  display: block;
  height: 100%;
  position: relative;
  float: left;
  img {
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 20px;
    transform: translate(-55%, -60%);
  }
`
export const ProductInfo=styled.div`
  position: absolute;
  width: 50%;
  top: 20%;
  left: 50%;
  transform: translateY(-50%);
`
export const ProductName=styled.h1`
  font-family: "Exo", sans-serif;
  font-size: 1em;
  font-weight: 800;
  text-transform: uppercase;
`

export const ProductPrice=styled.h2`
  font-family: "Exo", sans-serif;
  font-size: 1em;
  font-weight: 900;
  color: #0f7a94;
  &:before {
    content: "£ ";
  }
`
export const ProductSlogan=styled.h3`
  font-family: "Montserrat", sans-serif;
  color: #666;
  margin-bottom: .8em;
`

