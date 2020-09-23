import React from "react";
import RegisterForm from "../components/RegisterForm";
import styled from "styled-components";

const RegisterWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Register() {
  return (
    <RegisterWraper>
      <h2>Register</h2>
      <RegisterForm />
    </RegisterWraper>
  );
}
