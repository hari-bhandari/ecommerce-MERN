import styled from "styled-components";

export const TagsWrapper=styled.div`
  max-height: 130px;
  margin: 35px;

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
  
`
export const ReviewContainer=styled.div`
  width: 100%;
`
export const AddReviewContainer=styled.div`
  width: 100%;
`
export const TagsHeader=styled.div`
  color: #ffffff;
  font-size: 22px;
  margin-bottom: 14px;

`
export const TagsContainer=styled.div`
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