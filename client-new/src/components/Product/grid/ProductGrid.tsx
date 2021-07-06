import React, { useState } from 'react';
import ProductCard  from '../card/ProductItem';
import { useRouter } from 'next/router';
import { Button } from './loadmore-button';
import { Box } from './box';

// import { Button } from './button';

import {Grid} from './ProductGridStyles'
import {API_BASE_URL} from "@/utils/config";
import useFetch from "@/hooks/useFetch";
interface Props {
    loadMore?: boolean;
    fetchLimit?: number;
    style?: any;
}

export const ProductGrid = ({
                                style,
                                loadMore = true,
                                fetchLimit = 16,
                            }: Props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const url=()=>{
        const {category,subCategory,query}=router.query
        if(query){
                return ''
        }
        if (category){
            const categoryQuery=category?`category=${category}`:''
            const subcategoryQuery=subCategory?`subCategory=${subCategory}`:''
            return `${API_BASE_URL}/api/v1/products/?${categoryQuery}&${subcategoryQuery}`

        }


        else{
            return `${API_BASE_URL}/api/v1/products/similar/sas`
        }
    }
    const [data, isLoading]=useFetch(url())

    // const { data, error } = useProducts({
    //     type,
    //     text: router.query.text,
    //     category: router.query.category,
    //     offset: 0,
    //     limit: fetchLimit,
    // });

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
            <Grid style={style}>
                {data.data.map((product, idx) => (
                    renderCard(product)
                ))}
            </Grid>

            {loadMore && data?.hasMore && (
                <Box style={{ textAlign: 'center' }} mt={'2rem'}>
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