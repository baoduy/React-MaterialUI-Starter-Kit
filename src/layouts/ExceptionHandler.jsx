/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NotificationActions from '../actions/Notifications';
import { getErrorMessage } from '../commons/exceptionService';
import NotificationType from '../components/Notification/NotificationType';

//Connect component to Redux store.
//This one is a component however we are bot put it into components folder
//Because it needs to connect to Redux actions to send the notification.
@connect(
  undefined,
  dispatch => ({ actions: bindActionCreators(NotificationActions, dispatch) })
)
export default class ExceptionHandler extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    const { global, disabled } = this.props;
    if (global !== true || disabled === true) return;
    window.addEventListener('error', this.globalErrorHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('error', this.globalErrorHandler);
  }

  /**
   * Exceptio handling for any error throw by any children control.
   *
   * @memberof ExceptionHandler
   */
  globalErrorHandler = event => {
    event.preventDefault();
    event.cancelBubble = true; //Stop the Bubble up

    const msg = getErrorMessage(event.error, event);
    this.props.actions.notify(NotificationType.DANGER, msg);
  };

  /**
   * From 16 onward all exception from children components
   * will be catch by parent component which implemented the componentDidCatch(error, info)
   * More details here https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
   *
   * @param {*} error
   * @param {*} info
   * @memberof ExceptionHandler
   */
  componentDidCatch(error, info) {
    const { disabled } = this.props;
    if (disabled === true) {
      console.error(error);
      throw error;
    } else {
      const msg = getErrorMessage(error, info);
      this.props.actions.notify(NotificationType.DANGER, msg);
    }
  }

  render() {
    return this.props.children;
  }
}

ExceptionHandler.propTypes = {
  global: PropTypes.bool,
  disabled: PropTypes.bool
};
