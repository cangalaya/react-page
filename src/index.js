import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import "./styles/global.css";


var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);