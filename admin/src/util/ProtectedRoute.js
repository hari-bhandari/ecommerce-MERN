import React, {useContext, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const ProtectedRoute = ({component: Component, ...rest}) => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated, loading} = authContext;
    return (

        <Route
            {...rest}
            render={props =>
                !isAuthenticated && !loading ? (
                    <Redirect to='/'/>
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default ProtectedRoute;