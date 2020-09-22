import React, {useContext, useEffect} from 'react';
import FeaturedPage from "../home/Featured/FeaturedPage";
import NewlyReleased from "../home/Featured/NewlyReleased";
import ItemContext from "../../context/items/itemContext";
const HomePage = () => {
    const itemContext=useContext(ItemContext)
    const{apple,getItemsByQuery}=itemContext

    useEffect(()=>{
        getItemsByQuery('apple')
    },[])
    return (
        <div style={{marginTop:'4em'}}>
            <FeaturedPage/>
            <NewlyReleased title={"Newly Released Items"}/>
            <NewlyReleased title={"best Sellers"}/>
        </div>
    );
};

export default HomePage;