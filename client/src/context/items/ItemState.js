
import React, {useReducer} from "react";
import itemContext from "./itemContext";
import itemReducer from "./itemReducer"
import axios from "axios";
import {GET_ITEMS_QUERY,GET_ITEMS_QUERY_ERROR} from '../types'
const ItemState=props=>{

    const initialState={
        items:null,
        currentItem:null,
        error:null,
        loading:true,
        filtered:null,
        apple:null,
        samsung:null,
        watch:null,
    }
    const[state,dispatch]=useReducer(itemReducer,initialState)
    //get item by query
    const getItemsByQuery=async (query)=>{
        try {
            const res = await axios.get(`/api/items/?category=${query}`);

            dispatch({
                type: GET_ITEMS_QUERY,
                payload: [query,res.data.data]
            });


        } catch (err) {
            dispatch({
                type: GET_ITEMS_QUERY_ERROR,
                payload: err.response.data.error
            });
        }
    }


    return(
        <itemContext.Provider value={{
            items:state.items,
            currentItem:state.currentItem,
            loading:state.loading,
            error:state.error,
            filtered:state.filtered,

        }}>{props.children}</itemContext.Provider>
    )

}
export default ItemState;