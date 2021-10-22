import React from "react";
import styled from "styled-components";
import TopBarInvoices from "./TopBarInvoices";
import InvoiceTable from "./InvoiceTable";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function index() {
  return (
    <Wrapper>
      <TopBarInvoices />
      <InvoiceTable />
    </Wrapper>
  );
}

export default index;
