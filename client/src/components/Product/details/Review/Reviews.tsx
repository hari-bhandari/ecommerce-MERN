import React, {useState} from 'react';
import styled from "styled-components";
import StarRating from "@/components/Product/StarRating";
import {TagsContainer, TagsWrapper} from "@/components/Product/details/Review/ReviewComponent.style";
import {Scrollbar} from "@/components/Scrollbar";
import {Button} from "@/components/Others/button/button";
import {themeGet} from "@styled-system/theme-get";
import dateFormat from 'dateformat'
import {useRouter} from "next/router";
import axios from "axios";
import {API_BASE_URL} from "@/utils/config";
import Toast from "light-toast";
import Avatar from "@/components/Avatar";
import {Modal} from "react-responsive-modal";
import AddReview from "@/components/Product/details/Review/AddReview";

const ReviewCardContainer = styled.div<{ modal: boolean }>`
  margin: ${props => !props.modal ? '2px' : '0 auto'};
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 709px;
  width: ${props => props.modal ? '90%' : '100%'};
  max-height: 250px;
  padding: 8px 8px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(144, 144, 144, 0.37);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`
const ProductContainer = styled.div`
  border: 1px solid #000000;
  display: flex;
  margin: 7px 2px 7px 40%;
  width: 60%;
  max-height: 250px;
  padding: 8px 8px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(144, 144, 144, 0.37);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border-radius: 10px;
`
const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000000;
  font-weight: bold;`
const NameGroup = styled.div`
  display: flex;
  text-overflow: ellipsis;
  color: ${themeGet('colors.primary.light', '#009e7f')};

  p {
    text-overflow: ellipsis;
    width: 75px;
    overflow: hidden;
    white-space: nowrap;
  }
`

const ProductImageContainer = styled.div`
  flex: 0.3;
  height: 60px;
  width: 60px;

  img {
    height: 60px;
    width: 60px;
  }
`
const ProductTitleContainer = styled.div`
  flex: 0.7;

  h4 {
    font-size: 18px;
  }

  h4:hover {
    color: #00a8ff;
  }

`

const Description = styled.div`
  display: flex;
  flex-direction: column;

  b {
    text-align: left;
    font-size: larger;
    color: ${themeGet('colors.primary.regular', '#009e7f')};
  }

  color: #2b2b2b;
  font-weight: 400;
  margin: 0px 45px;
`
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 45px;
  align-items: center;
  color: #8c8aa7;
`
const ShareGroup = styled.div<{ delete?: boolean }>`
  display: flex;
  padding: 8px;
  color: white;
  margin-right: 2px;
  background: ${props => props.delete ? '#a12f2f' : '#104D92'};
  border-radius: 5px;
  cursor: pointer;

`
const EditButtonsContainer = styled.div`
  display: flex;
`
const ReviewsButtonContainer = styled.div`
  margin: 10px auto;

  button {
    margin: 5px auto;
  }
`

