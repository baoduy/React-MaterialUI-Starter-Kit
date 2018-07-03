import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
//Style-sheets
import "./assets/less/material-dashboard-react.less";

import indexRoutes from "routes/index.jsx";
import storeCreator from "./store";
import initialState from "./reducers/initialState";

//Update for Reserved proxy
window._base = document.getElementsByTagName("base")[0].getAttribute("href");
console.info(`base URL ${window._base}`);

const hist = createBrowserHistory({ basename: window._base });
const store = storeCreator(initialState);

const renderComponent = () => {
  ReactDOM.render(
    <Provider store={store}>
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
