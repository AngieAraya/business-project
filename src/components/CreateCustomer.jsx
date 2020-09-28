import React from "react";
import UserKit from "../data/UserKit";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const FormContainer =styled.div`
flex-grow: 2;
`
const FormWraper = styled.form`
color: #3490a5;
background: #f2f2f2;
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
padding: 1rem;
box-shadow: 13px 15px 11px 0px rgba(230, 227, 230, 1);
`;

const FormHeading = styled.h3`
font-size: 20px;
font-weight: bold;
`;

const FormInput = styled.input`
width: 70%;
padding: 7px 4px;
margin: 2px 0px 4px;
`;

const FormBtn = styled.button`
background-color: #008cba;
width: 30%;
padding: 13px;
margin: 11px;
color: white;
border: 2px solid white;
border-radius: 7px;
text-align: center;
font-size: 16px;
transition-duration: 0.4s;
cursor: pointer;
`;

const ErrorText = styled.p`
font-size: 13px;
color: red;
`

export default function CreateCustomer({ getCustomerList }) {
  const userKit = new UserKit();

  const { register, handleSubmit, errors } = useForm();

  function handleCreateCustomer(data) {
    userKit.createCustomer(data)
      .then((res) => res.json())
      .then((data) => {
        getCustomerList();
      });
  }


  return (
    <FormContainer>
      <FormWraper onSubmit= {handleSubmit(handleCreateCustomer)}>
        <FormHeading>Create a new Customer</FormHeading>
            <FormInput ref={register({ required: true })} name="name" type="text" placeholder="Customer name"></FormInput>
            {errors.name && errors.name.type === "required" &&  (<ErrorText> This is Required</ErrorText> )}

            <FormInput ref={register({ required: true})} name="organisationNr" type="number" placeholder="Organisation number" ></FormInput>
            {errors.organisationNr && errors.organisationNr.type === "required" &&  (<ErrorText> This is Required</ErrorText> )}

            <FormInput ref={register({ required: true, pattern: {value: /^SE[0-9]{10}$/g }, minLength: 12, maxLength:12,})} name="vatNr" type="text" placeholder="Vat-number"></FormInput>
            {errors.vatNr && errors.vatNr.type === "required" &&  (<ErrorText> This is Required</ErrorText> )}
            {errors.vatNr && errors.vatNr.type === "pattern" &&  (<ErrorText> Must start with SE</ErrorText> )}
            {errors.vatNr && errors.vatNr.type === "minLength" &&  (<ErrorText> min 12</ErrorText> )}
            {errors.vatNr && errors.vatNr.type === "maxLength" &&  (<ErrorText> max 12</ErrorText> )}

            <FormInput ref={register({ required: true})} name="reference" type="text" placeholder="Reference" ></FormInput>
            {errors.reference && <ErrorText> This is Required</ErrorText> }

            <FormInput ref={register({ required: true, minLength: 1})} name="paymentTerm" type="number" placeholder="Payment term"></FormInput>
            {errors.paymentTerm && <ErrorText> This is Required</ErrorText> }
            {errors.paymentTerm && errors.paymentTerm.type === "minLength" &&  (<ErrorText> This field required min 1 Payment term</ErrorText> )}

            <FormInput ref={register({ required: true})} name="website" type="text" placeholder="Website"></FormInput>
            {errors.website && <ErrorText> This is Required</ErrorText> }

            <FormInput ref={register({ required: true})} name="email" type="email" placeholder="Email"></FormInput>
            {errors.email && <ErrorText> This is Required</ErrorText> }

            <FormInput ref={register({ required: true, pattern: {value: /[0-9]/g }})} name="phoneNumber" type="text" placeholder="Phone number" ></FormInput>
            {errors.phoneNumber && errors.phoneNumber.type === "required" && <ErrorText> This is Required</ErrorText> }
            {errors.phoneNumber && errors.phoneNumber.type === "pattern" &&  (<ErrorText> Only Numbers</ErrorText> )}
            <br/>
            <FormBtn>Add Customer</FormBtn>
      </FormWraper>
      </FormContainer>
  );
}
