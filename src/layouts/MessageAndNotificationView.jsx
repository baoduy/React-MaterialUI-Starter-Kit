import React from "react";
import { connect } from "react-redux";
import Notification from "../components/Notification/NotificationPopup";
import MessageBox from "../components/MessageBox";

//Connect component to Redux store.
@connect(state => {
  return {
    messageBox: state.messageBox || {},
    notifications: state.notifications || []
  };
})
export default class MessageAndNotificationView extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { notifications, messageBox } = this.props;
    return (
      <React.Fragment>
        <Notification dataSource={notifications} />
        <MessageBox {...messageBox} open={messageBox.open || false} />
      </React.Fragment>
    );
  }
}
