import React, { useContext } from "react";
import {CustomerContext} from '../contexts/CustomerContext'
import CreateCustomer from "../components/CreateCustomer";
import CustomerList from "../components/CustomerList";
import UserKit from '../data/UserKit'


export default function HomePage() {
const {customerList, setCustomerList} = useContext(CustomerContext)
  const userKit = new UserKit();

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results)
        setCustomerList(data.results);
      });
  }

  return (
    <div value={{customerList, setCustomerList}}>
        <CustomerList getCustomerList={getCustomerList} />
        <CreateCustomer getCustomerList={getCustomerList}  />
    </div>
  )
}
