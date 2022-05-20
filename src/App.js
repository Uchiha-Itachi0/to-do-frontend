import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/auth/Home";
import GlobalStyle from "./utils/GlobalStyleSheet/GlobalStyleSheet";
import { useSelector } from 'react-redux';
import VARIABLES from "./utils/Variables";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const theme = useSelector(state => state.theme.theme);
  const user = useSelector(state => state.user);
  return (
    <>
      <GlobalStyle theme={theme} VARIABLES={VARIABLES} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`${user.id}/dashboard`} element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
