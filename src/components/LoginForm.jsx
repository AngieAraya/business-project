import React from "react";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import UserKit from "../data/UserKit";

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width:25%;
background: #f2f2f2;
padding: 1rem;
box-shadow: 13px 15px 11px 0px rgba(230,227,230,1);
`

const LoginRow = styled.div`
box-shadow: none;
width: 70%;
`

const LoginInput = styled.input`
width:100%;
padding: 7px 4px;
margin: 2px 0px 4px;
`
const LoginBtn = styled.button`
background-color: #008CBA;
width:75%;
padding: 13px;
margin: 11px;
color: white;
border: 2px solid white;
border-radius: 7px;
text-align: center;
font-size: 15px;
transition-duration: 0.4s;
cursor: pointer;
`

export default function LoginForm() {
  const userKit = new UserKit();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  function handleLogin(data) {
    userKit.login(data)
      .then((res) => res.json())
      .then((data) => {
        userKit.setToken(data.token);
        history.push("/home");
      });
  }

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
      <LoginRow>
        <LoginInput  ref={register({ required: true })} placeholder="Email" type="email" name="email"/>
          {errors.email &&  (<p> This is Required</p> )}
        <LoginInput ref={register({ required: true })} placeholder="Password" type="password" name="password" />
          {errors.password &&  (<p> This is Required</p> )}
      </LoginRow>
        <LoginBtn>Login</LoginBtn>
    </Form>
  );
}
