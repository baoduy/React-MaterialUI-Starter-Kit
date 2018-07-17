import React from "react";
import PropTypes from "prop-types";
import NotificationPopupItem from "./NotificationPopupItem";

function defaultPopupItemComponent(props) {
  return <NotificationPopupItem {...props} />;
}

//Render the Popup of the list NotificationPopupItem
export default function NotificationPopup({
  PopupItemComponent,
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
          <PopupItemComponent
            key={p.id || i}
            {...p}
            onClose={e => {
              if (p.onClose) p.onClose(e);
              if (onClose) onClose(e);
            }}
            displayIn={displayIn + count-- * subsequentDelay}
            autoClose={i === 0}
          />
        );
      })}
    </React.Fragment>
  );
}

NotificationPopup.defaultProps = {
  //Using default defaultPopupItemComponent render
  PopupItemComponent: defaultPopupItemComponent,
  displayIn: 3000,
  subsequentDelay: 1000
};

NotificationPopup.propTypes = {
  //This property allow to customize the NotificationPopupItem.
  PopupItemComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  dataSource: PropTypes.arrayOf(
    PropTypes.shape(NotificationPopupItem.propTypes)
  ).isRequired,
  displayIn: PropTypes.number,
  onClose: PropTypes.func
};
