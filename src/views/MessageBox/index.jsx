/* eslint-disable */
import React from "react";
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

class MessageBoxPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      open: false,
      type: ""
    };
  }

  showMessageBox = type => {
    this.setState({
      message: `The Message box of ${type}`,
      open: true,
      type
    });
  };

  render() {
    const { message, open, type } = this.state;

    return (
      <div>
        <MessageBox
          message={message}
          open={open}
          type={type}
          handleClose={() =>
            this.setState({
              open: false
            })
          }
        />
        <Card>
          <CardBody>
            <Grid container justify="center">
              <GridItem xs={12} sm={12} md={6} style={{ textAlign: "center" }}>
                <h5>
                  <small>Click to view Message Box</small>
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
                  <GridItem xs={12} sm={12} md={4} />
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
