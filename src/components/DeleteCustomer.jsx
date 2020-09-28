import React from "react";
import UserKit from "../data/UserKit";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  background-color: #941919;
  color: white;
  border: 1px solid #aa0d0d;
  border-radius: 3px;
  padding: 4px;
`;

export default function DeleteCustomer({ id }) {
  const userKit = new UserKit();
  const history = useHistory();

  function handleDeleteCustomer() {
    userKit.deleteCustomer(id);
    alert("The customer has been deleted");
    history.push("/home");
  }

  return (
    <div>
      <Btn onClick={handleDeleteCustomer}>Delete Customer</Btn>
    </div>
  );
}
