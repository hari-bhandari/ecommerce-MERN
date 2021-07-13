import {useState} from 'react'
const useLoginForm = () => {
    const [inputs, setInputs] = useState<any>({});
    const handleInputChange = (event:any) => {
        event.persist();
        setInputs((inputs: any) => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
        handleInputChange,
        inputs
    };
}
export {useLoginForm}