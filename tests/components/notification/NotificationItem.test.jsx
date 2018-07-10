import React from "react";
import NotificationItem from "../../../src/components/Notification/NotificationItem";

it(`${NotificationItem.displayName} is display correctly`, () => {
  expect(<NotificationItem />).toMatchSnapshot();
});
