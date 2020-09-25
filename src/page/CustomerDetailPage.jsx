import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";
import { useForm } from "react-hook-form";
import {UserInformation} from '../contexts/CustomerContext'

export default function CustomerDetailPage(props) {
  console.log(props);
  const userKit = new UserKit();
  const history = useHistory()

  const { userInfo} = useContext(UserInformation);

  const [showForm, setShowForm] = useState(false)
  let id = props.match.params.id;
  const [customerDetail, setCustomerDetail] = useState([]);
  const { register, handleSubmit, errors } = useForm();


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

  function handleForm(){
    setShowForm(true)
  }

  function handleEditForm(data) {
    userKit.updateCustomerDetail(id, data)
    .then(() => {
      fetchCustomerDetail()
      alert("The customer has been updated")  
    })
    
    console.log(data);
  }

  // function newForm() {
  //   if (showForm === true){
  //     return (
  //       <div>
  //       <form onSubmit= {handleSubmit(handleEditForm)}>
  //       <input ref={register} name="name" type="text" placeholder="Customer name"></input>
  //       <input ref={register}  name="organisationNr" type="number" placeholder="Organisation number" ></input>
  //       <input ref={register({ pattern: {value: /SE+[0-9]/ }, minLength: 12, maxLength:12,})} name="vatNr" type="text" placeholder="Vat-number"></input>
  //       {errors.vatNr && errors.vatNr.type === "pattern" &&  (<p>Must start with SE + 10 num</p>)}
  //       {errors.vatNr && errors.vatNr.type === "minLength" &&  (<p>min 12</p>)}
  //       {errors.vatNr && errors.vatNr.type === "maxLength" &&  (<p>max 12</p>)}
  //       <input ref={register} name="reference" type="text" placeholder="Reference" ></input>
  //       <input ref={register({ minLength: 1})} name="paymentTerm" type="number"></input>
  //       {errors.paymentTerm && errors.paymentTerm.type === "minLength" &&  (<p>This field required min 1 day</p>)}
  //       <input ref={register} name="website" type="text" placeholder="Website"></input>
  //       <input ref={register} name="email" type="text" placeholder="Email"></input>
  //       <input ref={register} name="phoneNumber" type="text" placeholder="Phone number"  ></input>
  //       <br/>
  //       <button>Update Customer</button>
  // </form>
  // // </div>
  //     )
  //   }
  // }

  function handleDeleteCustomer() {
    userKit.deleteCustomer(id)
    alert("The customer has been deleted")
    history.push('/home');
  }

  return (
    <div>
      <p>{userInfo.firstName}</p>
      <p>{userInfo.lastName}</p>
      <p>{userInfo.email}</p>
      <h1>{` sida ${id} `}</h1>
      <button onClick={handleDeleteCustomer}>Delete Customer</button>
      <button onClick={handleForm}>UPDATE</button>
      <p>Name: {customerDetail.name}</p>
      <p>OrganisationNr: {customerDetail.organisationNr}</p>
      <p>Vat-nr: {customerDetail.vatNr}</p>
      <p>Reference: {customerDetail.reference}</p>
      <p>PaymentTerm: {customerDetail.paymentTerm}</p>
      <p>Website: {customerDetail.website}</p>
      <p>Email: {customerDetail.email}</p>
      <p>Phone Number: {customerDetail.phoneNumber}</p>
    {/* <div>{newForm()}</div> */}
    {showForm === true ? (        
       <form onSubmit= {handleSubmit(handleEditForm)}>
        <input ref={register} name="name" type="text" placeholder="Customer name"></input>
        <input ref={register}  name="organisationNr" type="number" placeholder="Organisation number" ></input>
        <input ref={register({ pattern: {value: /SE+[0-9]/ }, minLength: 12, maxLength:12,})} name="vatNr" type="text" placeholder="Vat-number"></input>
        {errors.vatNr && errors.vatNr.type === "pattern" &&  (<p>Must start with SE + 10 num</p>)}
        {errors.vatNr && errors.vatNr.type === "minLength" &&  (<p>min 12</p>)}
        {errors.vatNr && errors.vatNr.type === "maxLength" &&  (<p>max 12</p>)}
        <input ref={register} name="reference" type="text" placeholder="Reference" ></input>
        <input ref={register({ minLength: 1})} name="paymentTerm" type="number"></input>
        {errors.paymentTerm && errors.paymentTerm.type === "minLength" &&  (<p>This field required min 1 day</p>)}
        <input ref={register} name="website" type="text" placeholder="Website"></input>
        <input ref={register} name="email" type="text" placeholder="Email"></input>
        <input ref={register} name="phoneNumber" type="text" placeholder="Phone number"  ></input>
        <br/>
        <button>Update Customer</button>
  </form>) : ("funkar ej error")}
    </div>
    
  );
}
