import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { openModal, closeModal } from '@redq/reuse-modal';
import {
  ProductsRow,
  ProductsCol,
  ButtonWrapper,
  LoaderWrapper,
  LoaderItem,
  ProductCardWrapper,
} from './product-list.style';
import Placeholder from 'components/placeholder/placeholder';
import NoResultFound from 'components/no-result/no-result';
import useAxios from "axios-hooks";
import {API_BASE_URL} from "@/utils/config";
const ErrorMessage = dynamic(() =>
  import('components/error-message/error-message')
);
const GeneralCard = dynamic(
  import('../../../../components/Product/ProductItem')
);


type ProductsProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
export const Products: React.FC<ProductsProps> = ({
  deviceType,
}) => {
  const router = useRouter();
  const [{data, loading, error}] = useAxios(
      `${API_BASE_URL}/api/v1/products/similar/sas`
  )


  // Quick View Modal
  const handleModalClose = () => {
    const { pathname, query, asPath } = router;
    const as = asPath;
    router.push(
      {
        pathname,
        query,
      },
      as,
      {
        shallow: true,
      }
    );
    closeModal();
  };

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
              currency={"£"} description={props.description}
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
