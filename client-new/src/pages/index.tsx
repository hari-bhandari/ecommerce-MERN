import Sidebar from "../components/Layout/header/sidebar/sidebar";
import React, {useEffect} from "react";
// @ts-ignore
import {Modal} from '@redq/reuse-modal';
import Carousel from "../components/carousel/carousel";
import {
    MainContentArea,
    SidebarSection,
    ContentSection,
    OfferSection,
    MobileCarouselDropdown,
} from '../../styles/pages.style';
import {siteOffers} from "@/siteOffers";
import {CATEGORY_MENU_ITEMS} from "@/components/Layout/header/site-navigation";
import StoreNav from "@/components/Layout/store-nav/store-nav";
import Featured from "../components/Featured/Featured";
import Layout from "../components/Layout/layout";

type SidebarCategoryProps = {
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
};
import {useDispatch} from "react-redux";
import {loadUser} from "@/redux/actions/globalActions";
import dynamic from "next/dynamic";
import Products from "../components/Product/grid/productGrid.style";
import {SEO} from "@/components/seo";

const CartPopUp = dynamic(() => import("../features/carts/cart-popup"), {
    ssr: false,
});

const Home: React.FC<SidebarCategoryProps> = ({deviceType}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
    }, [])
    return (
        <>
            <SEO description={"Best place to find all the goods."}
                 title={"WiseCat-Shopping online has never been easier"}/>

                <Modal>

                    <Layout>
                        <MobileCarouselDropdown>
                            <StoreNav items={CATEGORY_MENU_ITEMS}/>
                            <Sidebar deviceType={deviceType}/>
                        </MobileCarouselDropdown>
                        <MainContentArea>
                            <SidebarSection>
                                <Sidebar deviceType={deviceType}/>
                            </SidebarSection>
                            <ContentSection>
                                <OfferSection>
                                    <div style={{margin: '20px -10px'}}>
                                        <Carousel deviceType={deviceType} data={siteOffers} mobile={1} tablet={2}
                                                  desktop={3}/>
                                    </div>
                                </OfferSection>

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
                                <OfferSection lessPadding={true}>
                                    <div>
                                        <h3 style={{paddingLeft: "30px"}}>More Products</h3>

                                        <Products deviceType={deviceType}/>
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
