import styled from "styled-components";
import {themeGet} from "@styled-system/theme-get";

export const TagsWrapper=styled.div`
  max-height: 130px;
  margin: 45px 0;

`
// export const ReviewsWrapper=styled.div`
//   height: 417px;
//
//
// `

export const ReviewsContainer=styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  @media only screen and (max-width: 883px) {
      flex-direction: column;      
  }

`
export const ReviewContainer=styled.div`
  width: 100%;
`
export const AddReviewContainer=styled.div`
  flex: 0.4;
  width: 100%;
  margin:0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span{
    font-size:25px;
    margin:0 auto;
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    color:  ${themeGet('colors.primary.regular', '#009e7f')};
  }
  .not-found{
    margin-bottom:30px ;
  }

  span:hover{
    text-decoration: underline;  }
  .not-found:hover{
    text-decoration: none;  }
`
export const TagsHeader=styled.div`
  color: #ffffff;
  font-size: 22px;
  margin-bottom: 14px;

`
export const TagsContainer=styled.div`
  margin: 10px 0;
  .tag {
    display: inline-flex;
    background: #1d1c2d;
    color: #ffffff;
    border-radius: 5px;
    padding: 12px;
    margin: 10px 3px;
    cursor: pointer;
  }

  .selected {
    background: #8780f8;
    color: #ffffff;
  }

`