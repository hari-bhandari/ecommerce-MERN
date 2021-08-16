import {createContext} from 'react';

type ContextProps = {
    isAuthenticated: boolean,
    user: any,
    error: any,
    token: any,
    loading: boolean,
    register: (data: any) => void,
    loadUser: () => void,
    login: (data: any) => void,
    logout: () => void,
}
const authContext = createContext<Partial<ContextProps>>({})

export default authContext;
