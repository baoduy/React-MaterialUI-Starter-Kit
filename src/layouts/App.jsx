import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import appStyle from "./AppStyle";

const reactLogo = require("./../assets/img/react_logo.svg");

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <p>Foo to the bar</p>
        <img src={reactLogo} height="480" />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(appStyle)(App);
