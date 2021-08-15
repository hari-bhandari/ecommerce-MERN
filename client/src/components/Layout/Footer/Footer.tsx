import React from 'react'
import {Container, RightCol, SocialMedia} from "@/components/Layout/Footer/Footer.style";
import {Facebook} from "@/assets/icons/Facebook";
import Logo from "@/components/Layout/logo/logo";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import Newsletter from "@/components/Layout/Footer/newsletter form/Newsletter";

function FooterComponent() {
    return (
        <div style={{background: "#F1F1F1"}}>
            <Container>
                <div className="left-col">
                    <Logo/>
                    <SocialMedia>
                        <a href="https://www.facebook.com/www.haribhandari.me" aria-label="Facebook"><Facebook
                            height={'25px'}
                            width={'25px'}/></a>
                        <a href="https://twitter.com/_hari_bhandari" aria-label="Twitter"><TwitterIcon height={'25px'}
                                                                                                       width={'25px'}/></a>
                        <a href="https://www.instagram.com/_hari_bhandari/" aria-label="Instagram"><InstagramIcon
                            width={'25px'}
                            height={'25px'}/></a>
                        <a href="https://www.linkedin.com/in/hari-bhandari-554400140/"
                           aria-label="LinkedIn"><LinkedInIcon width={'25px'}
                                                               height={'25px'}/></a>
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
        </div>
)
}

export default FooterComponent