import React, { useState } from "react";
import UserKit from "../data/UserKit";
import styled from "styled-components";

const FormWraper = styled.form`
  color: #3490a5;
  background: #f2f2f2;
  width: 49%;
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
const FormRow = styled.div`
  width: 60%;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 7px 4px;
  margin: 2px 0px 4px;
`;

const FormLabel = styled.label`
  font-size: 15px;
  font-weight: bold;
`;

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");

  const userKit = new UserKit();

  function handleRegister(e) {
    e.preventDefault()
    userKit.register(
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind
    );
  }

  function renderInput(placeholder, stateVariable, stateSetVariable) {
    return (
      <FormRow>
        <FormLabel>{placeholder}</FormLabel>
        <br />
        <FormInput
          placeholder={placeholder}
          value={stateVariable}
          onChange={(e) => stateSetVariable(e.target.value)}
        />
      </FormRow>
    );
  }

  return (
    <FormWraper onSubmit={handleRegister}>
      <FormHeading>Enter details to register</FormHeading>
      {renderInput("First Name", firstName, setFirstName)}
      {renderInput("Last Name", lastName, setLastName)}
      {renderInput("Email", email, setEmail)}
      {renderInput("Password", password, setPassword)}
      {renderInput("Organisation Name", organisationName, setOrganisationName)}
      {renderInput("Organisation Kind", organisationKind, setOrganisationKind)}
      <FormBtn>Register</FormBtn>
    </FormWraper>
  );
}
