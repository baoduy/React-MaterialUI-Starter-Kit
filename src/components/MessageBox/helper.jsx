import React from "react";
import Button from "@material-ui/core/Button";
import MessageBoxType from "./MessageBoxType";
import SvgIcon from "@material-ui/core/SvgIcon";

export function getTitleClasses(type, classes) {
  switch (type) {
    case MessageBoxType.CONFIRM:
      return classes.confirm;
    case MessageBoxType.DANGER:
      return classes.danger;
    case MessageBoxType.WARNING:
      return classes.warning;
    case MessageBoxType.SUCCESS:
      return classes.success;
    case MessageBoxType.INFO:
    default:
      return classes.info;
  }
}

export function getTitle(type) {
  switch (type) {
    case MessageBoxType.CONFIRM:
      return "Confirmation";
    case MessageBoxType.DANGER:
      return "Error";
    case MessageBoxType.WARNING:
      return "Warning";
    case MessageBoxType.SUCCESS:
      return "Successfully";
    case MessageBoxType.INFO:
    default:
      return "Information";
  }
}

export function getIcon(type, classes) {
  const style = {
    fontSize: 100,
    float: "left",
    paddingTop: "5px"
  };
  switch (type) {
    case MessageBoxType.CONFIRM:
      return (
        <SvgIcon className={classes.confirmIcon} style={style}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
        </SvgIcon>
      );
    case MessageBoxType.DANGER:
      return (
        <SvgIcon className={classes.dangerIcon} style={style}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </SvgIcon>
      );
    case MessageBoxType.WARNING:
      return (
        <SvgIcon className={classes.warningIcon} style={style}>
          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
        </SvgIcon>
      );
    case MessageBoxType.SUCCESS:
      return (
        <SvgIcon className={classes.successIcon} style={style}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </SvgIcon>
      );
    case MessageBoxType.INFO:
    default:
      return (
        <SvgIcon className={classes.infoIcon} style={style}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </SvgIcon>
      );
  }
}

export function getActions(type, handler, classes, okText, cancelText) {
  const okButton = (
    <Button
      className={classes.button}
      key="OK"
      value="OK"
      onClick={handler}
      variant="contained"
      color="primary"
      autoFocus
    >
      {okText}
    </Button>
  );

  const cancelButton = (
    <Button
      className={classes.button}
      key="CANCEL"
      value="CANCEL"
      variant="contained"
      onClick={handler}
    >
      {cancelText}
    </Button>
  );

  switch (type) {
    case MessageBoxType.CONFIRM:
      return [cancelButton, okButton];
    case MessageBoxType.DANGER:
      return [okButton];
    case MessageBoxType.WARNING:
      return [okButton];
    case MessageBoxType.SUCCESS:
      return [okButton];
    case MessageBoxType.INFO:
    default:
      return [okButton];
  }
}
