import React, {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {ProfileContainer} from "@/components/profile/Profile.styles";
import styled from "styled-components";
import UserIcon from "@/assets/icons/UserIcon";
import OrdersIcon from "@/assets/icons/OrdersIcon";
import ReviewsIcon from "@/assets/icons/ReviewsIcon";
import ProfileSetting from "@/components/profile/ProfileSetting";
import MyReviews from "@/components/profile/MyReviews";
import useFetch from "@/hooks/useFetch";
import {API_BASE_URL} from "@/utils/config";
import MyOrders from "@/components/profile/Orders/MyOrders";
const TabListHeader=styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2em;
  font-family: Lato,sans-serif;
`
const Profile:React.FC<{index:number}> = ({index}) => {
    const [data, isLoading]=useFetch(`${API_BASE_URL}/api/v1/products/MyReviews`)
    const [tabIndex, setTabIndex] = useState(index);

    return (
        <ProfileContainer>
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
            <TabList>
                <Tab><TabListHeader><OrdersIcon/> { ' '} My Orders</TabListHeader></Tab>
                <Tab><TabListHeader><UserIcon/> { ' '}My Profile</TabListHeader></Tab>
                <Tab><TabListHeader><ReviewsIcon/> { ' '}My Reviews</TabListHeader></Tab>
            </TabList>
            <TabPanel>
                <MyOrders/>
            </TabPanel>
            <TabPanel>
                <ProfileSetting/>
            </TabPanel>

            <TabPanel>
                {isLoading?<div>Loading...</div>:<MyReviews data={data} isLoading={isLoading} />}
            </TabPanel>
        </Tabs>
        </ProfileContainer>
    );
};

export default Profile;