import React, { useState, useEffect } from "react";
import UserKit from "../data/UserKit";
import {Link} from "react-router-dom";


export default function HomePage() {
  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");

  const [customerList, setCustomerList] = useState([]);
  const userKit = new UserKit();

  function handleCreateCustomer() {
    const payload = {
      name,
      organisationNr,
      vatNr,
      reference,
      //   paymentTerm,
      //   website,
      //   email,
    };
    userKit
      .createCustomer(payload)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchCustomerList();
      });
  }

  function fetchCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results);
      });
  }

  useEffect(() => {
    fetchCustomerList()
  }, [])
  function renderInput(placeholder, stateVariable, stateSetVariable) {
    return (
      <div>
        <label>{placeholder}</label>
        <br />
        <input
          placeholder={placeholder}
          value={stateVariable}
          onChange={(e) => stateSetVariable(e.target.value)}
        />
      </div>
    );
  }

  return (
    <div>
      <h1>Home</h1>
      <div>
        {" "}
        {customerList &&
          customerList.map(customerItem => {
            console.log(customerItem.id);
            const id = customerItem.id
            return (
              <div key={id}>
              <Link to={`/detail/${id}`}>
              <p>{customerItem.name}</p>
              </Link>
              </div>
            );
          })}
      </div>
      <div>
        {renderInput("Customer name:", name, setName)}
        {renderInput("organisationNr:", organisationNr, setOrganisationNr)}
        {renderInput("vatNr:", vatNr, setVatNr)}
        {renderInput("reference:", reference, setReference)}
        {/* {renderInput("PaymentTerm:", paymentTerm, setPaymentTerm)}
        {renderInput("website", website, setWebsite)}
        {renderInput("Email", email, setEmail)}
        {renderInput("phoneNumber", phoneNumber, setPhoneNumber)} */}

        <button onClick={handleCreateCustomer}>Create test customer</button>
      </div>
    </div>
  );
}

//    <CustomerList/>
//     <CreateCustomer/>
