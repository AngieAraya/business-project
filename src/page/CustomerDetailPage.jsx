import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";

export default function CustomerDetailPage(props) {
  console.log(props);
  const userKit = new UserKit();
  const history = useHistory()

  let id = props.match.params.id;

  const [customerDetail, setCustomerDetail] = useState([]);
  
  useEffect(() => {
      fetchCustomerDetail()
    }, []);
    
    function fetchCustomerDetail() {
       console.log(id);
       userKit.getCustomerDetail(id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCustomerDetail(data)
      });
  }

  function handleDeleteCustomer() {
    userKit.deleteCustomer(id)
    history.push('/home');
  }

  return (
    <div>
      <h1>{` sida ${id} `}</h1>
      <button onClick={handleDeleteCustomer}>Delete Customer</button>
      <p>Name: {customerDetail.name}</p>
      <p>OrganisationNr: {customerDetail.organisationNr}</p>
      <p>PaymentTerm: {customerDetail.paymentTerm}</p>
      <p>Reference: {customerDetail.reference}</p>
    </div>
  );
}
