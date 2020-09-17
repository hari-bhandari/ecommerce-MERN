import React from 'react';
import FeaturedPage from "../home/Featured/FeaturedPage";
import NewlyReleased from "../home/Featured/NewlyReleased";

const HomePage = () => {
    return (
        <div className="mt-8">
            <FeaturedPage/>
            <NewlyReleased/>
            <NewlyReleased/>
        </div>
    );
};

export default HomePage;