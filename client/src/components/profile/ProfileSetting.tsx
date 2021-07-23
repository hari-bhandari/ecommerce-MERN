import React, { useContext } from 'react';
import {Label} from "@/components/Others/forms/label";
import {Input} from "@/components/Others/forms/input";
import { Col } from 'react-styled-flexboxgrid';

import {
    SettingsForm,
    SettingsFormContent,
    HeadingSection,Title,
    // Input,
    Row,
    ButtonGroup,
} from './ProfileSetting.css';
import {Button} from "@/components/Others/button/button";
import {useLoginForm} from "@/hooks/useLoginForm";

type SettingsContentProps = {
    deviceType?: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
};

const SettingsContent: React.FC<SettingsContentProps> = ({ deviceType }) => {
    const {inputs, handleInputChange} = useLoginForm();
    const OnSave=()=>{

    }

    return (
        <SettingsForm>
            <SettingsFormContent>
                <HeadingSection>
                    <Title>
                        Your Profile
                    </Title>
                </HeadingSection>
                <Row style={{ alignItems: 'flex-end', marginBottom: '50px' }}>
                    <Col>
                        <Label>
                            Your Name
                        </Label>
                        <Input
                            type='text'
                            label='Name'
                            name='name'
                            value={inputs.name}
                            onChange={handleInputChange}
                            backgroundColor='#F7F7F7'
                            height='48px'
                            // intlInputLabelId="profileNameField"
                        />
                    </Col>

                    <Col xs={12} sm={5} md={5} lg={5}>
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
                    </Col>

                    <Col xs={12} sm={2} md={2} lg={2}>
                        <Button size='big' style={{ width: '100%' }} onClick={OnSave}>
                            Save
                        </Button>
                    </Col>
                </Row>

            </SettingsFormContent>
        </SettingsForm>
    );
};

export default SettingsContent;
