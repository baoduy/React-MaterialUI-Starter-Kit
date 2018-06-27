import React from "react";
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
// import { AppContainer } from "react-hot-loader";
// import App from "./layouts/Dashboard/Dashboard";

//Style-sheets
import './assets/less/App.less';
import "./assets/css/material-dashboard-react.css?v=1.3.0";

import indexRoutes from "routes/index.jsx";

const hist = createBrowserHistory();

const renderComponent = () => {
    ReactDOM.render(
        <Router history={hist}>
            <Switch>
                {indexRoutes.map((prop, key) => {
                    return <Route path={prop.path} component={prop.component} key={key} />;
                })}
            </Switch>
        </Router>,
        document.getElementById("root")
    );
};

renderComponent();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./layouts/Dashboard/Dashboard", () => {
        renderComponent();
    });
}
