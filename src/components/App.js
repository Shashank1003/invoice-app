import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { invoiceDataAction } from "../actions";
import { useState } from "react";
import useLocalStorage from "../useLocalStorage";
import { dark, light } from "../colors";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideStrip from "./SideStrip.js";
import Home from "../components/Home";

const Container = styled.main`
  background-color: ${(props) => props.theme.bg};
  transition: all 300ms ease-in-out;
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

function App() {
  const invoiceData = useSelector((state) => state.invoiceDataReducer);
  const dispatch = useDispatch();
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <Router>
        <div>
          {/* {console.log(invoiceData)} */}
          {/* <button onClick={() => dispatch(invoiceDataAction([]))}>VALUE</button> */}
        </div>
        <Container>
          <SideStrip theme={theme} themeChange={themeToggle} />
          <Home />
          <Switch></Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
