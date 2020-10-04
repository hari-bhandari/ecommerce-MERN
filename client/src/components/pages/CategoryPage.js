import React, {useContext, useEffect, useState} from 'react';
import NewlyReleased from "../home/Featured/NewlyReleased";
import ItemContext from "../../context/items/itemContext";
const CategoryPage = ({match,history}) => {
    const itemContext=useContext(ItemContext)
    const{apple,getItemsByQuery,samsung,watch}=itemContext

    useEffect(() => {
        getItemsByQuery(match.params.itemSlug);
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <NewlyReleased data={data}/>
        </div>
    );
};

export default CategoryPage;