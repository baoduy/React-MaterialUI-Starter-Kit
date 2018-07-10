import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import TestRenderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

import NotificationItem from "../../../src/components/Notification/NotificationItem";
import Type from "../../../src/components/Notification/NotificationType";

describe(`Testing ${NotificationItem.displayName} component`, () => {
  it(`${NotificationItem.displayName} closeNotification will be called`, () => {
    const item = shallow(
      <NotificationItem
        message="Notification"
        closeNotification={() => (called = true)}
      />
    );

    let called = false;

    setTimeout(() => expect(called).toBe(true), 11);
  });

  it(`${NotificationItem.displayName} render ${Type.INFO}`, () => {
    const item = mount(
      <NotificationItem
        type={Type.INFO}
        message="Notification"
        closeNotification={() => {}}
      />
    );

    expect(item).toMatchSnapshot();
  });

  it(`${NotificationItem.displayName} render ${Type.CONFIRM}`, () => {
    const item = mount(
      <NotificationItem
        type={Type.CONFIRM}
        message="Notification"
        closeNotification={() => {}}
      />
    );

    expect(item).toMatchSnapshot();
  });

  it(`${NotificationItem.displayName} render ${Type.DANGER}`, () => {
    const item = mount(
      <NotificationItem
        type={Type.DANGER}
        message="Notification"
        closeNotification={() => {}}
      />
    );

    expect(item).toMatchSnapshot();
  });

  it(`${NotificationItem.displayName} render ${Type.SUCCESS}`, () => {
    const item = mount(
      <NotificationItem
        type={Type.SUCCESS}
        message="Notification"
        closeNotification={() => {}}
      />
    );

    expect(item).toMatchSnapshot();
  });

  it(`${NotificationItem.displayName} render ${Type.WARNING}`, () => {
    const item = mount(
      <NotificationItem
        type={Type.WARNING}
        message="Notification"
        closeNotification={() => {}}
      />
    );

    expect(item).toMatchSnapshot();
  });
});
