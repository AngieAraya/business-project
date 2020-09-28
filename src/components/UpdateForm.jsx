import React from "react";
import UserKit from "../data/UserKit";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const FormWraper = styled.form`
  color: #3490a5;
  background: #f2f2f2;
  width: 70%;
  margin: 5% auto 10%;
  box-shadow: 13px 15px 11px 0px rgba(230, 227, 230, 1);
`;

const InputWraper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding-left: 25%;
`;

const FormHeading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  margin-bottom: 0;
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
  margin-left: 35%;
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
`;

export default function UpdateForm({ setCustomerDetail, customerDetail, id }) {
  const userKit = new UserKit();
  const { register, handleSubmit, errors } = useForm();

  function handleEditForm(data) {
    userKit.updateCustomerDetail(id, data).then(() => {
      fetchCustomerDetail();
      alert("The customer has been updated");
    });
  }

  function fetchCustomerDetail() {
    userKit.getCustomerDetail(id)
      .then((res) => res.json())
      .then((data) => {
        setCustomerDetail(data);
      });
  }

  return (
    <div>
      <FormWraper onSubmit={handleSubmit(handleEditForm)}>
        <FormHeading>Update Customers Information</FormHeading>
        <InputWraper>
          <label>Name:</label>
          <FormInput ref={register({ required: true })} name="name" type="text" placeholder="Customer name" defaultValue={customerDetail.name}></FormInput>
          {errors.name && errors.name.type === "required" && (<ErrorText>This is Required</ErrorText>)}
        </InputWraper>
        <InputWraper>
          <label>Organisation Number: </label>
          <FormInput ref={register({ required: true })} name="organisationNr" type="number" placeholder="Organisation number" defaultValue={customerDetail.organisationNr}></FormInput>
          {errors.organisationNr && <ErrorText>This is Required</ErrorText>}
        </InputWraper>
        <InputWraper>
          <label>Vat-nr:</label>
          <FormInput ref={register({ required: true, pattern: { value: /^SE[0-9]{10}$/g }, minLength: 12, maxLength: 12,})} name="vatNr" type="text" placeholder="Vat-number" defaultValue={customerDetail.vatNr}></FormInput>
          {errors.vatNr && errors.vatNr.type === "required" && (<ErrorText>This is Required</ErrorText>)}
          {errors.vatNr && errors.vatNr.type === "pattern" && (<ErrorText>Must start with SE + 10 num</ErrorText>)}
          {errors.vatNr && errors.vatNr.type === "minLength" && (<ErrorText>min 12</ErrorText>)}
          {errors.vatNr && errors.vatNr.type === "maxLength" && (<ErrorText>max 12</ErrorText>)}
        </InputWraper>
        <InputWraper>
          <label> Reference:</label>
          <FormInput ref={register({ required: true })} name="reference" type="text" placeholder="Reference" defaultValue={customerDetail.reference}></FormInput>
          {errors.reference && <ErrorText>This is Required</ErrorText>}
        </InputWraper>
        <InputWraper>
          <label> Payment Term:</label>
          <FormInput ref={register({ required: true, minLength: 1 })} name="paymentTerm" type="number" placeholder="Payment term" defaultValue={customerDetail.paymentTerm}></FormInput>
          {errors.paymentTerm && <ErrorText>This is Required</ErrorText>}
          {errors.paymentTerm && errors.paymentTerm.type === "minLength" && (<ErrorText>This field required min 1 Payment term</ErrorText>)}
        </InputWraper>
        <InputWraper>
          <label>Website:</label>
          <FormInput ref={register({ required: true })} name="website" type="text" placeholder="Website" defaultValue={customerDetail.website}></FormInput>
          {errors.website && <ErrorText>This is Required</ErrorText>}
        </InputWraper>
        <InputWraper>
          <label>Email:</label>
          <FormInput ref={register({ required: true })} name="email" type="text" placeholder="Email" defaultValue={customerDetail.email}></FormInput>
          {errors.email && <ErrorText>This is Required</ErrorText>}
        </InputWraper>
        <InputWraper>
          <label>Phone Number:</label>
          <FormInput ref={register({ required: true, pattern: { value: /[0-9]/ } })} name="phoneNumber" type="text" placeholder="Phone number" defaultValue={customerDetail.phoneNumber}></FormInput>
          {errors.phoneNumber && errors.phoneNumber.type === "required" && (<ErrorText>This is Required</ErrorText>)}
          {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (<ErrorText>Only numbers</ErrorText>)}
        </InputWraper>
        
        <FormBtn>Update</FormBtn>
      </FormWraper>
    </div>
  );
}
