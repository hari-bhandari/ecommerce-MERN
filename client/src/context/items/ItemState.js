
import React, {useReducer} from "react";
import itemContext from "./itemContext";
import itemReducer from "./itemReducer"
import axios from "axios";

const ItemState=props=>{

    const initialState={
        items:null,
        currentItem:null,
        error:null,
        loading:true,
        filtered:null
    }
    const[state,dispatch]=useReducer(itemReducer,initialState)
    //get one item

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