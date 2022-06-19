import React from 'react';
import {
    Button,
    Container,
    Divider,
    Heading,
    SubHeading,
    Wrapper
} from "@/features/authentication-form/authentication-form.style";
import {Label} from "@/components/Others/forms/label";
import {Input} from "@/components/Others/forms/input";
import TextField from "@/components/Others/forms/text-field";
import {useLoginForm} from "@/hooks/useLoginForm";

const Contact = () => {
    const {handleInputChange, inputs} = useLoginForm();
    const sendEmail = async (e) => {
        e.preventDefault();
        await fetch("https://submit-form.com/poA3EymO", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                message: inputs.message,
                email: inputs.email,
                name: inputs.name,
            }),
        });
    }
    return (

        <div style={{margin: '100px 0'}}>
            <Wrapper>
                <Container>
                    <Heading>
                        Contact Us
                    </Heading>
                    <SubHeading>
                        Please contact us if you have any questions or comments and please include your order number, if
                        you are contacting us regarding an order.
                    </SubHeading>
                    <form>
                        <Label>Email</Label>
                        <Input
                            type='email'
                            placeholder="Email Address"
                            value={inputs.email}
                            name={'email'}
                            onChange={handleInputChange}
                            required
                            height='48px'
                        />
                        <Label>Name</Label>
                        <Input
                            type='text'
                            placeholder="Full Name"
                            name={"name"}
                            value={inputs.name}
                            onChange={handleInputChange}
                            required
                            height='48px'
                        />
                        <Label>Message</Label>
                        <TextField
                            type='text'
                            name={"message"}
                            required
                            height='148px'
                            value={inputs.message}
                            textArea={true}
                            onChange={handleInputChange}
                            id={'message '}/>
                        <Divider>
                        </Divider>
                        <Button
                            variant='primary'
                            size='big'
                            style={{width: '100%'}}

                            type='submit'
                            onClick={sendEmail}
                        >
                            Continue </Button>
                    </form>

                </Container>
            </Wrapper>
        </div>

    );
};

export default Contact;