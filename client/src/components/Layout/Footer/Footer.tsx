import React from 'react'
import Newsletter from "@/components/Layout/Footer/newsletter form/Newsletter";
import {Footer,Container,SocialMedia,SubmitButton,NewsletterInput,NewsLetterForm,RightCol} from "@/components/Layout/Footer/Footer.style";
import {Facebook} from "@/assets/icons/Facebook";
import Logo from "@/components/Layout/logo/logo";
import LogoImage from '../../../assets/images/logo.svg';

export function FooterComponent() {
    return (
        <Footer>
            <Container>
                <div className="left-col">
                    <Logo imageUrl={LogoImage} alt={'Logo Image'}/>
                        <div className="social-media">
                            <a href="#"><Facebook/></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                        <p className="rights-text">© 2021 Created By Hari Bhandari, All Rights Reserved.</p>
                </div>

                <RightCol>
                    <h1>Our Newsletter</h1>
                    <div className="border"></div>
                    <p>Enter Your Email to get our news and updates.</p>
                    <NewsLetterForm>
                        <NewsletterInput type="text" className="txtb" placeholder="Enter Your Email"/>
                            <SubmitButton type="submit" className="btn" value="submit"/>
                    </NewsLetterForm>
                </RightCol>
            </Container>
        </Footer>
)
}