import React from "react";
import styled from "styled-components";

const CustomerInfoContainer = styled.div`
  color: white;
  background: #152238;
  margin: auto;
  width: 70%;
  border-top: 2px solid white;
`;

const DetailList = styled.ul`
  list-style-type: none;
  width: 40%;
  margin: 30px auto;
  padding-bottom: 40px;
`;

const DetailRow = styled.li`
  font-size: 18px;
  margin: 5px 0;
`;

export default function CustomerDetail({ customerDetail }) {
  return (
    <CustomerInfoContainer>
      <DetailList>
        <DetailRow> Name: {customerDetail.name}</DetailRow>
        <DetailRow> OrganisationNr: {customerDetail.organisationNr}</DetailRow>
        <DetailRow> Vat-nr: {customerDetail.vatNr}</DetailRow>
        <DetailRow> Reference: {customerDetail.reference}</DetailRow>
        <DetailRow> PaymentTerm: {customerDetail.paymentTerm}</DetailRow>
        <DetailRow> Website: {customerDetail.website}</DetailRow>
        <DetailRow> Email: {customerDetail.email}</DetailRow>
        <DetailRow> Phone Number: {customerDetail.phoneNumber}</DetailRow>
      </DetailList>
    </CustomerInfoContainer>
  );
}
