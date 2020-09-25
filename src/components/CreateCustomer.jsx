import React from "react";
import UserKit from "../data/UserKit";
import { useForm } from "react-hook-form";

export default function CreateCustomer({ getCustomerList }) {
  // const [name, setName] = useState("");
  // const [organisationNr, setOrganisationNr] = useState();
  // const [vatNr, setVatNr] = useState("");
  // const [reference, setReference] = useState();
  // const [paymentTerm, setPaymentTerm] = useState();
  // const [website, setWebsite] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState();
  //   console.log(customerList);
  const userKit = new UserKit();

  const { register, handleSubmit, errors } = useForm();

  // const onSubmit = data  => {
  //   handleCreateCustomer(data)

  // }

  function handleCreateCustomer(data) {
    
    console.log(data);
    // const payload = {
    //   name,
    //   organisationNr,
    //   vatNr,
    //   reference,
    //   paymentTerm,
    //   website,
    //   email,
    //   phoneNumber,
    // };
    userKit
      .createCustomer(data)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getCustomerList();
      });
  }


  // function handleCreateCustomer(data) {

  //   // const payload = {
  //   //   name,
  //   //   organisationNr,
  //   //   vatNr,
  //   //   reference,
  //   //   paymentTerm,
  //   //   website,
  //   //   email,
  //   //   phoneNumber,
  //   // };
  //   userKit
  //     .createCustomer(data)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       getCustomerList();
  //     });
  // }


  return (
    <div>
      <form onSubmit= {handleSubmit(handleCreateCustomer)}>
            <input ref={register({ required: true })} name="name" type="text" placeholder="Customer name"></input>
            {errors.name && errors.name.type === "required" &&  (<p>This is Required</p>)}

            <input ref={register({ required: true, minLength: 2})} name="organisationNr" type="number" placeholder="Organisation number" ></input>
            {errors.organisationNr && errors.organisationNr.type === "required" &&  (<p>This is Required</p>)}
            {errors.organisationNr && errors.organisationNr.type === "minLength" &&  (<p>This field required min 2</p>)}

            <input ref={register({ required: true, pattern: {value: /SE+[0-9]/ }, minLength: 12, maxLength:12,})} name="vatNr" type="text" placeholder="Vat-number"></input>
            {errors.vatNr && errors.vatNr.type === "required" &&  (<p>This is Required</p>)}
            {errors.vatNr && errors.vatNr.type === "pattern" &&  (<p>Must start with SE + 10 num</p>)}
            {errors.vatNr && errors.vatNr.type === "minLength" &&  (<p>min 12</p>)}
            {errors.vatNr && errors.vatNr.type === "maxLength" &&  (<p>max 12</p>)}

            <input ref={register({ required: true})} name="reference" type="text" placeholder="Reference" ></input>
            {errors.reference && <p>This is Required</p>}

            <input ref={register({ required: true, minLength: 1})} name="paymentTerm" type="number" placeholder="Payment term"></input>
            {errors.paymentTerm && <p>This is Required</p>}
            {errors.paymentTerm && errors.paymentTerm.type === "minLength" &&  (<p>This field required min 1 Payment term</p>)}

            <input ref={register({ required: true})} name="website" type="text" placeholder="Website"></input>
            {errors.website && <p>This is Required</p>}

            <input ref={register({ required: true})} name="email" type="text" placeholder="Email"></input>
            {errors.email && <p>This is Required</p>}

            <input ref={register({ required: true})} name="phoneNumber" type="text" placeholder="Phone number"  ></input>
            {errors.phoneNumber && <p>This is Required</p>}

            <br/>
            <button>Add Customer</button>
      </form>
    </div>
  );
}

{/* <form onSubmit= {handleSubmit(onSubmit)}>
<input ref={register({ required: true, minLength: 4 })} name="name" type="text" placeholder="Customer name" value={name} onChange={(e) => setName(e.target.value)}></input>
{errors.name && errors.name.type === "required" &&  (<p>This is Required</p>)}
{errors.name && errors.name.type === "minLength" &&  (<p>This field required min 4</p>)}

<input ref={register({ required: true, minLength: 2})} name="OrgNr" type="number" placeholder="Organisation number" value={organisationNr} onChange={(e) => setOrganisationNr(e.target.value)}></input>
{errors.OrgNr && errors.OrgNr.type === "required" &&  (<p>This is Required</p>)}
{errors.OrgNr && errors.OrgNr.type === "minLength" &&  (<p>This field required min 2</p>)}

<input ref={register({ required: true, pattern: {value: /SE[0-9]/ }, minLength: 12, maxLength:12,})} name="vatNr" type="text" placeholder="Vat-number" value={vatNr} onChange={(e) => setVatNr(e.target.value)}></input>
{errors.vatNr && errors.vatNr.type === "required" &&  (<p>This is Required</p>)}
{errors.vatNr && errors.vatNr.type === "pattern" &&  (<p>Must start with SE + 10 num</p>)}
{errors.vatNr && errors.vatNr.type === "minLength" &&  (<p>minst 12</p>)}
{errors.vatNr && errors.vatNr.type === "maxLength" &&  (<p>max 12</p>)}

<input ref={register({ required: true})} name="reference" type="text" placeholder="Reference" value={reference} onChange={(e) => setReference(e.target.value)}></input>
{errors.reference && <p>This is Required</p>}

<input ref={register({ required: true, minLength: 1})} name="paymentTerm" type="number" placeholder="Payment term" value={paymentTerm} onChange={(e) => setPaymentTerm(e.target.value)}></input>
{errors.paymentTerm && <p>This is Required</p>}
{errors.paymentTerm && errors.paymentTerm.type === "minLength" &&  (<p>This field required min 1 Payment term</p>)}


<input ref={register({ required: true})} name="website" type="text" placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)}></input>
{errors.website && <p>This is Required</p>}

<input ref={register({ required: true})} name="email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
{errors.email && <p>This is Required</p>}

<input ref={register({ required: true})} name="phoneNumber" type="text" placeholder="Phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
{errors.phoneNumber && <p>This is Required</p>}

<br/>
<button>Add Customer</button>
</form> */}