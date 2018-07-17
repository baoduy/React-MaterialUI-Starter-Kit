import React from "react";
import PropTypes from "prop-types";
import NotificationPopupItem from "./NotificationPopupItem";

export default function NotificationCenter({
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
          <NotificationPopupItem
            key={p.id || i}
            {...p}
            displayIn={displayIn + count-- * subsequentDelay}
            autoClose={i === 0}
            onClose={() => {
              if (p.onClose) p.onClose();
              if (onClose) onClose(p);
            }}
          />
        );
      })}
    </React.Fragment>
  );
}

NotificationCenter.defaultProps = {
  displayIn: 6000,
  subsequentDelay: 1000
};

NotificationCenter.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.shape(NotificationItem.propTypes))
    .isRequired,
  displayIn: PropTypes.number,
  onClose: PropTypes.func
};
