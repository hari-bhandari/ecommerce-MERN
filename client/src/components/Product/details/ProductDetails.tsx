import React, { useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Button } from '@/components/Others/button/button';
import ReadMore from "@/components/Product/details/truncate";
import {
  ProductDetailsWrapper,
  ProductPreview,
  ProductInfo,
  ProductTitlePriceWrapper,
  ProductTitle,
  BackButton,
  ProductDescription,
  ButtonText,
  ProductMeta,
  ProductCartWrapper,
  ProductPriceWrapper,
  ProductPrice,
  SalePrice,
  ProductCartBtn,
  MetaSingle,
  MetaItem,
  RelatedItems, ReviewTitle,
} from './ProductDetails.style';
import { LongArrowLeft } from '@/assets/icons/LongArrowLeft';
import { CartIcon } from '@/assets/icons/CartIcon';
import CarouselWithCustomDots from '@/components/Others/multi-carousel/multi-carousel';
import { Counter } from '@/components/cart/counter/counter';
import Products from "../grid/ProductGrid";
import StarRating from "@/components/Product/StarRating";
import {useDispatch, useSelector} from "react-redux";
import {getItemCartQty} from "@/utils/cartUtils";
import {addToCart} from "@/redux/actions/cartActions";
import {ArrowNext} from "@/assets/icons/ArrowNext";
import ReviewComponent from "@/components/Product/details/Review/ReviewComponent";
import {RatingContainer} from "@/components/Product/card/product-card.style";
type ProductDetailsProps = {
  product: any;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const ProductDetails: React.FunctionComponent<ProductDetailsProps> = ({
                                                                        product,
                                                                        deviceType,
                                                                      }) => {
  const cartState = useSelector((state:any) => state.cartReducer);
  const {currency:{symbol}} = useSelector((state:any) => state.shopReducer);
  const cartQuantity=getItemCartQty(cartState,product.id)
  const dispatch=useDispatch()


  const handleAddClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    dispatch(addToCart(product,1))

  };
  const handleRemoveClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    dispatch(addToCart(product,-1))

  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);

  return (
      <>
        <ProductDetailsWrapper className="product-card" dir="ltr">
          <ProductPreview>
            <BackButton>
              <Button
                  type="button"
                  size="small"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #f1f1f1',
                    color: '#77798c',
                  }}
                  onClick={Router.back}
              >
                <LongArrowLeft style={{ marginRight: 5 }} />
                Back              </Button>
            </BackButton>
            {product.thumbImage?<CarouselWithCustomDots
                items={[product.thumbImage,...product.images]}
                deviceType={deviceType}
            />:<CarouselWithCustomDots
                items={['https://res.cloudinary.com/wisecart/image/upload/v1622387938/nwxgnej1x6yvugrb8lzv.png']}
                deviceType={deviceType}
            />}

          </ProductPreview>

          <ProductInfo dir={'ltr'}>
            <ProductTitlePriceWrapper>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductPriceWrapper>
                {product.discountInPercent ? (
                    <SalePrice>
                      {symbol}
                      {product.price}
                    </SalePrice>
                ) : null}

                <ProductPrice>
                  {symbol}
                  {product.salePrice ? product.salePrice : product.price}
                </ProductPrice>
              </ProductPriceWrapper>
            </ProductTitlePriceWrapper>
            <RatingContainer>
              <StarRating rating={product.rating} size={30}/>
              <span className={'total-review-count'}>({product.numReviews})</span>
            </RatingContainer>
            {/*<ProductWeight>{product.unit}</ProductWeight>*/}
            {/*<ProductDescription dangerouslySetInnerHTML={{__html: product.description}}/>*/}
            <ProductDescription>
              <ReadMore character={600} more={"Read More"} less={"Show Less"} text={product.description}/>
            </ProductDescription>

            <ProductCartWrapper>
              <ProductCartBtn>
                {!cartQuantity ? (
                    <Button
                        className="cart-button"
                        variant="secondary"
                        borderRadius={100}
                        onClick={handleAddClick}
                    >
                      <CartIcon mr={2} />
                      <ButtonText>
                        Cart
                      </ButtonText>
                    </Button>
                ) : (
                    <Counter
                        value={cartQuantity}
                        onDecrement={handleRemoveClick}
                        onIncrement={handleAddClick}
                    />
                )}

              </ProductCartBtn>
            </ProductCartWrapper>

            <ProductMeta>
              <MetaSingle>
                {product.category&&
                    <Link
                        href={`/?category=${product.category}`}
                        key={`link-${product.category}`}
                    >
                      {
                        <a>
                          <MetaItem category={true}>{product.category}</MetaItem>
                        </a>
                      }
                    </Link>}

                <ArrowNext/>
                {product.subCategory&&
                <Link
                    href={`/?category=${product.subCategory}`}
                    key={`link-${product.subCategory}`}
                >
                  {
                    <a>
                      <MetaItem category={false}>{product.subCategory}</MetaItem>
                    </a>
                  }
                </Link>}
              </MetaSingle>
            </ProductMeta>
          </ProductInfo>

          <ProductPreview>
            <BackButton>
              <Button
                  title="Back"
                  intlButtonId="backBtn"
                  iconPosition="left"
                  size="small"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #f1f1f1',
                    color: '#77798c',
                  }}
                  icon={<LongArrowLeft />}
                  onClick={Router.back}
              />
            </BackButton>

            <CarouselWithCustomDots
                items={product.gallery}
                deviceType={deviceType}
            />
          </ProductPreview>
        </ProductDetailsWrapper>
        <ReviewComponent id={product._id} reviews={product.reviews}/>
        <RelatedItems>
          <Products title={"Related Items"} />
        </RelatedItems>
      </>
  );
};

export default ProductDetails;
