import React from 'react';
import dynamic from 'next/dynamic';
import {
  ProductsRow,
  ProductsCol,
  LoaderWrapper,
  LoaderItem,
  ProductCardWrapper,
} from './ProductGrid';
import Placeholder from '@/components/Others/placeholder/placeholder';
import NoResultFound from '@/components/Others/no-result/no-result';
import useAxios from "axios-hooks";
import {API_BASE_URL} from "@/utils/config";
const ErrorMessage = dynamic(() =>
  import('@/components/Others/error-message/error-message')
);
const GeneralCard = dynamic(
  import('../card/ProductItem')
);


type ProductsProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
export const Products: React.FC<ProductsProps> = ({
}) => {
  const [{data, loading, error}] = useAxios(
      `${API_BASE_URL}/api/v1/products/similar/sas`
  )

  if (error) return <ErrorMessage message={error} />;
  if (loading) {
    return (
      <LoaderWrapper>
        <LoaderItem>
          <Placeholder  />
        </LoaderItem>
        <LoaderItem>
          <Placeholder  />
        </LoaderItem>
        <LoaderItem>
          <Placeholder />
        </LoaderItem>
      </LoaderWrapper>
    );
  }

  if (!data ) {
    return <NoResultFound />;
  }

  const renderCard = (props) => {

      return (
          <GeneralCard
              title={props.title} image={props.thumbImage}
               description={props.description}
              price={props.price} key={props._id} product={props}
          />
        );
    }
  return (
    <>
      <ProductsRow>
        {data.map((item: any, index: number) => (
          <ProductsCol
            key={index}
          >
            <ProductCardWrapper>

                {renderCard(item)}
            </ProductCardWrapper>
          </ProductsCol>
        ))}
      </ProductsRow>

    </>
  );
};
export default Products;
