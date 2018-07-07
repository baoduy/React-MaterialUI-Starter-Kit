/*eslint no-console: ["off", { allow: ["warn", "error"] }] */

import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import Provider from "react-redux-thunk-store";
import ExceptionHandler from "./layouts/ExceptionHandler";
import MessageAndNotificationView from "./layouts/MessageAndNotificationView";

//Style-sheets
import "./assets/less/material-dashboard-react.less";

import reducers from "./reducers";
import indexRoutes from "routes/index.jsx";

//Update for Reserved proxy
window._base = document.getElementsByTagName("base")[0].getAttribute("href");
console.info(`base URL ${window._base}`);

const hist = createBrowserHistory({ basename: window._base });

const createRouter = () => {
  return (
    <BrowserRouter basename={window._base || "/"}>
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            );
          })}
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

const renderComponent = () => {
  ReactDOM.render(
    <Provider reducers={reducers}>
      <ExceptionHandler global disabled={false}>
        {createRouter()}
        <MessageAndNotificationView />
      </ExceptionHandler>
    </Provider>,
    document.getElementById("root")
  );
};

renderComponent();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./layouts/Dashboard", () => {
    renderComponent();
  });
}
