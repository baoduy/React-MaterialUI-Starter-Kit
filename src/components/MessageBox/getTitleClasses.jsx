import MessageBoxType from "./MessageBoxType";

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
