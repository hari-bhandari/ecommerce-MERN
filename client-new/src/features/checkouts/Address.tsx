import React, {useContext} from 'react';
import * as Yup from 'yup';
import {closeModal} from '@redq/reuse-modal';
import TextField from '@/components/Others/forms/text-field';
import {Button} from '@/components/Others/button/button';
import {DoubleContainer, FieldWrapper, Heading} from './Address.style';
import {useLoginForm} from "@/hooks/useLoginForm";
import {InformationBox} from "@/features/checkouts/checkout.style";
// Shape of form values


const UpdateAddress = (props:any) => {
    const {inputs, handleInputChange} = useLoginForm();
    const handleSubmit =  (e) => {
        e.preventDefault()
        props.next()
    };
    return (
            <InformationBox>
                <Heading>
                    Delivery Address
                </Heading>
            <FieldWrapper>
                <TextField
                    id="name"
                    type="text"
                    placeholder="Address Line 1 "
                    label={"Address Line 1"}
                    name={"address1"}
                    onChange={handleInputChange} value={inputs.address1}
                />
            </FieldWrapper>
            <FieldWrapper>
                <TextField
                    id="name"
                    type="text"
                    placeholder="Address Line 2 "
                    label={"Address Line 2"}
                    name={"address2"}
                    onChange={handleInputChange} value={inputs.address2}
                />
            </FieldWrapper>
            <FieldWrapper>
                <TextField
                    id="name"
                    type="text"
                    placeholder="City"
                    label={"City"}
                    name={"city"}
                    onChange={handleInputChange} value={inputs.city}
                />
            </FieldWrapper>
            <DoubleContainer>
                <TextField
                    id="name"
                    type="text"
                    placeholder="County "
                    label={"County"}
                    name={"county"}
                    onChange={handleInputChange} value={inputs.county}
                />
                <TextField
                    id="name"
                    type="text"
                    placeholder="PostCode"
                    name={"postcode"}
                    label={"Postcode"}
                    onChange={handleInputChange} value={inputs.postcode}
                />
            </DoubleContainer>
            <Button
                onClick={handleSubmit}
                type="submit"
                style={{width: '100%', height: '44px'}}
            >
                Save Address
            </Button>
            </InformationBox>
    );
};

export default UpdateAddress
