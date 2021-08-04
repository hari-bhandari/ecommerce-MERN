import React, {useContext, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const ProtectedRoute = ({component: Component, ...rest}) => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated, loading} = authContext;
    if(loading){
        return <h5>Loading..</h5>
    }
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