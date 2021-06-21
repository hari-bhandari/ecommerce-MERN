import React, { useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Button } from '@/components/button/button';
import {
  ProductDetailsWrapper,
  ProductPreview,
  ProductInfo,
  ProductTitlePriceWrapper,
  ProductTitle,
  BackButton,
  ProductWeight,
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
  RelatedItems,
} from './ProductDetails.style';
import { LongArrowLeft } from '@/assets/icons/LongArrowLeft';
import { CartIcon } from '@/assets/icons/CartIcon';
import CarouselWithCustomDots from '@/components/multi-carousel/multi-carousel';
import { Counter } from '@/../../cart/counter/counter';
import Products from "../grid/productGrid.style";
import StarRating from "@/components/StarRating";

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
  const data = product;

  const handleAddClick = (e) => {
    e.stopPropagation();
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
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
            {product.images.length!==0?<CarouselWithCustomDots
                items={product.images}
                deviceType={deviceType}
            />:<CarouselWithCustomDots
                items={['http://res.cloudinary.com/wisecart/image/upload/v1622387938/nwxgnej1x6yvugrb8lzv.png']}
                deviceType={deviceType}
            />}

          </ProductPreview>

        <ProductInfo dir={'ltr'}>
          <ProductTitlePriceWrapper>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductPriceWrapper>
              {product.discountInPercent ? (
                <SalePrice>
                  {'£'}
                  {product.price}
                </SalePrice>
              ) : null}

              <ProductPrice>
                {'£'}
                {product.salePrice ? product.salePrice : product.price}
              </ProductPrice>
            </ProductPriceWrapper>
          </ProductTitlePriceWrapper>
          <StarRating rating={4}/>
          {/*<ProductWeight>{product.unit}</ProductWeight>*/}
          <ProductDescription dangerouslySetInnerHTML={{__html: product.description}}/>

          <ProductCartWrapper>
            <ProductCartBtn>
              {true? (
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
                  value={2}
                  onDecrement={handleRemoveClick}
                  onIncrement={handleAddClick}
                />
              )}
            </ProductCartBtn>
          </ProductCartWrapper>

          <ProductMeta>
            <MetaSingle>
              {product?.categories?.map((item: any) => (
                <Link
                  href={`/${product.type.toLowerCase()}?category=${item.slug}`}
                  key={`link-${item.id}`}
                >
                  {
                    <a>
                      <MetaItem>{item.title}</MetaItem>
                    </a>
                  }
                </Link>
              ))}
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

      <RelatedItems>
        <h2>
          Related Items
        </h2>
        <Products
          deviceType={deviceType}
        />
      </RelatedItems>
    </>
  );
};

export default ProductDetails;
