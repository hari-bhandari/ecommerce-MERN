import React, {useState} from 'react';
import ProductCard from '../card/ProductItem';
import {useRouter} from 'next/router';
import {Button} from './loadmore-button';
import {Box} from './box';

// import { Button } from './button';
import {Grid} from './ProductGridStyles'
import {API_BASE_URL} from "@/utils/config";
import useFetch from "@/hooks/useFetch";
import FilterProducts from "@/components/FilterProducts";
import styled from "styled-components";
import {filterProducts} from "@/utils/filterQueries";
import {ProductCardLoader} from "@/components/Others/placeholder/placeholder";

const GridHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 718px ) {
    flex-direction: column;
    h3 {
      margin-bottom: 10px;
    }

  }
`
interface Props {
    loadMore?: boolean;
    fetchLimit?: number;
    style?: any;
    title: string|JSX.Element
}

export const ProductGrid = ({
                                style,
                                loadMore = true, title
                            }: Props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState<{ label: string | null, type: string } | null>(null)

    const url = () => {
        const {category, subCategory, query} = router.query
        if (query) {
            if (category) {
                const categoryQuery = category ? `category=${category}` : ''
                return `${API_BASE_URL}/api/v1/products/search?query=${query}&${categoryQuery}`

            } else {
                return `${API_BASE_URL}/api/v1/products/search?query=${query}`
            }
        }
        if (category) {
            const categoryQuery = category ? `category=${category}` : ''
            const subcategoryQuery = subCategory ? `subCategory=${subCategory}` : ''
            return `${API_BASE_URL}/api/v1/products/?${categoryQuery}&${subcategoryQuery}`
        } else {
            return `${API_BASE_URL}/api/v1/products/similar/sas`
        }
    }
    let [data, isLoading, , , setData] = useFetch(url())
    const setCurrentFilter = (value) => {
        setFilter({label: value.label, type: value.type})
        setData({data: filterProducts(data.data, value.type)})
    }

    if (!data) return null;
    const handleLoadMore = async () => {
        setLoading(true);
        // await fetchMore(Number(data.length), fetchLimit);
        setLoading(false);
    };
    const renderCard = (props) => {

        return (
            <ProductCard
                title={props.title} image={props.thumbImage}
                price={props.price} key={props._id} product={props}
            />
        );
    }
    // const { items, hasMore } = data.products;
    return (
        <section>
            <GridHeader>
                <h3>{title}</h3>
                {title!=='Related Items'&&
                <FilterProducts setCurrentFilter={setCurrentFilter} filter={filter}/>}
            </GridHeader>

            <Grid style={style}>
                {isLoading ? [1, 2, 3, 4, 5, 6].map(index => <ProductCardLoader
                    key={index}/>) : data.data.map((product, idx) => (
                    renderCard(product)
                ))}
            </Grid>

            {loadMore && data?.hasMore && (
                <Box style={{textAlign: 'center'}} mt={'2rem'}>
                    <Button
                        onClick={handleLoadMore}
                        loading={loading}
                        variant='secondary'
                        style={{
                            fontSize: 14,
                            display: 'inline-flex',
                        }}
                        border='1px solid #f1f1f1'
                    >
                        Load More
                    </Button>
                </Box>
            )}
        </section>
    );
};
export default ProductGrid