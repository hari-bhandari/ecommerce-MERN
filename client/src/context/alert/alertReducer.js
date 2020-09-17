import { SET_ALERT, REMOVE_ALERT } from '../types';
export default (state, action) => {
    switch (action.type) {
        case SET_ALERT:
            return [...state, action.payload];
        default:
            return state;
    }
};