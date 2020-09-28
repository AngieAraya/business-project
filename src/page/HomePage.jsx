import React, { useEffect, useContext } from "react";
import { CustomerContext } from "../contexts/CustomerContext";
import { useHistory } from "react-router-dom";
import CreateCustomer from "../components/CreateCustomer";
import CustomerList from "../components/CustomerList";
import UserKit from "../data/UserKit";
import UserInfo from "../components/UserInfo";
import styled from "styled-components";

const LogOutBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 25px;
  background-color: #1a2a4f;
  color: white;
  border: 1px solid #aa0d0d;
  border-radius: 10px;
  padding: 8px;
  font-size: 18px;
`;
const ContainerI = styled.div`
  background-color: #f1f0f0;
  display: flex;
  width: 70%;
  margin: auto;
`;

export default function HomePage({ getUserInfo }) {
  const { setCustomerList } = useContext(CustomerContext);
  const userKit = new UserKit();
  const history = useHistory();

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results);
      });
  }

  useEffect(() => {
    getCustomerList();
    getUserInfo();
  }, []);

  function handleLogOut() {
    userKit.removeToken();
    history.push("/login");
  }

  return (
    <div>
      <LogOutBtn onClick={handleLogOut}>Log Out</LogOutBtn>
      <UserInfo />
      <ContainerI>
        <CreateCustomer getCustomerList={getCustomerList} />
        <CustomerList />
      </ContainerI>
    </div>
  );
}
