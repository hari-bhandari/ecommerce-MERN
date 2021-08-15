import React, {useContext} from "react";
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
import Featured from "@/components/Others/Featured/Featured";

type SidebarCategoryProps = {
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
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
const Home: React.FC<SidebarCategoryProps> = ({deviceType}) => {
    const router = useRouter();
    const shop=useContext(shopContext)
    const {categoryData}=shop
    const ProductsGridText = () => {
        const {category, subCategory,query} = router.query
        if(query){
            return <h3>
                Showing results for: {query}
            </h3>
        }

        if (category) {
            if (categoryData !== null) {
                const categoryObject = categoryData.data.find(data => data.id === category)
                const SubCategory = () => {
                    if (subCategory) {
                        if (categoryObject.subCategory) {
                            const subCategoryObject = categoryObject.subCategory.find(data => data.id === subCategory)
                            return <>
                                <ArrowNext/>
                                <h4>{subCategoryObject.name}</h4>
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

    const isQuerying = router.query.category || router.query.query ? true : false
    return (
        <>
            <SEO description={"Best place to find all the goods."}
                 title={"WiseCat-Shopping online has never been easier"}/>
                    <MobileCarouselDropdown>
                        <StoreNav/>
                        <Sidebar deviceType={deviceType}/>
                    </MobileCarouselDropdown>
                    <MainContentArea>
                        <SidebarSection>
                            <Sidebar deviceType={deviceType}/>
                        </SidebarSection>
                        <ContentSection>
                            <OfferSection>
                                    <Carousel deviceType={deviceType} mobile={1} tablet={1.7}
                                              desktop={3} laptop={2.2} tv={3.5} miniTablet={1.2} autoPlay={true}>
                                        <SiteOfferComponent
                                            image={'https://res.cloudinary.com/wisecart/image/upload/v1628454035/smartphone_udniub.webp'}
                                            title={'Mobiles phones'} description={'Mobile phones at discounted price'}
                                            buttonURL={'/?category=mobile-phone'} color={'#F8907D'}/>
                                        <SiteOfferComponent
                                            image={'https://res.cloudinary.com/wisecart/image/upload/v1628547148/camera_gpqkz7.webp'}
                                            title={'Shop Cameras'} description={'Camera\'s on sale'}
                                            buttonURL={'/?category=camera'} color={'#4ec9c9'}/>
                                        <SiteOfferComponent
                                            image={'https://res.cloudinary.com/wisecart/image/upload/v1628547070/tv-monitor_tmlf41.webp'}
                                            title={'Smart Tv\'s '}
                                            description={'Shop exclusive tv\'s at exclusive rates'}
                                            buttonURL={'/?category=smart-tv'} color={'#FDB269'}/>
                                    </Carousel>
                            </OfferSection>
                            {!isQuerying &&
                            (
                                <OfferSection lessPadding={true}>
                                    <Featured deviceType={deviceType} title={"Top products"}/>
                                </OfferSection>
                            )}

                            <OfferSection lessPadding={true}>
                                <Products title={ProductsGridText()}/>
                            </OfferSection>
                        </ContentSection>
                    </MainContentArea>
                    <CartPopUp deviceType={deviceType}/>
        </>
    );
}
export default Home;
