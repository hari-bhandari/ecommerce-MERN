import React, {useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import {API_BASE_URL} from "@/utils/config";
import Toast from "light-toast";
import {JSONConfig} from "@/axiosHeaders";
import {NewsLetterForm, NewsletterInput, SubmitButton} from "@/components/Layout/Footer/Footer.style";

const Newsletter:React.FC<any>= () => {
    const[email,setEmail]=useState<string>('')
    const addToSubscription =async  (e)=> {
        e.preventDefault()
        try {
            await axios.post(
                `${API_BASE_URL}/api/v1/newsletter/subscribe`,
                {email},
                JSONConfig
            )
            Toast.success('Email has been successfully added ')
            setEmail('')



        } catch (error) {
            Toast.fail(error.response.data.error)

        }
    }
    return (
        <NewsLetterForm onSubmit={addToSubscription}>
            <NewsletterInput type="text" className="txtb" placeholder="Enter Your Email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
            <SubmitButton type="submit" className="btn" value="Submit"/>
        </NewsLetterForm>
    );
};

export default Newsletter;