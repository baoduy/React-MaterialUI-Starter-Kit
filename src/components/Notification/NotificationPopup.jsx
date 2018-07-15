import React from "react";
import PropTypes from "prop-types";
import Item from "./NotificationItem";
import NotificationItem from "./NotificationItem";

//Render the Popup of the list notificationItem
export default function NotificationPopup({
  dataSource,
  displayIn,
  subsequentDelay,
  closeNotification
}) {
  if (!dataSource) return <React.Fragment />;
  let count = dataSource.length - 1;

  return (
    <React.Fragment>
      {dataSource.map((p, i) => {
        return (
          <Item
            key={p.id || i}
            {...p}
            displayIn={displayIn + count-- * subsequentDelay}
            autoClose={i === 0}
            closeNotification={() => {
              if (p.closeNotification) p.closeNotification();
              if (closeNotification) closeNotification(p);
            }}
          />
        );
      })}
    </React.Fragment>
  );
}

NotificationPopup.defaultProps = {
  displayIn: 6000,
  subsequentDelay: 1000
};

NotificationPopup.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.shape(NotificationItem.propTypes))
    .isRequired,
  displayIn: PropTypes.number,
  closeNotification: PropTypes.func
};
