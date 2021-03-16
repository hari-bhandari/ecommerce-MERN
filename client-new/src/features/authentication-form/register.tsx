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
import { FormattedMessage, useIntl } from 'react-intl';

const SignupModal:React.FC<{setCurrentForm:(value:'signUp'|'forgotPass'|'signIn')=>void}>=({setCurrentForm})=> {
  const toggleSignInForm = () => {
    setCurrentForm('signIn')
  };

  return (
    <Wrapper>
      <Container>
        <Heading>
          <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
        </Heading>
        <SubHeading>
          Every fill is required in sign up
        </SubHeading>
        <Input
          type='email'
          placeholder='Email Address or Contact No.'
          height='48px'
          backgroundColor='#F7F7F7'
          mb='10px'/>
        <Input
          type='email'
          placeholder= 'Password (min 6 characters)'
          height='48px'
          backgroundColor='#F7F7F7'
          mb='10px'
        />
        <HelperText style={{ padding: '20px 0 30px' }}>
          <FormattedMessage
            id='signUpText'
            defaultMessage="By signing up, you agree to Pickbazar's"
          />
          &nbsp;
          <Link href='/'>
            <a>
              <FormattedMessage
                id='termsConditionText'
                defaultMessage='Terms &amp; Condition'
              />
            </a>
          </Link>
        </HelperText>
        <Button variant='primary' size='big' width='100%' type='submit'>
          <FormattedMessage id='continueBtn' defaultMessage='Continue' />
        </Button>
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
          <FormattedMessage
            id='continueFacebookBtn'
            defaultMessage='Continue with Facebook'
          />
        </Button>
        <Button
          variant='primary'
          size='big'
          style={{ width: '100%', backgroundColor: '#4285f4' }}
        >
          <IconWrapper>
            <Google />
          </IconWrapper>
          <FormattedMessage
            id='continueGoogleBtn'
            defaultMessage='Continue with Google'
          />
        </Button>
        <Offer style={{ padding: '20px 0' }}>
          Already have an account?{' '}
          <LinkButton onClick={toggleSignInForm}>
            <FormattedMessage id='loginBtnText' defaultMessage='Login' />
          </LinkButton>
        </Offer>
      </Container>
    </Wrapper>
  );
}
export default SignupModal
