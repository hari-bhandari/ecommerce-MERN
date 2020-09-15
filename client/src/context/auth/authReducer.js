
import {
GET_TOKEN,REMOVE_TOKEN
} from '../types'
export default (state,action)=>{
    switch(action.type){
        case GET_TOKEN:
            localStorage.setItem('token',action.payload)
            return{
                ...state,
                token:action.payload,
                isAuthenticated:true,
                loading:false
            }
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
            return {
                ...state,
                error: null
            }


        default:
            return state
    }
}