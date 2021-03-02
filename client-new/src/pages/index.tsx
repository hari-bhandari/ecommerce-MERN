import Sidebar from "../header/sidebar/sidebar";
import React from "react";
import styled from "styled-components";
// @ts-ignore
import { Modal } from '@redq/reuse-modal';
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
type SidebarCategoryProps = {
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
};

const Home:React.FC<SidebarCategoryProps>=({deviceType})=> {
  return (
    <>
        <Modal>
            <MobileCarouselDropdown>
                <StoreNav items={CATEGORY_MENU_ITEMS} />
                <Sidebar  deviceType={deviceType} />
            </MobileCarouselDropdown>

            <MainContentArea>
                <SidebarSection>
                    <Sidebar deviceType={deviceType} />
                </SidebarSection>
                <ContentSection>
                    <OfferSection>
                        <div style={{ margin: '0 -10px' }}>
                            <Carousel deviceType={deviceType} data={siteOffers} isRtl={false}/>
                        </div>
                    </OfferSection>
                </ContentSection>
            </MainContentArea>
        </Modal>
    </>
  );
}
export default  Home;