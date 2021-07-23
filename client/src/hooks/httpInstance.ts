
import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import setAuthToken from "@/redux/setAuthToken";

const instance: AxiosInstance = axios.create({
    baseURL: '/',
});

const requestHandler = (config: AxiosRequestConfig) => {
    const token=localStorage.token.replaceAll('"','')
    setAuthToken(token)
    config.headers['Authorization']=`Bearer ${token}`

    config.timeout = 30000;
    return config;
};

instance.interceptors.request.use(requestHandler);
instance.interceptors.response.use(undefined, (error: AxiosError) => {
    // handle error
    if (axios.isCancel(error)) {
        console.log(`request cancelled`);
    }
    return Promise.reject(error.response?.data?.error);
});

export default instance;
