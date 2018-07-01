import React from "react";
import PropTypes from "prop-types";
import Item from "./NotificationItem";

export default function Notification({
  dataSource,
  displayIn = 6000,
  closeNotification
}) {
  let count = dataSource.lengh - 1 || 0;
  return (
    <div>
      {dataSource.map((p, i) => {
        return (
          <Item
            key={p.id || i}
            {...p}
            displayIn={displayIn + count-- * 2000}
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
