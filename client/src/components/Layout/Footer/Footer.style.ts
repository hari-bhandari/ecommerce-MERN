import styled from 'styled-components';
import {themeGet} from "@styled-system/theme-get";

export const Container = styled.div<any>`
  padding: 20px 60px;
  background-color: #0c1a34;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`


export const Row = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 50%;
  grid-template-rows: 1fr;
  column-gap: 25px;
  grid-template-areas:
    "footer-1 footer-2 subscribe";

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 14px 22px;
    grid-template-areas:
    "footer-1 footer-2"
    "subscribe subscribe";
  }

  .form {
    display: flex;
  }

  .column {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
  }

  .footer-1 {
    grid-area: footer-1;
  }

  .footer-2 {
    grid-area: footer-2;
  }

  .subscribe {
    grid-area: subscribe;
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 7px;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    color: ${themeGet('colors.primary.regular', '#009E7F')};
    transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
font-size: 18px;
  color: #fff;
  margin-bottom: 12px;
  font-weight: bold;
`;