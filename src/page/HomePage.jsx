import React, { useContext } from "react";
import { CustomerContext, UserInformation } from "../contexts/CustomerContext";
import CreateCustomer from "../components/CreateCustomer";
import CustomerList from "../components/CustomerList";
import UserKit from "../data/UserKit";

export default function HomePage() {
  const { setCustomerList } = useContext(CustomerContext);
  const { userInfo } = useContext(UserInformation);


  const userKit = new UserKit();

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setCustomerList(data.results);
      });
  }

  // function getUserInfo() {
  //   userKit
  //     .getLogedinUser()
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data.results)
  //       setUserInfo(data);
  //     });
  // }

 

  return (
    <div>
      <p>{userInfo.firstName}</p>
      <p>{userInfo.lastName}</p>
      <p>{userInfo.email}</p>
      <CustomerList getCustomerList={getCustomerList} />
      <CreateCustomer getCustomerList={getCustomerList} />
    </div>
  );
}
