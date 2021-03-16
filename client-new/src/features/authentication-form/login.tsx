import React, {useContext, useState} from 'react';
import {
  LinkButton,
  Button,
  IconWrapper,
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  OfferSection,
  Offer,
  // Input,
  Divider,
} from './authentication-form.style';
import { Facebook } from 'assets/icons/Facebook';
import { Google } from 'assets/icons/Google';
// @ts-ignore
import { closeModal } from '@redq/reuse-modal';
import { Input } from 'components/forms/input';
import {useDispatch} from "react-redux";
import {setCurrentForm} from "@/redux/actions/globalActions";
import {useLoginForm} from "@/hooks/useLoginForm";

const SignInModal:React.FC<{setCurrentForm:(value:'signUp'|'forgotPass'|'signIn')=>void}>=({setCurrentForm})=> {
  const toggleSignUpForm = () => {
    setCurrentForm('signUp')
  };

  const toggleForgotPassForm = () => {
    setCurrentForm('forgotPass')
  };
  const {inputs, handleInputChange} = useLoginForm();

  const onSubmit = () => {
    // e.preventDefault()

  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const loginCallback = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('access_token', `${email}.${password}`);
      closeModal();
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
            style={{ width: '100%' }}
            type='submit'
          >
            Continue          </Button>
        </form>
        <Divider>
          <span>
            or
          </span>
        </Divider>

        <Button
          variant='primary'
          size='big'
          style={{
            width: '100%',
            backgroundColor: '#4267b2',
            marginBottom: 10,
          }}
          onClick={loginCallback}
        >
          <IconWrapper>
            <Facebook />
          </IconWrapper>
          Continue with Facebook
        </Button>

        <Button
          variant='primary'
          size='big'
          style={{ width: '100%', backgroundColor: '#4285f4' }}
          onClick={loginCallback}
        >
          <IconWrapper>
            <Google />
          </IconWrapper>
          Continue with Google
        </Button>

        <Offer style={{ padding: '20px 0' }}>
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
