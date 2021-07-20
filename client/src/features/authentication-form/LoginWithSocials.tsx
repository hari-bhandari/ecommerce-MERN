import React from 'react';
import { GoogleLogin } from 'react-google-login';
import {Button, IconWrapper} from "@/features/authentication-form/authentication-form.style";
import {Google} from "@/assets/icons/Google";

const LoginWithSocials:React.FC<{ GoogleButton?:any,FacebookButton?:any }> = ({GoogleButton}) => {
    const onSuccess=(data)=>{
        console.log(data)
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