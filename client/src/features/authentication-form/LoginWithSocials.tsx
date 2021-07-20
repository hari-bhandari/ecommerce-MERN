import React from 'react';
import { GoogleLogin } from 'react-google-login';
import {Button, IconWrapper} from "@/features/authentication-form/authentication-form.style";
import {Google} from "@/assets/icons/Google";
import axios from "axios";
import {API_BASE_URL} from "@/utils/config";
import {JSONConfig} from "@/axiosHeaders";
import {loadUser, login} from "@/redux/actions/globalActions";
import Toast from "light-toast";
import {useDispatch} from "react-redux";

const LoginWithSocials:React.FC<{ GoogleButton?:any,FacebookButton?:any }> = ({GoogleButton}) => {
    const dispatch=useDispatch()
    const onSuccess=async (data)=>{
        try {
            Toast.loading('Loading...')
            const res = await axios.post(
                `${API_BASE_URL}/api/v1/auth/google`,
                {token:data.tokenId},
                JSONConfig
            )
            dispatch(login(res.data))

            localStorage.setItem('userInfo', JSON.stringify(res.data))
            localStorage.setItem('token', JSON.stringify(res.data.token))
            await dispatch(loadUser())
            Toast.hide()
            Toast.success('Successfully logged in')

        } catch (error) {
            Toast.fail(error.response.data.error +', Please try again')
        }
    }
    const onFailure=(e)=>{
        console.log(e)
    }
    return (
            <GoogleLogin
                clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{background:'#4285F4'}}
                render={renderProps => (
                    <Button
                    variant='primary'
                    size='big'
                    style={{ width: '100%', backgroundColor: '#4285f4',marginBottom:'4px' }}
                    onClick={renderProps.onClick} disabled={renderProps.disabled}
                    >
                    <IconWrapper>
                    <Google />
                    </IconWrapper>
                    Continue with Google
                    </Button>
                )}
            />
    );
};

export default LoginWithSocials;