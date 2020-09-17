import React, {useReducer} from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import {SET_ALERT, REMOVE_ALERT} from '../types';
const AlertState = props => {
    const initialState = [];

    const [state, dispatch] = useReducer(alertReducer, initialState);
    const setAlert = (msg, type, timeout = 5000) => {
        const id = uuidv4();
        dispatch({
            type: SET_ALERT,
            payload: {msg, type, id},
        });

    };
    return (
        <AlertContext.Provider
            value={{
                alerts: state,
                setAlert
            }}>
            {props.children}
        </AlertContext.Provider>
    );
};

export default AlertState;