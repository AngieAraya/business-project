import React, { useState } from "react";
import UserKit from "../data/UserKit";

export default function CreateCustomer({ getCustomerList }) {
  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState();
  const [vatNr, setVatNr] = useState();
  const [reference, setReference] = useState();
  const [paymentTerm, setPaymentTerm] = useState();
  const [website, setWebsite] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  //   console.log(customerList);

  const userKit = new UserKit();

  function handleCreateCustomer(e) {
    e.preventDefault()

    const payload = {
      name,
      organisationNr,
      vatNr,
      reference,
      paymentTerm,
      website,
      email,
      phoneNumber,
    };
    userKit
      .createCustomer(payload)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getCustomerList();
      });
  }


  return (
    <div>
      <form onSubmit= {handleCreateCustomer}>
      <input type="text" placeholder="Customer name" value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type="text" placeholder="Organisation number" value={organisationNr} onChange={(e) => setOrganisationNr(e.target.value)}></input>
            <input type="text" placeholder="VAT-number" value={vatNr} onChange={(e) => setVatNr(e.target.value)}></input>
            <input type="text" placeholder="Reference" value={reference} onChange={(e) => setReference(e.target.value)}></input>
            <input type="text" placeholder="Payment term" value={paymentTerm} onChange={(e) => setPaymentTerm(e.target.value)}></input>
            <input type="text" placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)}></input>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="text" placeholder="Phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
            <button>Add Customer</button>
      </form>
    </div>
  );
}