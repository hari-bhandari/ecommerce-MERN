import React, {useContext, useEffect} from 'react';
import FeaturedPage from "../home/Featured/FeaturedPage";
import NewlyReleased from "../home/Featured/NewlyReleased";
import ItemContext from "../../context/items/itemContext";
const HomePage = () => {
    const itemContext=useContext(ItemContext)
    const{apple,getItemsByQuery,samsung,watch}=itemContext

    useEffect(()=>{
        getItemsByQuery('apple')
        getItemsByQuery('samsung')
        getItemsByQuery('watch')
    },[])
    return (
        <div style={{marginTop:'4em'}}>
            <FeaturedPage/>

            <NewlyReleased title={"Newly Released Iphones"} data={apple}/>
            <NewlyReleased title={"Best Rated Samsung Phones"} data={samsung}/>
            <NewlyReleased title={"The smart watches you might like"} data={watch}/>
        </div>
    );
};

export default HomePage;