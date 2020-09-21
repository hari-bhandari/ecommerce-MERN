import {GET_ITEMS_QUERY} from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_ITEMS_QUERY:
            return {
                ...state,
                items:action.payload,
                loading:false

            }
        default:
            return state;
    }
};