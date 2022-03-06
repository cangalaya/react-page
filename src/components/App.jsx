import React from "react";
import { hot } from 'react-hot-loader/root';
import Layout from "../containers/Layout.jsx";
import Login from "../containers/Login.jsx";
import { RecoveryPassword } from "../containers/RecoveryPassword.jsx";

const App = (props) => {
  return(
    <Layout>
      <Login />
      <RecoveryPassword />
    </Layout>
  )
}

export default hot(App);