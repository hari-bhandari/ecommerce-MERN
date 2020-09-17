import React, {useReducer} from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';

const AlertState = props => {
    const initialState = [];

    const [state, dispatch] = useReducer(alertReducer, initialState);
    return (
        <AlertContext.Provider
            value={{
                alerts: state,
            }}>
            {props.children}
        </AlertContext.Provider>
    );
};

export default AlertState;