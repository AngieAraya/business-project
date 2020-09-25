import React from 'react'
import { useForm } from "react-hook-form";


export default function CustomerForm({data,}) {

    const { register, handleSubmit, errors } = useForm();



    return (
        <div>
           <form onSubmit= {handleSubmit(handleCreateCustomer)}>
            <input ref={register({ required: true, minLength: 4 })} name="name" type="text" placeholder="Customer name"></input>
            {errors.name && errors.name.type === "required" &&  (<p>This is Required</p>)}
            {errors.name && errors.name.type === "minLength" &&  (<p>This field required min 4</p>)}

            <input ref={register({ required: true, minLength: 2})} name="organisationNr" type="number" placeholder="Organisation number" ></input>
            {errors.organisationNr && errors.organisationNr.type === "required" &&  (<p>This is Required</p>)}
            {errors.organisationNr && errors.organisationNr.type === "minLength" &&  (<p>This field required min 2</p>)}

            <input ref={register({ required: true, pattern: {value: /SE[0-9]/ }, minLength: 12, maxLength:12,})} name="vatNr" type="text" placeholder="Vat-number"></input>
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
    )
}
