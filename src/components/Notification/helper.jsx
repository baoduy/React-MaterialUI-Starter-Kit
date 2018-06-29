import NotificationType from "./NotificationType";
import SvgIcon from "@material-ui/core/SvgIcon";

export function getColor(type) {
  switch (type) {
    case NotificationType.CONFIRM:
      return "primary";
    case NotificationType.DANGER:
      return "danger";
    case NotificationType.WARNING:
      return "warning";
    case NotificationType.SUCCESS:
      return "success";
    case NotificationType.INFO:
    default:
      return "info";
  }
}

export function getIcon(type) {
  switch (type) {
    case NotificationType.CONFIRM:
      return (
        <SvgIcon>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
        </SvgIcon>
      );
    case NotificationType.DANGER:
      return (
        <SvgIcon>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </SvgIcon>
      );
    case NotificationType.WARNING:
      return (
        <SvgIcon>
          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
        </SvgIcon>
      );
    case NotificationType.SUCCESS:
      return (
        <SvgIcon>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </SvgIcon>
      );
    case NotificationType.INFO:
    default:
      return (
        <SvgIcon>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </SvgIcon>
      );
  }
}
