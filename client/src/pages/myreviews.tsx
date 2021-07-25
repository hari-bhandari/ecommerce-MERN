import React from 'react';
import {SEO} from "@/components/Others/seo";
import ProfileComponent from "@/components/profile/Profile";
const MyReviews = () => {
    return (
        <>
            <SEO title={'My Reviews'} description={''}/>
            <ProfileComponent index={2}/>
        </>
    );
};

export default MyReviews;