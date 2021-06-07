import React from 'react';
import { Input } from '@/components/forms/input';
import Footer from "@/Footer/FooterComponents";
import styled from "styled-components";
import {Button} from "@/components/button/button";

const NewsletterContainer=styled.div`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #0c1a34;
  border: none;
  margin: 10px 0;
  width: 100%;
`
const Newsletter:React.FC<any>= () => {
    return (
        <NewsletterContainer>
            <Footer.Title>Sign up for a newsletter</Footer.Title>
            <form action="" className={"form"}>
                <Input
                    type='email'
                    placeholder="Email Address"
                    name={"email"}
                    onChange={()=>{}} value={""}
                    required
                    height='38px'
                    width={"100%"}
                />
                <Button type={"submit"} >Submit</Button>
            </form>
        </NewsletterContainer>
    );
};

export default Newsletter;