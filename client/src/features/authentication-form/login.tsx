import React, {useContext} from 'react';
import {
    Button,
    Container,
    Divider,
    Heading,
    LinkButton,
    Offer,
    OfferSection,
    SubHeading,
    Wrapper,
} from './authentication-form.style';
// @ts-ignore
import {closeModal} from '@haribhandari/react-popup-modal';
import {Input} from 'components/Others/forms/input';
import {useLoginForm} from "@/hooks/useLoginForm";
import axios from "axios";
import {API_BASE_URL} from "@/utils/config";
import Toast from "light-toast";
import {JSONConfig} from "@/axiosHeaders";
import LoginWithSocials from "@/features/authentication-form/LoginWithSocials";
import authContext from "@/context/auth/authContext";

const SignInModal: React.FC<{ setCurrentForm: (value: 'signUp' | 'forgotPass' | 'signIn') => void }> = ({setCurrentForm}) => {
    const auth = useContext(authContext);
    const {login, loadUser} = auth;
    const toggleSignUpForm = () => {
        setCurrentForm('signUp')
    };


    const toggleForgotPassForm = () => {
        setCurrentForm('forgotPass')
    };
    const {inputs, handleInputChange} = useLoginForm();


    const loginCallback = async (e) => {
        e.preventDefault()
        try {
            const {data} = await axios.post(
                `${API_BASE_URL}/api/v1/auth/login`,
                {email: inputs.email, password: inputs.password},
                JSONConfig
            )
            login(data)
            localStorage.setItem('userInfo', JSON.stringify(data))
            localStorage.setItem('token', JSON.stringify(data.token))
            await loadUser()
            Toast.success('Successfully logged in')

        } catch (error) {
            Toast.fail(error.response.data.error + ', Please try again')
        }
    };

    return (
        <Wrapper>
            <Container>
                <Heading>
                    Welcome Back
                </Heading>

                <SubHeading>
                    Login with your email &amp; password
                </SubHeading>
                <form onSubmit={loginCallback}>
                    <Input
                        type='email'
                        placeholder="Email Address"
                        name={"email"}
                        onChange={handleInputChange} value={inputs.email}
                        required
                        height='48px'
                    />

                    <Input
                        type='password'
                        placeholder="Password (min 6 characters)"
                        name={"password"}
                        onChange={handleInputChange} value={inputs.password}
                        required
                        height='48px'
                    />

                    <Button
                        variant='primary'
                        size='big'
                        style={{width: '100%'}}
                        type='submit'
                    >
                        Continue </Button>
                </form>
                <Divider>
          <span>
            or
          </span>
                </Divider>

                <LoginWithSocials/>


                <Offer style={{padding: '20px 0'}}>
                    Don't have any account?{' '}
                    <LinkButton onClick={toggleSignUpForm}>
                        Sign Up
                    </LinkButton>
                </Offer>
            </Container>

            <OfferSection>
                <Offer>
                    Forgot your password?
                    <LinkButton onClick={toggleForgotPassForm}>
                        Reset It
                    </LinkButton>
                </Offer>
            </OfferSection>
        </Wrapper>
    );
}
export default SignInModal
