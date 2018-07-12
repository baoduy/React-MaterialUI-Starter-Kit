import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import { mount, shallow } from "enzyme";

import SvgIcon from "@material-ui/core/SvgIcon";
import NotificationItem from "../../../src/components/Notification/NotificationItem";
import Type from "../../../src/components/Notification/NotificationType";

const render = (renderMethod, { callBack, ...rest } = {}) => {
  if (!callBack) callBack = () => true;

  const item = renderMethod(
    <NotificationItem
      {...rest}
      closeNotification={callBack}
      message="Test Notification Item"
    />
  );

  if (item.mount) item.mount();
  return item;
};

const mountComponent = props => render(mount, props);
const shallowComponent = props => render(shallow, props);

const promiseComponent = ({ displayIn, ...rest }) =>
  new Promise((resolve, reject) => {
    let called = false;

    const item = mountComponent({
      ...rest,
      displayIn: displayIn,
      callBack: () => {
        called = true;
        resolve(called);
      }
    });

    setTimeout(() => {
      if (!called) reject(called);
    }, displayIn + 10);
  });

describe(`Testing ${NotificationItem.displayName} component`, () => {
  test("closeNotification will be called", () => {
    const pm = promiseComponent({ displayIn: 200 });
    return expect(pm).resolves.toBe(true);
  });

  test("if displayIn is 0 the closeNotification wont be called", () => {
    const pm = promiseComponent({ displayIn: 0 });
    return expect(pm).rejects.toBe(false);
  });

  test("update displayIn from 0 to 5 the closeNotification will be called", () => {
    // const item = mountComponent({ displayIn: 0 });
    // expect(item.instance().timeout).toBe(undefined);
    // item.setProps({ displayIn: 5 });
    // expect(item.instance().timeout).toBeDefined();
  });

  test(`render ${Type.INFO}`, () => {
    const item = mountComponent({ type: Type.INFO });
    expect(item).toMatchSnapshot();
  });

  test(`render ${Type.CONFIRM}`, () => {
    const item = mountComponent({ type: Type.CONFIRM });
    expect(item).toMatchSnapshot();
  });

  test(`render ${Type.DANGER}`, () => {
    const item = mountComponent({ type: Type.DANGER });
    expect(item).toMatchSnapshot();
  });

  test(`render ${Type.SUCCESS}`, () => {
    const item = mountComponent({ type: Type.SUCCESS });
    expect(item).toMatchSnapshot();
  });

  test(`render ${Type.WARNING}`, () => {
    const item = mountComponent({ type: Type.WARNING });
    expect(item).toMatchSnapshot();
  });

  test(`render ${Type.WARNING} with custom Icon`, () => {
    const icon = (
      <SvgIcon>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </SvgIcon>
    );

    const item = mountComponent({ type: Type.WARNING, icon });
    expect(item).toMatchSnapshot();
  });

  test(`render ${Type.WARNING} with Icon is undefined`, () => {
    const item = mountComponent({ type: Type.WARNING, icon: undefined });
    expect(item).toMatchSnapshot();
  });
});
