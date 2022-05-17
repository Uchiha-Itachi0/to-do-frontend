import React from "react";
import Home from "./pages/auth/Home";
import GlobalStyle from "./utils/GlobalStyleSheet/GlobalStyleSheet";
import { useSelector } from 'react-redux';
import VARIABLES from "./utils/Variables";

function App() {

  const theme = useSelector(state => state.theme.theme);
  return (
    <>
      <GlobalStyle theme={theme} VARIABLES={VARIABLES}/>
      <Home />
    </>
  );
}

export default App;
