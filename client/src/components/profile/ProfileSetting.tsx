import React, {useContext, useEffect} from 'react';
import {Label} from "@/components/Others/forms/label";
import {Input} from "@/components/Others/forms/input";
import { Col } from 'react-styled-flexboxgrid';
import {
    SettingsForm,
    SettingsFormContent,
    HeadingSection, Title,
    // Input,
    Row,
    ButtonGroup, FormContainer,InputContainer
} from './ProfileSetting.css';
import {Button} from "@/components/Others/button/button";
import {useLoginForm} from "@/hooks/useLoginForm";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {JSONConfig} from "@/axiosHeaders";
import {API_BASE_URL} from "@/utils/config";
import Toast from "light-toast";
import authContext from "@/context/auth/authContext";

type SettingsContentProps = {
    deviceType?: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
};

const SettingsContent: React.FC<SettingsContentProps> = ( ) => {
    const auth = useContext(authContext);
    const { loadUser,user} = auth;
    const {inputs, handleInputChange,setDefaultValues} = useLoginForm();
    const dispatch=useDispatch()
    useEffect(()=>{
        if(user){
            setDefaultValues({
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email
            })
        }

    },[user])
    const OnSave=async (e)=>{
        e.preventDefault()
        try {
             await axios.put(
                `${API_BASE_URL}/api/v1/auth/`,
                {email:inputs.email, firstName:inputs.firstName,lastName:inputs.lastName},
                JSONConfig
            )
            Toast.success('Successfully changed user data')
            await dispatch(loadUser())


        } catch (error) {
            Toast.fail(error.response.data.error +', Please try again')
        }
    }

    return (
        <SettingsForm>
            <SettingsFormContent>
                <HeadingSection>
                    <Title>
                        Your Profile
                    </Title>
                </HeadingSection>
                <FormContainer>
                    <InputContainer>
                        <Label>
                            Your First Name
                        </Label>
                        <Input
                            type='text'
                            label='First Name'
                            name='firstName'
                            value={inputs.firstName}
                            onChange={handleInputChange}
                            backgroundColor='#F7F7F7'
                            height='48px'
                            // intlInputLabelId="profileNameField"
                        />
                    </InputContainer>
                    <InputContainer>
                        <Label>
                            Your Last Name
                        </Label>
                        <Input
                            type='text'
                            label='Last Name'
                            name='lastName'
                            value={inputs.lastName}
                            onChange={handleInputChange}
                            backgroundColor='#F7F7F7'
                            height='48px'
                            // intlInputLabelId="profileNameField"
                        />
                    </InputContainer>
                    <InputContainer>
                        <Label>
                            Your Email
                        </Label>
                        <Input
                            type='email'
                            name='email'
                            label='Email Address'
                            value={inputs.email}
                            onChange={handleInputChange}
                            backgroundColor='#F7F7F7'
                            // intlInputLabelId="profileEmailField"
                        />
                    </InputContainer>

                    <InputContainer>
                        <Button size='big' style={{ width: '100%' }} onClick={OnSave}>
                            Update details
                        </Button>
                    </InputContainer>
                </FormContainer>

            </SettingsFormContent>
        </SettingsForm>
    );
};

export default SettingsContent;
