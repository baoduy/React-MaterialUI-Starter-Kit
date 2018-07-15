import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";

//Render the Popup of the list notificationItem
export default function NotificationPopup({
  dataSource,
  displayIn,
  subsequentDelay,
  onClose
}) {
  if (!dataSource) return <React.Fragment />;
  let count = dataSource.length - 1;

  return (
    <React.Fragment>
      {dataSource.map((p, i) => {
        return (
          <NotificationItem
            key={p.id || i}
            {...p}
            displayIn={displayIn + count-- * subsequentDelay}
            autoClose={i === 0}
            onClose={event => {
              if (p.onClose) p.onClose(event);
              if (onClose) onClose(event);
            }}
          />
        );
      })}
    </React.Fragment>
  );
}

NotificationPopup.defaultProps = {
  displayIn: 3000,
  subsequentDelay: 1000
};

NotificationPopup.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.shape(NotificationItem.propTypes))
    .isRequired,
  displayIn: PropTypes.number,
  onClose: PropTypes.func
};
