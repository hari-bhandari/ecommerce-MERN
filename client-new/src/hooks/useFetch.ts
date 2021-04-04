import React, { useState, useEffect } from 'react';
import http from './httpInstance';
import axios, { AxiosRequestConfig } from 'axios';

interface memStoreTypes {
    [x: string]: string;
}
const memStore: memStoreTypes = {};

interface useFetchProps {
    (
        url: string,
        props?: {
            cache?: boolean;
        },
        axiosOptions?: AxiosRequestConfig
    ): [any, boolean, any, React.Dispatch<React.SetStateAction<{}>>];
}

const useFetch: useFetchProps = (url, props = {}, axiosOptions = {}) => {
    console.log(url)
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);
    const [shouldRefetch, reFetch] = useState({});

    useEffect(() => {
        let unmounted = false;
        let source = axios.CancelToken.source();
        const getData = async () => {
            setIsLoading(true);
            try {
                let httpConfig: AxiosRequestConfig = {
                    method: 'GET',
                    url: url,
                    ...axiosOptions,
                    cancelToken: source.token
                };
                let res = await http(httpConfig);
                console.log(res)
                if (!unmounted) {
                    setIsLoading(false);
                    setData(res.data);
                    if (props.cache) memStore[url] = res.data;
                }
            } catch (err) {
                if (!unmounted) {
                    console.log(err);
                    setIsLoading(false);
                    setError(err);
                }
            }
        };

        if (memStore[url] && !unmounted) {
            setIsLoading(false);
            setData(memStore[url]);
        } else {
            getData();
        }

        return () => {
            unmounted = true;
            source.cancel(`${url} canceled`);
        };
    }, [url, shouldRefetch]);

    return [data, isLoading, error, reFetch];
};

export default useFetch;
