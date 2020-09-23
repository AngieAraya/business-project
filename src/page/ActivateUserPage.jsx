import React from 'react';
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";
import styled from 'styled-components';

const ActivateWraper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: #152238;
padding: 2rem;
width: 40%;
margin: auto;
border-radius: 9px;
box-shadow: 9px 7px 9px 3px rgba(129, 126, 135, 0.73);
`

const ActivateHeading = styled.h3`
font-size: 20px;
font-weight: bold;
color: white;
`

const ActivateBtn = styled.button`
background-color: white;
padding: 6px;
margin: 4px;
color: black;
border: 2px solid white;
border-radius: 4px;
text-align: center;
font-size: 14px;
transition-duration: 0.4s;
cursor: pointer;
`


export default function ActivateUserPage({token, setToken, uid, setUid}) {

  const userKit = new UserKit()
  const history = useHistory()

    function handleActivateUser() {
        userKit.activateUser(uid, token)
        .then(() => {
          setUid(null);
          setToken(null);
          history.push('/login');
        });
      }
    
    return (
        <ActivateWraper>
             <ActivateHeading>Activate account</ActivateHeading>
              <ActivateBtn onClick={handleActivateUser}>Activate User</ActivateBtn>
        </ActivateWraper>
    )
}
