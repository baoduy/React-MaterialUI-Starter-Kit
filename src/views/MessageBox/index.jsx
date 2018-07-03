/* eslint-disable */
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./Actions";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import MessageBox from "components/MessageBox";
import MessageBoxType from "components/MessageBox/MessageBoxType";
import Notification from "components/Notification";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

//Connect component to Redux store.
@connect(
  state => {
    return {
      messageBox: state.messageBox || {},
      notifications: state.notifications || []
    };
  },
  dispatch => {
    return { actions: bindActionCreators(actions, dispatch) };
  }
)
class MessageBoxPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageBox: props.messageBox,
      notifications: props.notifications
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      messageBox: nextProps.messageBox,
      notifications: nextProps.notifications
    });
  }

  showMessageBox = type => {
    this.props.actions.showMessage(
      type,
      `Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks. Message Box type ${type}`,
      this.dialogHandler
    );
  };

  dialogHandler = event => {
    const target = event.currentTarget || event.target;
    this.props.actions.notify(
      MessageBoxType.WARNING,
      `The clicked button is ${target.value}`
    );
  };

  render() {
    const { messageBox, notifications } = this.state;

    return (
      <div>
        <MessageBox {...messageBox} open={messageBox.open || false} />
        <Notification dataSource={notifications} />

        <Card>
          <CardBody>
            <Grid container justify="center">
              <GridItem xs={12} sm={12} md={6} style={{ textAlign: "center" }}>
                <h5>
                  <small>
                    Click to view Message Box. This demo is using Redux store to
                    manage the state and callback of Message. You can please a
                    MessageBox in your App level and using Redux store and
                    actions to share to all children components. The limitation
                    is only 1 message can be shown at the time. However that is
                    enough for MessageBox purpose.
                  </small>
                </h5>
              </GridItem>
            </Grid>
            <Grid container justify="center">
              <GridItem xs={12} sm={12} md={10} lg={8}>
                <Grid container>
                  <GridItem xs={12} sm={12} md={4}>
                    <Button
                      fullWidth
                      color="primary"
                      onClick={() =>
                        this.showMessageBox(MessageBoxType.SUCCESS)
                      }
                    >
                      Success
                    </Button>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <Button
                      fullWidth
                      color="primary"
                      onClick={() => this.showMessageBox(MessageBoxType.DANGER)}
                    >
                      Danger
                    </Button>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <Button
                      fullWidth
                      color="primary"
                      onClick={() =>
                        this.showMessageBox(MessageBoxType.WARNING)
                      }
                    >
                      Warning
                    </Button>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
            <Grid container justify={"center"}>
              <GridItem xs={12} sm={12} md={10} lg={8}>
                <Grid container>
                  <GridItem xs={12} sm={12} md={4}>
                    <Button
                      fullWidth
                      color="primary"
                      onClick={() => this.showMessageBox(MessageBoxType.INFO)}
                    >
                      Info
                    </Button>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <Button
                      fullWidth
                      color="primary"
                      onClick={() =>
                        this.showMessageBox(MessageBoxType.CONFIRM)
                      }
                    >
                      Confirm
                    </Button>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <Button
                      fullWidth
                      color="danger"
                      onClick={() =>
                        this.dialogHandler({
                          target: { value: "Notification" }
                        })
                      }
                    >
                      Show Notify
                    </Button>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(MessageBoxPage);
