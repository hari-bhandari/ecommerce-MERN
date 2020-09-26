import {
    GET_TOKEN, REMOVE_TOKEN, LOAD_USER, LOAD_USER_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_ERRORS, ADD_TO_CART_ERROR, CART_COUNT_ERROR, CART_COUNT
} from '../types'
export default (state,action)=>{
    switch(action.type){
        case LOAD_USER:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user:action.payload
            }

        case REGISTER_SUCCESS:
        case GET_TOKEN:
            localStorage.setItem('token',action.payload)
            return{
                ...state,
                token:action.payload,
                isAuthenticated:true,
                loading:false
            }
        case REGISTER_FAIL:
        case REMOVE_TOKEN:
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                isAuthenticated: false,
                loading: false,
                user:null,
                error:action.payload

            }
        case ADD_TO_CART_ERROR:
        case CART_COUNT_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case CART_COUNT:
            return {
                ...state,
                cartCount:action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };

        default:
            return state
    }
}