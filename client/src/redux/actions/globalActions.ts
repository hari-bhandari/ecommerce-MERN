import {GLOBAL, FORM, AUTH} from "../defines";
import axios from "axios";
import setAuthToken from "../setAuthToken";
import {API_BASE_URL} from "@/utils/config";

export const setGlobalCurrency = (cur:string) => ({
    type: GLOBAL.SET_CURRENCY,
    cur,
});

export const setGlobalCategory = (category:string) => ({
    type: GLOBAL.SET_CATEGORY,
    category,
});

export const setGlobalSearch = (keyword:string) => ({
    type: GLOBAL.SET_SEARCH,
    keyword,
});
export const login = (data) => ({
    type: AUTH.LOG_IN,
    payload: data,
});
export const register = (data) => ({
    type: AUTH.SIGN_UP,
    payload: data,
});

export const logout = () => (dispatch:any) => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('persist:root')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
    localStorage.removeItem('token')
    dispatch({type: AUTH.LOG_OUT})
    document.location.href = '/'
}
export const loadUser = () => async (dispatch:any) => {
    if (localStorage.token) {
        const token=localStorage.token.replaceAll('"','')
        //sending token to headers
        setAuthToken(token)
        try {
            const res = await axios.get(`${API_BASE_URL}/api/v1/auth/me`);
            dispatch({
                type: AUTH.LOAD_USER,
                payload: res.data.data
            })

        } catch (err) {
            dispatch({
                type: AUTH.LOAD_USER_FAIL,
                payload: err.response.data.error
            })
        }
    }

};
export const createOrder = (order:object) => async (dispatch:any) => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }

        const { data } = await axios.post(`${API_BASE_URL}/api/orders`, order, config)

        dispatch({
            type:AUTH.ORDER_SUCCESS,
            payload: data,
        })

        localStorage.removeItem('cartItems')
        localStorage.removeItem('persist:root')
    } catch (error) {
        const messages =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (messages === 'Not authorized, token failed') {
            dispatch(logout())
        }
    }
}

