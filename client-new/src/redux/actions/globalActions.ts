import {GLOBAL, FORM, AUTH} from "../defines";
import axios from "axios";
import setAuthToken from "../setAuthToken";
import {message} from "antd";

export const setGlobalCurrency = (cur:string) => ({
    type: GLOBAL.SET_CURRENCY,
    cur,
});

export const setGlobalCategory = (category:string) => ({
    type: GLOBAL.SET_CATEGORY,
    category,
});
export const setCurrentForm = (form:string) => ({
    type: FORM.SET_CURRENT_FORM,
    form,
});

export const setGlobalSearch = (keyword:string) => ({
    type: GLOBAL.SET_SEARCH,
    keyword,
});


export const login = (email:string, password:string) => async (dispatch:any) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const {data} = await axios.post(
            'http://localhost:5000/api/v1/auth/login',
            {email, password},
            config
        )

        dispatch({
            type: AUTH.LOG_IN,
            payload: data,
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
        localStorage.setItem('token', JSON.stringify(data.token))
        await loadUser()

    } catch (error) {
        dispatch({
            type: AUTH.LOG_IN_ERROR,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
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
    }
    try {
        const res = await axios.get('http://localhost:5000/api/v1/auth/me');
        dispatch({
            type: AUTH.LOAD_USER,
            payload: res.data
        })

    } catch (err) {
        message.error(err.response.data.error)
        dispatch({
            type: AUTH.LOAD_USER_FAIL,
            payload: err.response.data.error
        })
    }
};
export const createOrder = (order:object) => async (dispatch:any) => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }

        const { data } = await axios.post(`http://localhost:5000/api/orders`, order, config)

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
        message.warn('Something went wrong. Try again later')
    }
}

export const register = (name:string, email:string, password:string, role:any) => async (dispatch:any) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const {data} = await axios.post(
            'http://localhost:5000/api/users',
            {name, email, password, role},
            config
        )

        dispatch({
            type: AUTH.SIGN_UP,
            payload: data,
        })
        await loadUser()

        localStorage.setItem('userInfo', JSON.stringify(data))
        localStorage.setItem('token', JSON.stringify(data.token))
    } catch (error) {
        message.error(error.response && error.response.data.message
            ? error.response.data.message
            : error.message)

        dispatch({
            type: AUTH.SIGN_UP_ERROR,

            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}