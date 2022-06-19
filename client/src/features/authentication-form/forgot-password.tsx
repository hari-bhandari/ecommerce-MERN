import React, {useContext, useEffect} from 'react';
import {Button, Container, Heading, LinkButton, Offer, SubHeading, Wrapper,} from './authentication-form.style';
import {Input} from 'components/Others/forms/input';
import {useRouter} from "next/router";
import {Label} from "@/components/Others/forms/label";
import authContext from "@/context/auth/authContext";

const ForgotPasswordModal = () => {
    const router = useRouter()
    const auth = useContext(authContext);
    const {isAuthenticated} = auth;
    const toggleSignInForm = () => {
        router.push('/login')
    };
    useEffect(() => {
        //    if authenticated redirect to home page
        if (isAuthenticated) {
            router.push('/')
        }
    }, [isAuthenticated])
    return (
        <Wrapper>
            <Container style={{paddingBottom: 30}}>
                <Heading>
                    Forgot Password
                </Heading>

                <SubHeading>
                    We'll send you a link to reset your password
                </SubHeading>
                <Label>Email address</Label>
                <Input
                    type='text'
                    placeholder="Email Address or Contact No."
                    height='48px'
                    backgroundColor='#F7F7F7'
                    mb='10px'
                />

        <Button
          variant='primary'
          size='big'
          style={{ width: '100%' }}
          type='submit'
        >
          Reset Password
        </Button>
        <Offer style={{ padding: '20px 0 0' }}>
          Back to{' '}
          <LinkButton onClick={toggleSignInForm}>
            Login
          </LinkButton>
        </Offer>
      </Container>
    </Wrapper>
  );
}
export default ForgotPasswordModal
