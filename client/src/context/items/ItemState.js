
import React, {useReducer} from "react";
import itemContext from "./itemContext";
import itemReducer from "./itemReducer"
import axios from "axios";

const BootcampState=props=>{

    const initialState={
        items:null,
        currentBootcamp:null,
        error:null,
        loading:true,
        filtered:null
    }
    const[state,dispatch]=useReducer(itemContext,initialState)
    //get one bootCamp

    return(
        <bootcampContext.Provider value={{
            items:state.items,
            currentBootcamp:state.currentBootcamp,
            loading:state.loading,
            error:state.error,
            filtered:state.filtered,

        }}>{props.children}</bootcampContext.Provider>
    )

}
export default BootcampState;