import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import NotificationGroupStyle from "./NotificationGroupStyle";
import NotificationItem from "./NotificationItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

function NotificationGroup({ title, items, classes }) {
  return (
    <ExpansionPanel className={classes.root}>
      <ExpansionPanelSummary
        className={classes.summary}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography className={classes.heading}>{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.details}>
        <List className={classes.details}>
          {items.map((n, i) => (
            <React.Fragment key={i}>
              <Divider />
              <NotificationItem {...n} />
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

NotificationGroup.defaultProps = {};

NotificationGroup.propTypes = {
  //the title of notification
  title: PropTypes.string,
  items: PropTypes.any,
  //Close handler.
  onClose: PropTypes.func
};

export default withStyles(NotificationGroupStyle)(NotificationGroup);
