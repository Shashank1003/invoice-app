import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";

const Wrapper = styled.div`
  width: 730px;
  height: 59px;
  margin-top: 72px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 65px;
  transition: all 300ms ease-in-out;
`;

const HeadingBox = styled.div``;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 32px;
  color: ${(props) => props.theme.text};
  transition: all 300ms ease-in-out;
`;

const SubHeading = styled.p`
  font-weight: 500;
  font-size: 12px;
  margin-top: 8px;
  color: ${(props) => props.theme.textLight};
  transition: all 300ms ease-in-out;
`;

const RightSideContent = styled.div`
  display: flex;
  align-items: center;
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 118px;
  height: 15px;
  margin-right: 40px;
  cursor: pointer;
  position: relative;

  p {
    color: ${(props) => props.theme.text};
    font-size: 12px;
    font-weight: 700;
    transition: all 300ms ease-in-out;
  }

  img {
    width: 10px;
    height: 6px;
  }
`;

const FilterBox = styled.div`
  width: 192px;
  height: 128px;
  background-color: ${(props) => props.theme.secondaryBG};
  position: absolute;
  top: 38px;
  left: -35px;
  z-index: 2;
  box-shadow: 0px 10px 20px ${(props) => props.theme.filterShadow};
`;

const AddNewButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 48px;
  padding: 8px;
  background-color: ${(props) => props.theme.blueButton};
  border-radius: 25px;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  div {
    background-color: white;
    height: 32px;
    width: 32px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    color: white;
    font-size: 12px;
    font-weight: 700;
    margin-right: 5px;
  }

  &:hover {
    background-color: ${(props) => props.theme.blueButtonHover};
  }
`;

function TopBarInvoices() {
  const invoiceData = useSelector((state) => state.invoiceDataReducer);
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <Wrapper>
      <HeadingBox>
        <Heading>Invoices</Heading>
        <SubHeading>There are {invoiceData.length} total invoices</SubHeading>
      </HeadingBox>

      <RightSideContent>
        <Filter onClick={toggleHandler}>
          <p>Filter by status</p>
          <img
            src={
              toggle
                ? process.env.PUBLIC_URL + "./images/icon-arrow-up.svg"
                : process.env.PUBLIC_URL + "./images/icon-arrow-down.svg"
            }
            alt="down arrow"
          />
          {toggle ? <FilterBox></FilterBox> : ""}
        </Filter>

        <AddNewButton>
          <div>
            <img
              src={process.env.PUBLIC_URL + "./images/icon-plus.svg"}
              alt="plus"
            />
          </div>
          <p>New Invoice</p>
        </AddNewButton>
      </RightSideContent>
    </Wrapper>
  );
}

export default TopBarInvoices;
