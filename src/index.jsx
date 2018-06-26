import React from "react";
import ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import App from "./layouts/App";

//Style-sheets
import './assets/less/App.less';
import "./assets/css/material-dashboard-react.css?v=1.3.0";

const rootEl = document.getElementById("root");

const renderComponent = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        rootEl
    );
};

renderComponent(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./layouts/App", () => {
        renderComponent(App);
    });
}
