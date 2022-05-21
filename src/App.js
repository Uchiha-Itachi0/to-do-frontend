import React, { useEffect } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/auth/Home";
import GlobalStyle from "./utils/GlobalStyleSheet/GlobalStyleSheet";
import { useDispatch, useSelector } from 'react-redux';
import VARIABLES from "./utils/Variables";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "./utils/axios";
import { USER_INFO } from "./redux/Slice/user";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  useEffect(() => {
    const fetchUser = async () => {
      const graphQlQuery = `
      query{
        me{_id, name, email, catogaries}
      }
      `
      try {
        const response = await axios.post("/graphql", { query: graphQlQuery }, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        })
        const baseObj = response.data.data.me;
        const userInfo = {
          ...user,
          name: baseObj.name,
          email: baseObj.email,
          id: baseObj._id,
          token: localStorage.getItem("token"),
          catogaries: baseObj.catogaries
        }
        dispatch(USER_INFO(userInfo));
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchUser()
  }, [dispatch, user])
  const theme = useSelector(state => state.theme.theme);
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
