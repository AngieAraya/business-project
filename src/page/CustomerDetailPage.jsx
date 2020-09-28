import React, { useState, useEffect } from "react";
import UserKit from "../data/UserKit";
import UserInfo from "../components/UserInfo";
import DeleteCustomer from "../components/DeleteCustomer";
import UpdateForm from "../components/UpdateForm";
import CustomerDetail from "../components/CustomerDetail";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const BtnContainer = styled.div`
  background: #152238;
  width: 70%;
  display: flex;
  margin: auto;
  align-items: center;
  border-top: 2px solid white;
  padding: 20px 0;
  justify-content: space-evenly;
`;

const BtnShowForm = styled.button`
  background-color: green;
  color: white;
  border: 1px solid green;
  border-radius: 3px;
  padding: 4px;
`;

const BtnBack = styled(BtnShowForm)`
  background-color: #1a2a4f;
  position: absolute;
  top: 15px;
  left: 15px;
  border-radius: 10px;
  padding: 8px;
  font-size: 18px;
`;

export default function CustomerDetailPage(props) {
  let id = props.match.params.id;
  const [customerDetail, setCustomerDetail] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const userKit = new UserKit();
  const history = useHistory();

  useEffect(() => {
    fetchCustomerDetail();
  }, []);

  function fetchCustomerDetail() {
    userKit
      .getCustomerDetail(id)
      .then((res) => res.json())
      .then((data) => {
        setCustomerDetail(data);
      });
  }

  function handleForm() {
    setShowForm(true);
  }

  function handleBack() {
    history.push("/home");
  }

  return (
    <div>
      <BtnBack onClick={handleBack}> Back to Home</BtnBack>
      <UserInfo />
      <BtnContainer>
        <BtnShowForm onClick={handleForm}>Edit Customer</BtnShowForm>
        <DeleteCustomer id={id} />
      </BtnContainer>
      <CustomerDetail customerDetail={customerDetail} />
      {showForm === true && (
        <UpdateForm
          setCustomerDetail={setCustomerDetail}
          customerDetail={customerDetail}
          id={id}
        />
      )}
    </div>
  );
}
