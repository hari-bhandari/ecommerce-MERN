import React from 'react';
import {SEO} from "@/components/Others/seo";
import ProfileComponent from "@/components/profile/Profile";
const Order = () => {
    return (
        <>
            <SEO title={'My Orders'} description={''}/>
            <ProfileComponent index={0}/>
        </>
    );
};

export default Order;