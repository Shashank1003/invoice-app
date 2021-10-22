import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 103px;
  height: 100vh;
  background-color: ${(props) => props.theme.sideStrip};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border-radius: 0px 20px 20px 0px;
  position: absolute;
  top: 0;
  left: 0;
`;

const BlueBoxBig = styled.div`
  width: 103px;
  height: 103px;
  background-color: ${(props) => props.theme.blueButton};
  border-radius: 0px 20px 20px 0px;
  position: relative;
`;

const BlueBoxSmall = styled.div`
  position: absolute;
  bottom: 0;
  width: 103px;
  height: calc(103px / 2);
  background-color: ${(props) => props.theme.blueButtonHover};
  border-radius: 20px 0 20px 0;
`;

const Logo = styled.img`
  position: absolute;
  width: 40px;
  height: 37.71px;
  left: calc(50% - 40px / 2 + 0.5px);
  top: 33.29px;
  z-index: 2;
`;

const BottomBox = styled.div``;

const ThemeButton = styled.div`
  position: absolute;
  width: 19.99px;
  height: 19.9px;
  left: calc(50% - 19.99px / 2 - 0.51px);
  bottom: 121.1px;
  transition: all 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

const ThemeIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const LineBreak = styled.hr`
  border: none;
  border-top: 1px solid #494e6e;
  position: absolute;
  width: 103px;
  left: calc(50% - 103px / 2);
  bottom: 88px;
`;

const Person = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  left: calc(50% - 40px / 2 - 0.5px);
  bottom: 24px;
  border-radius: 20px;
`;

function SideStrip(props) {
  return (
    <Wrapper>
      <BlueBoxBig>
        <Logo src={process.env.PUBLIC_URL + "./images/logo.svg"} alt="logo" />
        <BlueBoxSmall />
      </BlueBoxBig>

      <BottomBox>
        <ThemeButton onClick={props.themeChange}>
          {props.theme === "light" ? (
            <ThemeIcon
              src={process.env.PUBLIC_URL + "./images/icon-moon.svg"}
              alt="moon"
            />
          ) : (
            <ThemeIcon
              src={process.env.PUBLIC_URL + "./images/icon-sun.svg"}
              alt="sun"
            />
          )}
        </ThemeButton>

        <LineBreak />

        <Person
          src={process.env.PUBLIC_URL + "./images/image-avatar.jpg"}
          alt="person"
        />
      </BottomBox>
    </Wrapper>
  );
}

export default SideStrip;
