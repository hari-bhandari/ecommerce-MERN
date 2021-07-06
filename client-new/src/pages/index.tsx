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

const Home: React.FC<SidebarCategoryProps> = ({deviceType}) => {
    const router = useRouter();
    const {categoryData} = useSelector((state:any) => state.shopReducer);
    const ProductsGridText = () => {
        if(router.query.category){
            if(categoryData!==null){

            }
        }
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
                                    <h3 style={{paddingLeft: "30px"}}>More Products</h3>
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
