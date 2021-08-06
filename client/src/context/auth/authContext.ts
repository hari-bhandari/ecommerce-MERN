import { createContext } from 'react';

const authContext = createContext({
    isAuthenticated:false,
    user:null,
    error:null,
    token:null,
    loading:false,
    register:(data:any)=>{},
    loadUser:()=>{},
    login:(data:any)=>{},
    logout:()=>{},
});

export default authContext;
