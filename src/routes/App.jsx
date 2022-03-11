import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "../containers/Layout.jsx";
import RecoveryPassword from "../containers/RecoveryPassword.jsx";
import { EmailSend } from "../containers/EmailSend.jsx";

import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import { Login } from "../pages/Login.jsx";
import { CreateAccount } from "../pages/CreateAccount.jsx";
import { MyAccount } from "../pages/MyAccount.jsx";


import AppContext from "../context/AppContext.js";
import useInitialState from "../hooks/useInitialState.js";


const App = () => {
  const initialState = useInitialState();

  return(
    <AppContext.Provider value = {initialState}>
      <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element= {<Home/>} />
              <Route path="/login" element = {<Login/>} />
              <Route path="/create-account" element = {<CreateAccount/>} />
              <Route path="/recovery-password" element={<RecoveryPassword/>} />
              <Route path="/my-account" element={<MyAccount/>} />

              <Route path="/email-send" element={<EmailSend/>} />

              <Route path = "*" element={<NotFound/>} />
            </Routes>
          </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default (App);