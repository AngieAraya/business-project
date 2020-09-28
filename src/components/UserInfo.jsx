import React, { useContext } from "react";
import { UserInformation } from "../contexts/CustomerContext";
import styled from "styled-components";

const UserInfoContainer = styled.div` 
color: #3490a5;
background: #152238;
margin: auto;
width:70%;
display: flex;
flex-direction: column;
align-items: center;
`
const UserName = styled.h3`
font-size: 30px;
color: white;
margin-bottom: 1px;
`
const UserEmail = styled.p`
color: #a0a9a0
font-size: 10px;
`

export default function UserInfo() {
  const { userInfo } = useContext(UserInformation);

  return (
    <UserInfoContainer>
      <UserName> {userInfo.firstName} {userInfo.lastName}</UserName>
      <UserEmail>Your Email: {userInfo.email}</UserEmail>
    </UserInfoContainer>
  );
}
