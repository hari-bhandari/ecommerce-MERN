import React, {useContext, useEffect} from 'react';
import FeaturedPage from "../home/Featured/FeaturedPage";
import NewlyReleased from "../home/Featured/NewlyReleased";
import ItemContext from "../../context/items/itemContext";
import AuthContext from "../../context/auth/authContext";
const HomePage = () => {
    const itemContext=useContext(ItemContext)
    const{apple,getItemsByQuery,samsung,watch}=itemContext

    const authContext=useContext(AuthContext);
    const {loadUser}=authContext;


    useEffect(()=>{

        getItemsByQuery('apple')
        getItemsByQuery('samsung')
        getItemsByQuery('watch')
        loadUser()
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