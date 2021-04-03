import React, { useContext } from 'react';
import Link from 'next/link';
import { Input } from 'components/forms/input';
import {
  Button,
  IconWrapper,
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  HelperText,
  Offer,
  // Input,
  Divider,
  LinkButton,
} from './authentication-form.style';
import { Facebook } from 'assets/icons/Facebook';
import { Google } from 'assets/icons/Google';
import {useLoginForm} from "@/hooks/useLoginForm";
import {useDispatch} from "react-redux";
import {register} from "@/redux/actions/globalActions";

const SignupModal:React.FC<{setCurrentForm:(value:'signUp'|'forgotPass'|'signIn')=>void}>=({setCurrentForm})=> {
  const toggleSignInForm = () => {
    setCurrentForm('signIn')
  };
  const dispatch=useDispatch()
  const {inputs, handleInputChange} = useLoginForm();
  const onSubmit=(e)=>{
      e.preventDefault()
      dispatch(register(inputs.firstName,inputs.lastName,inputs.email,inputs.password,'user'))
  }


  return (
    <Wrapper>
      <Container>
        <Heading>
          Sign Up
        </Heading>
        <SubHeading>
          Every fill is required in sign up
        </SubHeading>
        <form onSubmit={onSubmit}>
        <Input
            type='text'
            placeholder= 'First name'
            height='48px'
            backgroundColor='#F7F7F7'
            mb='10px'
            name='firstName'
            onChange={handleInputChange} value={inputs.firstName}

        />
          <Input
              type='text'
              placeholder= 'Last name'
              height='48px'
              backgroundColor='#F7F7F7'
              mb='10px'
              name='lastName'
              onChange={handleInputChange} value={inputs.lastName}

          />
        <Input
          type='email'
          placeholder='Email Address'
          height='48px'
          backgroundColor='#F7F7F7'
          mb='10px'
          name='email'
          onChange={handleInputChange} value={inputs.email}

        />
        <Input
          type='password'
          placeholder= 'Password (min 6 characters)'
          height='48px'
          backgroundColor='#F7F7F7'
          mb='10px'
          name='password'
          onChange={handleInputChange} value={inputs.password}

        />
        <HelperText style={{ padding: '20px 0 30px' }}>
          By signing up, you agree to
          &nbsp;
          <Link href='/'>
            <a>
              Terms &amp; Condition
            </a>
          </Link>
        </HelperText>
        <Button variant='primary' size='big' width='100%' type='submit'>
          Continue
        </Button>
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
        >
          <IconWrapper>
            <Google />
          </IconWrapper>
          Continue with Google
        </Button>
        <Offer style={{ padding: '20px 0' }}>
          Already have an account?{' '}
          <LinkButton onClick={toggleSignInForm}>
            Login
          </LinkButton>
        </Offer>
      </Container>
    </Wrapper>
  );
}
export default SignupModal
