import React, {useContext} from 'react';
import * as Yup from 'yup';
import {closeModal} from '@redq/reuse-modal';
import TextField from 'components/Others/forms/text-field';
import {Button} from 'components/Others/button/button';
import {DoubleContainer, FieldWrapper, Heading} from './address-card.style';
import {useLoginForm} from "@/hooks/useLoginForm";
// Shape of form values


const UpdateAddress = (props) => {
    const {inputs, handleInputChange} = useLoginForm();
    const handleSubmit = async () => {
        if (true) {
            // const addressData = await addressMutation({
            //   variables: { addressInput: JSON.stringify(addressValue) },
            // });
            // console.log(addressData, 'address data');
            // dispatch({ type: 'ADD_OR_UPDATE_ADDRESS', payload: addressValue });
            closeModal();
        }
    };
    return (
        <>
            {/*<Heading>{item && item.id ? 'Edit Address' : 'Add New Address'}</Heading>*/}
            <Heading>Add New Address</Heading>
            <FieldWrapper>
                <TextField
                    id="name"
                    type="text"
                    placeholder="Address Line 1 "
                    name={"address1"}
                    onChange={handleInputChange} value={inputs.address1}
                />
            </FieldWrapper>
            <FieldWrapper>
                <TextField
                    id="name"
                    type="text"
                    placeholder="Address Line 2 "
                    name={"address2"}
                    onChange={handleInputChange} value={inputs.address2}
                />
            </FieldWrapper>
            <FieldWrapper>
                <TextField
                    id="name"
                    type="text"
                    placeholder="City"
                    name={"city"}
                    onChange={handleInputChange} value={inputs.city}
                />
            </FieldWrapper>
            <DoubleContainer>
                <TextField
                    id="name"
                    type="text"
                    placeholder="County "
                    name={"county"}
                    onChange={handleInputChange} value={inputs.county}
                />
                <TextField
                    id="name"
                    type="text"
                    placeholder="PostCode"
                    name={"postcode"}
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
        </>
    );
};

export default UpdateAddress
