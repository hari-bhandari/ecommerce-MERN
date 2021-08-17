import React from 'react';
import {Button, Container, Heading, LinkButton, Offer, SubHeading, Wrapper,} from './authentication-form.style';
import {Input} from 'components/Others/forms/input';

const ForgotPasswordModal: React.FC<{ setCurrentForm: (value: 'signUp' | 'forgotPass' | 'signIn') => void }> = ({setCurrentForm}) => {
  const toggleSignInForm = () => {
    setCurrentForm('signIn')
  };
  return (
      <Wrapper>
        <Container style={{paddingBottom: 30}}>
          <Heading>
            Forgot Password
        </Heading>

        <SubHeading>
          We'll send you a link to reset your password
        </SubHeading>

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
