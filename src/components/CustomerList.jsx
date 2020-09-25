import React, { useContext, useEffect } from "react";
import {Link} from "react-router-dom";
import {CustomerContext} from '../contexts/CustomerContext'

export default function CustomerList({getCustomerList}) {

  const {customerList} = useContext(CustomerContext) 
  useEffect(() => {
    getCustomerList()
  }, [])

  return (
    <div>
          {/* <button onClick={getCustomerList}>Get Customer List</button>    */}
      {customerList &&
        customerList.map(customerItem => {
          // console.log(customerItem.id);
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
  );
}
