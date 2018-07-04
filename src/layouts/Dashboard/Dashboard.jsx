import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// creates a beautiful scrollbars
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import dashboardRoutes from "routes/dashboard.jsx";
import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import Notification from "../../components/Notification";
import * as actions from "../../views/MessageBox/Actions";
import ExceptionHandler from "./ExceptionHandler";

import { getImgSrc } from "../../commons/commonFuncs";
//Import may not working with Reserved proxy so using require instead.
const image = getImgSrc(require("../../assets/img/sidebar-2.jpg"));
const logo = require("../../assets/img/react_logo.svg");

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

//Connect component to Redux store.
@connect(
  state => {
    return {
      notifications: state.notifications || []
    };
  },
  dispatch => {
    return { actions: bindActionCreators(actions, dispatch) };
  }
)
class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      mobileOpen: false
    };
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/maps";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") <= -1) return;
    const ps = new PerfectScrollbar(this.refs.mainPanel);
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname === e.location.pathname) return;

    this.refs.mainPanel.scrollTop = 0;
    if (this.state.mobileOpen) this.setState({ mobileOpen: false });
  }

  render() {
    const { classes, notifications, ...rest } = this.props;
    return (
      <ExceptionHandler>
        <div className={classes.wrapper}>
          <Sidebar
            routes={dashboardRoutes}
            logoText={"Creative Tim"}
            logo={logo}
            image={image}
            handleDrawerToggle={this.handleDrawerToggle}
            open={this.state.mobileOpen}
            color="blue"
            {...rest}
          />
          <div className={classes.mainPanel} ref="mainPanel">
            <Header
              routes={dashboardRoutes}
              handleDrawerToggle={this.handleDrawerToggle}
              {...rest}
            />
            {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
            {this.getRoute() ? (
              <div className={classes.content}>
                <div className={classes.container}>{switchRoutes}</div>
              </div>
            ) : (
              <div className={classes.map}>{switchRoutes}</div>
            )}
            {this.getRoute() ? <Footer /> : null}
          </div>
          <Notification dataSource={notifications} />
        </div>
      </ExceptionHandler>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(App);
