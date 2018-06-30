import React from "react";
import PropTypes from "prop-types";
import Item from "./NotificationItem";
import NotificationType from "./NotificationType";
import * as helper from "./helper";

export default function Notification({
  dataSource,
  displayIn = 6000,
  closeNotification
}) {
  return (
    <div>
      {dataSource.map((p, i) => {
        return (
          <Item
            key={p.id || i}
            {...p}
            displayIn={displayIn}
            closeNotification={() => {
              if (p.closeNotification) p.closeNotification();
              if (closeNotification) closeNotification(p);
            }}
          />
        );
      })}
    </div>
  );
}

Notification.propTypes = {
  dataSource: PropTypes.array.isRequired,
  displayIn: PropTypes.number,
  closeNotification: PropTypes.func
};
