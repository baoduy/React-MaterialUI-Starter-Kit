import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import HeaderLinks from "./HeaderLinks";

import headerStyle from "./headerStyle.jsx";

function Header({
  classes,
  color,
  routes,
  location,
  path,
  handleDrawerToggle,
  ...others
}) {
  function makeBrand() {
    let name;
    routes.map(prop => {
      if (path === location.pathname) {
        name = prop.navbarName;
      }
      return null;
    });
    return name;
  }

  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <span className={classes.title}>{makeBrand()}</span>
        </div>
        <Hidden smDown implementation="css">
          <HeaderLinks {...others} />
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.appResponsive}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  notificationBackgroundImage: PropTypes.string,
  notifications: PropTypes.array,
  onNotificationChange: PropTypes.func.isRequired,
  onNotificationDelete: PropTypes.func.isRequired
};

export default withStyles(headerStyle)(Header);
