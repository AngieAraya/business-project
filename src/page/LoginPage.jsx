import React from "react";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";

const LoginWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function LoginPage() {
  return (
    <LoginWraper>
      <h2>Login</h2>
      <LoginForm />
    </LoginWraper>
  );
}
