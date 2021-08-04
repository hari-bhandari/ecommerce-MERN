import React, {useContext, useEffect} from 'react';
import AuthContext from "../../context/auth/authContext";

const Logout = () => {
    const authContext=useContext(AuthContext);
    const {logout}=authContext;
    useEffect(()=>{
        logout()
    })
    return (
        <h3 className={'my-auto'}>
            logging you out.
        </h3>
    );
};

export default Logout;
