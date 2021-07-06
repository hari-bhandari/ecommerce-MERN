import Sidebar from "../components/Layout/header/sidebar/CategorySidebar";
import React from "react";
// @ts-ignore
import {Modal} from '@redq/reuse-modal';
import Carousel from "../components/Others/carousel/carousel";
import {
    MainContentArea,
    SidebarSection,
    ContentSection,
    OfferSection,
    MobileCarouselDropdown,
} from '../../styles/pages.style';
import {siteOffers} from "@/siteOffers";
import StoreNav from "@/components/Layout/store-nav/store-nav";
import Featured from "@/components/Others/Featured/Featured";
import Layout from "../components/Layout/layout";

type SidebarCategoryProps = {
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
};
import dynamic from "next/dynamic";
import Products from "@/components/Product/grid/ProductGrid";
import {SEO} from "@/components/Others/seo";
import {useRouter} from "next/router";

const CartPopUp = dynamic(() => import("../features/cart/cart-popup"), {
    ssr: false,
});
import {useSelector} from "react-redux";
import {CategoryIcon} from "@/components/Layout/header/menu/left-menu/LeftMenu";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;

  h3 {
    margin-left: 15px;
  }
  h4{
    margin-left: 10px;
  }
`
const Home: React.FC<SidebarCategoryProps> = ({deviceType}) => {
    const router = useRouter();
    const {categoryData} = useSelector((state: any) => state.shopReducer);
    const ProductsGridText = () => {
        const {category, subCategory} = router.query
        if (category) {
            if (categoryData !== null) {
                const categoryObject = categoryData.find(data => data.id === category)
                const SubCategory = () => {
                    if (subCategory) {
                        if (categoryObject.subCategory) {
                            const subCategoryObject = categoryObject.subCategory.find(data => data.id === subCategory)
                            return <h4>{subCategoryObject.name}</h4>
                        }
                    }

                }
                return <TitleContainer>
                    <CategoryIcon link={categoryObject.image} height={'50px'} width={'50px'}/>
                    <h3>{categoryObject.name}</h3>
                    {SubCategory()}
                </TitleContainer>
            }
            return 'Hey'
        }
        return 'Hi'
    }

    const isQuerying = router.query.category || router.query.query ? true : false
    return (
        <>
            <SEO description={"Best place to find all the goods."}
                 title={"WiseCat-Shopping online has never been easier"}/>
            <Modal>
                <Layout>
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
                                <div style={{margin: '20px -10px'}}>
                                    <Carousel data={siteOffers} deviceType={deviceType} mobile={1} tablet={2}
                                              desktop={3} laptop={3} tv={3.5} miniTablet={1.5} autoPlay={false}>

                                    </Carousel>
                                </div>
                            </OfferSection>
                            {!isQuerying &&
                            (<>
                                <OfferSection lessPadding={true}>
                                    <div>
                                        <Featured deviceType={deviceType} title={"Top products"}/>
                                    </div>
                                </OfferSection>
                                <OfferSection lessPadding={true}>
                                    <div>
                                        <Featured deviceType={deviceType} title={"Featured Items"}/>
                                    </div>
                                </OfferSection>
                            </>)}

                            <OfferSection lessPadding={true}>
                                <div>
                                    <h3 style={{paddingLeft: "30px"}}>{ProductsGridText()}</h3>
                                    <Products/>
                                </div>
                            </OfferSection>
                        </ContentSection>
                    </MainContentArea>
                    <CartPopUp deviceType={deviceType}/>
                </Layout>
            </Modal>
        </>
    );
}
export default Home;
