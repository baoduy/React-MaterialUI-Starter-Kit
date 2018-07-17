import React from "react";
import PropTypes from "prop-types";
import NotificationPopupItem from "./NotificationPopupItem";

//Render the Popup of the list NotificationPopupItem
export default function NotificationPopup({
  dataSource,
  displayIn,
  subsequentDelay
}) {
  if (!dataSource) return <React.Fragment />;
  let count = dataSource.length - 1;

  return (
    <React.Fragment>
      {dataSource.map((p, i) => {
        return (
          <NotificationPopupItem
            key={p.id || i}
            {...p}
            displayIn={displayIn + count-- * subsequentDelay}
            autoClose={i === 0}
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
  dataSource: PropTypes.arrayOf(
    PropTypes.shape(NotificationPopupItem.propTypes)
  ).isRequired,
  displayIn: PropTypes.number
};
