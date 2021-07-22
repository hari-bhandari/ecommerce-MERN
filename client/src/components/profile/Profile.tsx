import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {ProfileContainer} from "@/components/profile/Profile.styles";
import styled from "styled-components";
import UserIcon from "@/assets/icons/UserIcon";
import OrdersIcon from "@/assets/icons/OrdersIcon";
import ReviewsIcon from "@/assets/icons/ReviewsIcon";
const TabListHeader=styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2em;
  font-family: Lato,sans-serif;
`
const Profile = () => {
    return (
        <ProfileContainer>
        <Tabs>
            <TabList>
                <Tab><TabListHeader><UserIcon/> { ' '}My Profile</TabListHeader></Tab>
                <Tab><TabListHeader><OrdersIcon/>My Orders</TabListHeader></Tab>
                <Tab><TabListHeader><ReviewsIcon/>My Reviews</TabListHeader></Tab>
            </TabList>

            <TabPanel>
                <h2>Any content 1</h2>

            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
        </ProfileContainer>
    );
};

export default Profile;