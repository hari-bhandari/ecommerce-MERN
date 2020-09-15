
import {

} from '../types'
export default (state,action)=>{
    switch(action.type){
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }


        default:
            return state
    }
}