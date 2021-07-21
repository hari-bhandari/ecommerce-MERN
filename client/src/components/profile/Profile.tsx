import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {ProfileContainer} from "@/components/profile/Profile.styles";
const Profile = () => {
    return (
        <ProfileContainer>
        <Tabs>
            <TabList>
                <Tab>My Profile</Tab>
                <Tab>My orders</Tab>
                <Tab>My Reviews</Tab>

            </TabList>

            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
        </ProfileContainer>
    );
};

export default Profile;