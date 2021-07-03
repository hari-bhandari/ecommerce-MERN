import styled from "styled-components";
export const PromotionCardContainer=styled.div`
  width: 1000px;
  height: 500px;
  display: block;
  margin: 50px auto;
  background: linear-gradient(100deg, #0f7a94 300px, #fff 300px, #fff);
  box-shadow: 0 0 30px 0 #999;
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
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-55%, -60%);
  }
`
export const ProductInfo=styled.div`
  position: absolute;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
`
export const ProductName=styled.h1`
  font-family: "Exo", sans-serif;
  font-size: 2em;
  font-weight: 800;
  text-transform: uppercase;
`

export const ProductPrice=styled.h2`
  font-family: "Exo", sans-serif;
  font-size: 4em;
  font-weight: 900;
  color: #0f7a94;
  &:before {
    content: "$ ";
  }
`
export const ProductSlogan=styled.h3`
  font-family: "Montserrat", sans-serif;
  color: #666;
  margin-bottom: .8em;
`

