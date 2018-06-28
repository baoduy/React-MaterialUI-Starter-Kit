import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
// import { AppContainer } from "react-hot-loader";
// import App from "./layouts/Dashboard/Dashboard";
//Style-sheets
import "./assets/less/App.less";
import "./assets/less/material-dashboard-react.less";

import indexRoutes from "routes/index.jsx";
import storeCreator from "./store";
import initialState from "./reducers/initialState";

const hist = createBrowserHistory();
const store = storeCreator(initialState);

const renderComponent = () => {
    ReactDOM.render(<Provider store={store}>
        <Router history={hist}>
            <Switch>
                {indexRoutes.map((prop, key) => {
                    return <Route path={prop.path} component={prop.component} key={key} />;
                })}
            </Switch>
        </Router>
    </Provider>,
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
