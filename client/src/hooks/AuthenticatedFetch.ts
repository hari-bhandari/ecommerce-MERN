import React from "react";
import axios from "axios";
import {useSelector} from "react-redux";
const AuthenticatedFetch = (url:string) => {
    const {user} = useSelector((state:any) => state.globalReducer);
    const [data, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const fetchData = async () => {
        try {
            const {data} = await axios.get(url,{
                headers:{
                    "Authorization": `Bearer ${user.token}`
                }
            });
            setResponse(data);
            setIsLoading(false)
        } catch (error) {
            setError(error);
        }
    };
    React.useEffect(() => {
        fetchData();
    }, [url]);
    return [data, isLoading, error ];
};
export default AuthenticatedFetch