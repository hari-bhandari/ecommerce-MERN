import React from 'react'
import {Footer,Container,SocialMedia,SubmitButton,NewsletterInput,NewsLetterForm,RightCol} from "@/components/Layout/Footer/Footer.style";
import {Facebook} from "@/assets/icons/Facebook";
import Logo from "@/components/Layout/logo/logo";
import LogoImage from '../../../assets/images/logo.svg';
import TwitterIcon from "@/assets/icons/TwitterIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import Newsletter from "@/components/Layout/Footer/newsletter form/Newsletter";

export function FooterComponent() {
    // @ts-ignore
    return (
        <Footer>
            <Container>
                <div className="left-col">
                    <Logo imageUrl={LogoImage} alt={'Logo Image'}/>
                        <SocialMedia>
                            <a href="https://www.facebook.com/www.haribhandari.me"><Facebook height={'25px'} width={'25px'}/></a>
                            <a href="https://twitter.com/_hari_bhandari"><TwitterIcon height={'25px'} width={'25px'}/></a>
                            <a href="https://www.instagram.com/_hari_bhandari/"><InstagramIcon width={'25px'} height={'25px'}/></a>
                            <a href="https://www.linkedin.com/in/hari-bhandari-554400140/"><LinkedInIcon width={'25px'} height={'25px'}/></a>
                        </SocialMedia>
                        <p className="rights-text">© 2021 Created By Hari Bhandari, All Rights Reserved.</p>
                </div>

                <RightCol>
                    <h1>Our Newsletter</h1>
                    <div className="border"></div>
                    <p>Enter Your Email to get our news and updates.</p>
                    <Newsletter/>
                </RightCol>
            </Container>
        </Footer>
)
}