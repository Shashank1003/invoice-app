import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.secondaryBG};
  width: 730px;
  height: 72px;
  border-radius: 8px;
  padding: 28px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  margin-bottom: 16px;
  position: relative;
  transition: all 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    border: 1px solid;
    border-color: ${(props) => props.theme.blueButton};
  }
`;

const LightP = styled.p`
  color: ${(props) => props.theme.textLight};
  font-weight: 500;
  font-size: 12px;
  position: absolute;
  transition: all 300ms ease-in-out;

  &.due {
    left: 135px;
    bottom: 28px;
  }

  &.name {
    left: 286px;
    bottom: 28px;
  }
`;

const HeavyP = styled.p`
  color: ${(props) => props.theme.text};
  font-weight: 700;
  font-size: 12px;
  transition: all 300ms ease-in-out;
  position: absolute;
  left: 32px;
  bottom: 28px;

  span {
    color: ${(props) => props.theme.textLight};
    font-weight: 500;
    transition: all 300ms ease-in-out;
  }
`;

const Amount = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.text};
  font-weight: 700;
  position: absolute;
  right: 192px;
  bottom: 24px;
  transition: all 300ms ease-in-out;
`;
// rgba(255, 143, 0, 0.1);
// rgba(151, 151, 151, 0.1);
// rgba(51, 214, 159, 0.1);

const Status = styled.div`
  /* background-color: rgba(51, 214, 159, 0.1); */
  background-color: ${(props) => {
    if (props.status === "paid") {
      return "rgba(51, 214, 159, 0.1)";
    } else if (props.status === "pending") {
      return "rgba(255, 143, 0, 0.1)";
    } else if (props.status === "draft") {
      return "rgba(151, 151, 151, 0.1)";
    }
  }};
  color: ${(props) => {
    if (props.status === "paid") {
      return "rgb(51, 214, 159)";
    } else if (props.status === "pending") {
      return "rgb(255, 143, 0)";
    } else if (props.status === "draft") {
      return "rgb(151, 151, 151)";
    }
  }};
  width: 104px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  border-radius: 5px;
  position: absolute;
  bottom: 16px;
  /* left: 578px; */
  right: 48px;

  div {
    height: 8px;
    width: 8px;
    background-color: ${(props) => {
      if (props.status === "paid") {
        return "rgb(51, 214, 159)";
      } else if (props.status === "pending") {
        return "rgb(255, 143, 0)";
      } else if (props.status === "draft") {
        return "rgb(151, 151, 151)";
      }
    }};
    border-radius: 100%;
    margin-right: 8px;
  }
`;

const Proceed = styled.img`
  position: absolute;
  right: 32px;
  bottom: 32px;
`;

function Invoices(props) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
  });

  return (
    <Wrapper>
      <HeavyP>
        <span>#</span>
        {props.id}
      </HeavyP>

      <LightP className="due">Due {props.due}</LightP>

      <LightP className="name">{props.name}</LightP>

      <Amount>{formatter.format(props.amount)}</Amount>

      <Status status={props.status}>
        <div></div>
        <p>{props.status}</p>
      </Status>

      <Proceed src={process.env.PUBLIC_URL + "./images/icon-arrow-right.svg"} />
    </Wrapper>
  );
}

export default Invoices;
