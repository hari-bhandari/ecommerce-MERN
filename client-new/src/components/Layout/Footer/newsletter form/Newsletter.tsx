import React, {useState} from 'react';
import { Input } from '@/components/Others/forms/input';
import Footer from "@/components/Layout/Footer/FooterComponents";
import styled from "styled-components";
import {Button} from "@/components/Others/button/button";
import axios from "axios";
import {API_BASE_URL} from "@/utils/config";

const NewsletterContainer=styled.div`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #0c1a34;
  border: none;
  margin: 10px 0;
  width: 100%;
`
const Newsletter:React.FC<any>= () => {
    const[email,setEmail]=useState<string>('')
    const addToSubscription =async  (e)=> {
        e.preventDefault()
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            const {data} = await axios.post(
                `${API_BASE_URL}/api/v1/newsletter/subscribe`,
                {email},
                config
            )
            console.log(data.email)


        } catch (error) {


        }
    }
    return (
        <NewsletterContainer>
            <Footer.Title>Sign up for a newsletter</Footer.Title>
            <form onSubmit={addToSubscription} className={"form"}>
                <Input
                    type='email'
                    placeholder="Email Address"
                    name={"email"}
                    onChange={(e)=>{setEmail(e.target.value)}} value={email}
                    required
                    height='38px'
                    width={"100%"}
                />
                <Button type={"submit"}  >Submit</Button>
            </form>
        </NewsletterContainer>
    );
};

export default Newsletter;