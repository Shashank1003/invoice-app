import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import moment from "moment";
import Invoices from "./Invoices";

const Wrapper = styled.div``;

function InvoiceTable() {
  const invoiceData = useSelector((state) => state.invoiceDataReducer);

  return (
    <Wrapper>
      {invoiceData.map((data, index) => {
        return (
          <Invoices
            key={data.id}
            index={index}
            id={data.id}
            due={moment(data.paymentDue).format('D MMM YYYY')}
            name={data.clientName}
            amount={data.total}
            status={data.status}
          />
        );
      })}
    </Wrapper>
  );
}

export default InvoiceTable;
