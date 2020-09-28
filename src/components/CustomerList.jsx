import React, { useContext } from "react";
import {Link} from "react-router-dom";
import {CustomerContext} from '../contexts/CustomerContext'
import styled from "styled-components";

const ListContainer = styled.div`
color: #3490a5;
background: #152238;
flex-grow: 1;
padding: 1rem;
`;

const Wraper = styled.div`
border-bottom: 2px solid white;
width: 82%;
`

const ListHeader = styled.h3`
font-size: 22px;
color: white;
text-align: center;
border-bottom: 2px solid white;
`
const ListDetail = styled.p` 
color: white;
font-size: 15px;
margin: 5px;
`

const CustomerName = styled(ListDetail)`
font-size: 20px;
&:hover{
  color: #3490a5;
}
`

export default function CustomerList() {
  const {customerList} = useContext(CustomerContext) 

  return (
    <ListContainer>
      <ListHeader>Your Customers</ListHeader>
      {customerList.length ? (
        customerList.map((customerItem) => {
          const id = customerItem.id;
          return (
            <Link key={id} to={`/detail/${id}`}>
            <Wraper >
              <CustomerName>Company: {customerItem.name}</CustomerName>
              <ListDetail> Reference: {customerItem.reference}</ListDetail>
              <ListDetail> Org Nr: {customerItem.organisationNr}</ListDetail>
            </Wraper>
              </Link>
          );
        })
      ) : (
      <p>
        You don't have any customers
      </p>
            )}

    </ListContainer>
  );
}
