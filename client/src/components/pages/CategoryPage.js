import React, {useEffect, useState} from 'react';
import NewlyReleased from "../home/Featured/NewlyReleased";
import axios from "axios";

const CategoryPage = ({match}) => {
    const[data,setData]=useState(null)
    const getItemsByQuery=async (query)=>{
        try {
            const res = await axios.get(`/api/items/?category=${query}&limit=4`);
            setData(res.data.data)
        } catch (err) {
            setData(null)
        }
    }

    useEffect(() => {

        getItemsByQuery(match.params.login);
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <NewlyReleased data={data}/>
        </div>
    );
};

export default CategoryPage;