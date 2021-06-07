import React from 'react'
import Footer from "@/Footer/FooterComponents";
import Newsletter from "@/Footer/newsletter form/Newsletter";

export function FooterComponent() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <div className={"column footer-1"}>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="#">Story</Footer.Link>
                        <Footer.Link href="#">Clients</Footer.Link>
                        <Footer.Link href="#">Testimonials</Footer.Link>
                    </div>
                    <div className={"column footer-2"} >
                        <Footer.Title>Services</Footer.Title>
                        <Footer.Link href="#">Marketing</Footer.Link>
                        <Footer.Link href="#">Consulting</Footer.Link>
                        <Footer.Link href="#">Development</Footer.Link>
                        <Footer.Link href="#">Design</Footer.Link>
                    </div>

                    <div className={"column subscribe"}>
                        <Newsletter/>
                    </div>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}