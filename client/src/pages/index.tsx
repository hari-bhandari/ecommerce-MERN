import React, {useContext, useEffect} from "react";
import {
    ContentSection,
    MainContentArea,
    MobileCarouselDropdown,
    OfferSection,
    SidebarSection,
} from '../../styles/pages.style';
import StoreNav from "@/components/Layout/store-nav/store-nav";
import dynamic from "next/dynamic";
import {SEO} from "@/components/Others/seo";
import {useRouter} from "next/router";
import {CategoryIcon} from "@/components/Layout/header/menu/left-menu/LeftMenu";
import styled from "styled-components";
import {ArrowNext} from "@/assets/icons/ArrowNext";
import shopContext from "@/context/shop/shopContext";
import SiteOfferComponent from "@/components/SiteOfferComponent";
import Carousel from "../components/Others/carousel/carousel"
import {API_BASE_URL} from "@/utils/config";
import {fetchData} from "@/pages/product/[slug]";
import Featured from "@/components/Others/Featured/Featured";

type SidebarCategoryProps = {
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
    data: any;
};
const CartPopUp = dynamic(() => import("../features/cart/cart-popup"), {
    ssr: false,
});
const Sidebar = dynamic(() => import("../components/Layout/header/sidebar/CategorySidebar"), {
    ssr: false,
});
const Products = dynamic(() => import("@/components/Product/grid/ProductGrid"), {
    ssr: false,
});


const TitleContainer = styled.div`
  display: flex;

  h3 {
    margin-left: 15px;
  }

  h4 {
    margin-left: 10px;
  }
`
const Home: React.FC<SidebarCategoryProps> = ({deviceType, data}) => {
    const router = useRouter();
    const shop = useContext(shopContext)
    const {setCategoryData, categoryData} = shop

    useEffect(() => {
        if (setCategoryData) {
            setCategoryData(data.data.categories)
        }
    }, [data])
    const ProductsGridText = () => {
        const {category, subCategory, query} = router.query
        if (query) {
            return <h3>
                Showing results for: {query}
            </h3>
        }

        if (category) {
            if (categoryData !== null) {
                const categoryObject = categoryData?.data?.find((data: any) => data.id === category)
                const SubCategory = () => {
                    if (subCategory) {
                        if (categoryObject?.subCategory) {
                            const subCategoryObject = categoryObject.subCategory?.find((data: any) => data.id === subCategory)
                            return <>
                                <ArrowNext/>
                                <h3 style={{color: 'gray'}}>
                                    {subCategoryObject?.name}
                                </h3>
                            </>
                        }
                    }
                }
                return <TitleContainer>
                    <CategoryIcon link={categoryObject.image} height={'50px'} width={'50px'}/>
                    <h3>{categoryObject.name}</h3>
                    {SubCategory()}
                </TitleContainer>
            }
            return 'Filtering ..'
        }
        return '  More products you may like'
    }
    const colors = ['#F8907D', '#4ec9c9', '#FDB269', '#F8907D']
    const isQuerying = router.query.category || router.query.query ? true : false
    return (
        <>
            <SEO description={"Best place to find all the goods."}
                 title={"WiseCart-Shopping online has never been easier"}/>
            <MobileCarouselDropdown>
                <StoreNav/>
                <Sidebar deviceType={deviceType}/>
            </MobileCarouselDropdown>
            <MainContentArea>
                <SidebarSection>
                    <Sidebar deviceType={deviceType}/>
                </SidebarSection>
                <ContentSection>
                    <OfferSection padding={'60px 60px 0 60px'} height={'275px'}>

                        <Carousel deviceType={deviceType} mobile={1} tablet={1.7}
                                  desktop={3} laptop={2.2} tv={3.5} miniTablet={1.2} autoPlay={true}>
                            {/* This is an  area for site offers/brands*/}
                            {categoryData !== null && categoryData.data.map((data: any, index) => {
                                    return <SiteOfferComponent key={data.id} image={data.image}
                                                               buttonURL={`/?category=${data.id} `} color={colors[index]}
                                                               description={data.description} title={data.name}/>
                                }
                            )}
                        </Carousel>
                    </OfferSection>
                    {!isQuerying &&
                        (
                            <>
                                <OfferSection padding={'30px 60px 0 60px'} height={'530px'}>
                                    <Featured deviceType={deviceType} title={"Top products"}
                                              data={data.data.TopProducts}/>
                                </OfferSection>
                                <OfferSection padding={'30px 60px 0 60px'} height={'530px'}>
                                    <Featured deviceType={deviceType} title={"Our Newest Collection"}
                                              data={data.data.newestProducts}/>
                                </OfferSection>
                            </>
                        )}

                    <OfferSection padding={'30px 60px 0 60px'}>
                        <Products title={ProductsGridText()}/>
                    </OfferSection>
                </ContentSection>

            </MainContentArea>
            <CartPopUp deviceType={deviceType}/>
        </>
    );
}

//
export async function getServerSideProps({params}) {
    const data = await fetchData(`${API_BASE_URL}/api/v1/products/top`).then(data => data
    ).catch((error) => {
        console.log(error)
    })
    return {
        props: {
            data
        },
    };
}

export default Home;
