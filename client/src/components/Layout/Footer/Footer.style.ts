import styled from 'styled-components';

export const Footer = styled.footer`
  background: #f1f1f1;
  padding: 90px 0;
`
export const Container = styled.div<any>`
  max-width: 1300px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;
  @media screen and (max-width: 960px) {
    max-width: 600px;
    .left-col {
      width: 100%;
      text-align: center;
    }
  }
`;
export const SocialMedia = styled.div`
  margin: 20px 0;

  a {
    color: #001a21;
    margin-right: 25px;
    font-size: 22px;
    text-decoration: none;
    transition: .3s linear;
  }

  a:hover {
    color: #fc5c65;
  }
`
export const RightCol = styled.div`
  @media screen and (max-width: 960px) {
    width: 100%;
    margin-bottom: 60px;
  }

  h1 {
    font-size: 26px;
  }

  .border {
    width: 100px;
    height: 4px;
    background: #fc5c65;
  }
`
export const NewsLetterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const NewsletterInput = styled.input`
  flex: 1;
  padding: 18px 40px;
  font-size: 16px;
  color: #293043;
  background: #ddd;
  border: none;
  font-weight: 700;
  outline: none;
  border-radius: 30px;
  min-width: 260px;
`
export const SubmitButton = styled.input`
  padding: 18px 40px;
  font-size: 16px;
  color: #f1f1f1;
  background: #fc5c65;
  border: none;
  font-weight: 700;
  outline: none;
  border-radius: 30px;
  margin-left: 20px;
  cursor: pointer;
  transition: opacity .3s linear;

  &:hover {
    opacity: .7;

  }

  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 20px 0 0;
  }

`
