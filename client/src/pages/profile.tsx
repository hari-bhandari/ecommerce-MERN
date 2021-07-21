import React from 'react';
import {SEO} from "@/components/Others/seo";
import ProfileComponent from "@/components/profile/Profile";
const Profile = () => {
    return (
            <>
                <SEO title={'My profile'} description={''}/>
                <ProfileComponent/>
            </>
    );
};

export default Profile;