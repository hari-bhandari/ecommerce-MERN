import React, {useEffect, useState} from 'react';
import Select from "react-select";
import axios from "axios";
import {PUBLIC_URL} from "../../util/config";

const SubCategorySelect = ({categoryID,initialValue,setValue,setSubCategory,value}) => {
    const [fetchedData,setFetchedData]=useState([])
    const [disabled,setDisabled]=useState(false)
    const effectHelper=async ()=>{
        if(typeof categoryID ==='string'){
            const res = await axios.get(`${PUBLIC_URL}/api/v1/subcategory/${categoryID}`)
            setFetchedData(res.data.data)
            setDisabled(false)

        }
    }
    useEffect(()=>{
       effectHelper().then(()=>{})
    },[categoryID])


    const onchangeSelect = (item) => {
        setValue(item)
        if(setSubCategory){
            setSubCategory(item.subCategory)
        }
    };


    return (
        <Select
            value={value}
            placeholder={initialValue}
            onChange={onchangeSelect}
            options={fetchedData}
            getOptionValue={(option) => option.id}
            getOptionLabel={(option) => option.name}
            isDisabled={disabled}
        />
    );
};

export default SubCategorySelect;
