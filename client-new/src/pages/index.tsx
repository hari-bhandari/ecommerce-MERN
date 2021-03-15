import Sidebar from "../header/sidebar/sidebar";
import React from "react";
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
import {CATEGORY_MENU_ITEMS} from "@/header/site-navigation";
import StoreNav from "@/components/store-nav/store-nav";
import Featured from "../../components/Featured/Featured";
import Layout from "../../components/layout";

type SidebarCategoryProps = {
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
};

const Home: React.FC<SidebarCategoryProps> = ({deviceType}) => {
    return (
        <>
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
                        </ContentSection>
                    </MainContentArea>
                </Layout>
            </Modal>
        </>
    );
}
export default Home;