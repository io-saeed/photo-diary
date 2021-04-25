import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./app.js"
//import  App from "./components/index";
import 'bulma/css/bulma.css';
import "./stylesheets/index.css";




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));
