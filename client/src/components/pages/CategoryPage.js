import React, {useEffect, useState} from 'react';
import NewlyReleased from "../home/Featured/NewlyReleased";
import axios from "axios";
import { useHistory } from "react-router-dom";
const CategoryPage = ({match}) => {
    const history=useHistory()
    const [data, setData] = useState(null)
    const getItemsByQuery = async (query) => {
        try {
            const res = await axios.get(`/api/items/?category=${query}&limit=12`);
            setData(res.data.data)
        } catch (err) {
            setData('Error')
        }
    }

    useEffect(() => {
        getItemsByQuery(match.params.itemSlug);
        // eslint-disable-next-line
    }, []);
    if (data) {
        if (data == 'Error' || data.length == 0) {
            return (<div>Are you Lost?</div>)
        }
    }
    return (
        <div>
            <NewlyReleased data={data}/>
        </div>
    );
};

export default CategoryPage;