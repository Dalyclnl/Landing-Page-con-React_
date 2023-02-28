//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { Card } from "./component/Card";
import { Jumbotron } from "./component/Jumbotron";
import { Navbar } from "./component/Navbar";


//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
ReactDOM.render(<Navbar />, document.querySelector("#navbar"));
ReactDOM.render(<Jumbotron />, document.querySelector("#jumbotron"));
ReactDOM.render(<Card />, document.querySelector("#card_1"));