export const ReviewCard: React.FC<{
    name: string,
    comment: string,
    rating: number,
    product?: any, title: string,
    _id?: string,
    modal?: boolean,
    createdAt: any,
}> = ({
          name,
          createdAt,
          product,
          _id,
          comment,
          modal,
          rating,
          title
      }) => {
    const created = new Date(createdAt)
    const createdDate = dateFormat(created, "dddd, mmmm dS, yyyy")
    const router = useRouter()
    const onClick = () => {
        if (product.id) {
            router.push(`/product/${product.id}`)
        }
    }
    const onDelete=async ()=>{
        if (window.confirm('Are you sure you wish to delete your review?')) {
            try {
                await axios.delete(`${API_BASE_URL}/api/v1/products/${product._id}/reviews/${_id}`)
                Toast.success(' Review has been successfully deleted. Refresh the page to see effect')

            } catch (e) {
                Toast.fail('Something went wrong. Please try again later')
            }
        }
    }

    //edit review modal
    const [open, setOpen] = useState(false)
    const handleModal = () => {
        setOpen(!open)
    };
    return (
        <div>
            <Modal focusTrapped={false} open={open} onClose={handleModal} showCloseIcon={false}
                   closeOnOverlayClick={true}
                   styles={{modalContainer: {zIndex: 1200}}} center={true}>
                <AddReview id={product?.id} review={{comment, _id, rating, title}} onCloseBtnClick={handleModal}/>
            </Modal>
            <ReviewCardContainer modal={modal}>
                <ReviewHeader>
                    <NameGroup>
                        <Avatar width={'35px'} height={'35px'}>
                            {name.slice(0, 1)}
                        </Avatar>
                        <p>{name}</p>
                    </NameGroup>
                    <StarRating rating={rating}/>
                </ReviewHeader>
                <Description>
                    <b>{title}</b>
                    {comment}
                </Description>
                <Details>
                    <div className="review-date">{createdDate}</div>
                    {product ?
                        <>
                            <EditButtonsContainer>
                                <ShareGroup delete={true} onClick={onDelete}>
                                    <p>Delete</p>
                                </ShareGroup>
                                <ShareGroup onClick={handleModal}>
                                    <p>Edit</p>
                                </ShareGroup>
                            </EditButtonsContainer>
                        </> :
                        <ShareGroup>
                            <p>Helpful</p>
                        </ShareGroup>
                    }
                </Details>
                {product &&
                <ProductContainer onClick={onClick}>
                    <ProductImageContainer>
                        <img src={product.thumbImage}
                             alt={product.name + ' image'}/>
                    </ProductImageContainer>
                    <ProductTitleContainer>
                        <h4>{product.name}</h4>
                        <StarRating rating={product.rating}/>
                    </ProductTitleContainer>
                </ProductContainer>
                }

            </ReviewCardContainer>

        </div>
    );
};
const Reviews: React.FC<{ reviews: any, modal?: boolean }> = ({reviews, modal}) => {
    const loadMore = reviews.length > 3 ? true : false
    const [selected, setSelected] = useState<number | null>(null)
    const [open, setOpen] = useState(false)//modal for show all reviews
    const handleModal = () => {
        setOpen(!open)
    };
    const filteredReviews = () => {
        if (!selected) {
            return reviews
        }
        if (selected > 0) {
            return reviews.filter((data) => data.rating === selected)
        }
    }
    const isSelected = (number: number) => {
        return number === selected ? 'selected' : ''
    }
    const onClickForStars = (number: number) => {
        setSelected(number)
    }
    const starBlocks = ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐']
    return (
        <div style={{flex: '0.6', margin: "0 auto"}}>
            <TagsWrapper>
                <Modal focusTrapped={false} open={open} onClose={handleModal} showCloseIcon={false}
                       closeOnOverlayClick={true}
                       styles={{modal: {padding: '10px 20px'}}} center={true}>
                    <Reviews reviews={reviews} modal={true}/>
                </Modal>
                <TagsContainer>
                    {starBlocks.map(data => {
                        return (
                            <div className={`tag ${isSelected(data.length)}`} onClick={() => {
                                onClickForStars(data.length)
                            }}>{data}</div>
                        )
                    })
                    }


                </TagsContainer>
            </TagsWrapper>
            {/*<Scrollbar style={{height:"450px",width:"100%"}}>*/}
            {modal ? <div><Scrollbar style={{height: "450px", width: "100%"}}>
                    {filteredReviews().length === 0 && <h4>No reviews found
                        with {selected} stars</h4>} {/*shows error message if no review found with specific star*/}
                    {/*Loopinf filtered reviews*/}
                    {filteredReviews().map(({name, comment, rating, title, createdAt}) => (
                        <ReviewCard name={name} comment={comment} title={title} rating={rating} modal={true}
                                    createdAt={createdAt}/>))}
                </Scrollbar></div> :
                <>
                    {filteredReviews().slice(0, 3).map(({comment, rating, title, name, createdAt}) => (
                        <ReviewCard name={name} comment={comment} title={title} rating={rating}
                                    createdAt={createdAt}/>))}
                    {filteredReviews().length === 0 && <h4>No reviews with {selected} stars</h4>}
                    {loadMore &&
                    <ReviewsButtonContainer>
                        <Button type={'button'} onClick={handleModal}>see all reviews</Button>
                    </ReviewsButtonContainer>
                    }
                </>}

        </div>
    )
}

export default Reviews;