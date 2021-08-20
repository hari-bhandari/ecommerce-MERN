import React, {useContext} from 'react';
import {GoogleLogin} from 'react-google-login';
import {Button, IconWrapper} from "@/features/authentication-form/authentication-form.style";
import {Google} from "@/assets/icons/Google";
import axios from "axios";
import {API_BASE_URL} from "@/utils/config";
import {JSONConfig} from "@/axiosHeaders";
import authContext from "@/context/auth/authContext";
import Toast from "light-toast";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {Facebook} from "@/assets/icons/Facebook";

const LoginWithSocials = () => {
    const auth = useContext(authContext);
    const { login,loadUser } = auth;

    // const handleFetchedToken=(data:any)=>{}
    const onSuccess=async (data:any,type:string)=>{
        try {
            const token = type === 'facebook' ? data.accessToken : data.tokenId
            Toast.loading('Loading...')

            const res = await axios.post(
                `${API_BASE_URL}/api/v1/auth/${type}`,
                {token},
                JSONConfig
            )
            login?.(res.data) //running login function only if login is a valid function

            localStorage.setItem('userInfo', JSON.stringify(res.data))
            localStorage.setItem('token', JSON.stringify(res.data.token))
            await loadUser?.()//running load user if it's valid
            Toast.hide()
            Toast.success('Successfully logged in')

        } catch (error) {
            Toast.fail(error.response.data.error +', Please try again')
        }
    }
    const onFailure=(e)=>{
        Toast.fail(e?.details || 'Something went wrong. Please try again later or contact the admin')
    }
    return (
        <>
            {
                // @ts-ignore
                <GoogleLogin clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                             onSuccess={(data) => {
                                 onSuccess(data, 'google')
                             }}
                             onFailure={onFailure}
                             cookiePolicy={'single_host_origin'}
                             style={{background: '#4285F4'}}
                             render={renderProps => (
                                 <Button
                                     variant='primary'
                                     size='big'
                                     style={{width: '100%', backgroundColor: '#4285f4', marginBottom: '4px'}}
                                     onClick={renderProps.onClick} disabled={renderProps.disabled}
                                 >
                                     <IconWrapper>
                                         <Google/>
                                     </IconWrapper>
                                     Continue with Google
                                 </Button>
                             )}
                />
            }
            <FacebookLogin
                appId={process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID}
                autoLoad={false}
                fields="name,email,picture"
                callback={(data) => {
                    onSuccess(data, 'facebook')
                }}
                onFailure={onFailure}
                render={renderProps => (
                    <Button
                        variant='primary'
                        size='big'
                        style={{
                            width: '100%',
                            backgroundColor: '#4267b2',
                            marginBottom: 10,
                        }}
                        onClick={renderProps.onClick} disabled={renderProps.disabled}
                    >
                        <IconWrapper>
                            <Facebook />
                        </IconWrapper>
                        Continue with Facebook
                    </Button>
                )}
            />
        </>
    );
};

export default LoginWithSocials;