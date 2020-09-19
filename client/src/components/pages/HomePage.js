import React from 'react';
import FeaturedPage from "../home/Featured/FeaturedPage";
import NewlyReleased from "../home/Featured/NewlyReleased";

const HomePage = () => {
    return (
        <div style={{marginTop:'4em'}}>
            <FeaturedPage/>
            <NewlyReleased title={"Newly Released Items"}/>
            <NewlyReleased title={"best Sellers"}/>
        </div>
    );
};

export default HomePage;