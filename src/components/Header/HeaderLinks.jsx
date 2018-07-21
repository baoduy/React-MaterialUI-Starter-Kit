import React from "react";
//import { Manager, Target, Popper } from "react-popper";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "../CustomInput/CustomInput.jsx";
import Button from "../CustomButtons/Button.jsx";

import NotificationCenter from "../../components/Notification";
import headerLinksStyle from "./headerLinksStyle";

function HeaderLinks({ classes, notifications, ...others }) {
  return (
    <div>
      <div className={classes.searchWrapper}>
        <CustomInput
          formControlProps={{
            className: classes.margin + " " + classes.search
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search"
            }
          }}
        />
        <Button color="white" aria-label="edit" justIcon round>
          <Search />
        </Button>
      </div>
      <Button
        color={window.innerWidth > 959 ? "transparent" : "white"}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        aria-label="Dashboard"
        className={classes.buttonLink}
      >
        <Dashboard className={classes.icons} />
        <Hidden mdUp>
          <p className={classes.linkText}>Dashboard</p>
        </Hidden>
      </Button>
      <NotificationCenter
        ButtonProps={{
          color: window.innerWidth > 959 ? "transparent" : "white",
          justIcon: window.innerWidth > 959,
          simple: !(window.innerWidth > 959),
          classes: {
            button: classes.buttonLink,
            icon: classes.icons
          }
        }}
        items={notifications}
        {...others}
      />
      <Button
        color={window.innerWidth > 959 ? "transparent" : "white"}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        aria-label="Person"
        className={classes.buttonLink}
      >
        <Person className={classes.icons} />
        <Hidden mdUp>
          <p className={classes.linkText}>Profile</p>
        </Hidden>
      </Button>
    </div>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
