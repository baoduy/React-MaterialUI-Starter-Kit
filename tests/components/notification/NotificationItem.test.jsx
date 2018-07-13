/*eslint no-console: ["off", { allow: ["warn", "error"] }] */

import React from "react";
import { mount } from "enzyme";

import SvgIcon from "@material-ui/core/SvgIcon";
import NotificationItem from "../../../src/components/Notification/NotificationItem";
import Type from "../../../src/components/Notification/NotificationType";

const render = ({ callBack, ...rest } = {}) => {
  if (!callBack) callBack = () => true;

  const item = mount(
    <NotificationItem
      {...rest}
      closeNotification={callBack}
      message="Test Notification Item"
    />
  );

  if (item.mount) item.mount();
  return item;
};

const promiseComponent = ({ displayIn, ...rest }) =>
  new Promise((resolve, reject) => {
    let called = false;

    const item = render({
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

  test("update displayIn from 0 to 5 the closeNotification will be called", async () => {
    const item = render({ displayIn: 0 });

    //DisplayIn = 0
    const p1 = new Promise((resolve, reject) => {
      item.setProps({ closeNotification: () => resolve(true) });
      setTimeout(() => reject(false), 10);
    });
    //closeNotification called
    await expect(p1).rejects.toBe(false);

    //DisplayIn = 10
    const p2 = new Promise((resolve, reject) => {
      item.setProps({ displayIn: 10, closeNotification: () => resolve(true) });
    });

    //closeNotification called
    await expect(p2).resolves.toBe(true);
  });

  test("throw exception when set unknown Type", () => {
    const original = console.error;
    console.error = jest.fn();
    render({ type: "Hello" });

    expect(console.error).toHaveBeenCalled();
    console.error = original;
  });

  test("throw exception when set icon Type", () => {
    const original = console.error;
    console.error = jest.fn();
    render({ icon: "Hello" });

    expect(console.error).toHaveBeenCalled();
    console.error = original;
  });

  test(`render ${Type.INFO}`, () => {
    const item = render({ type: Type.INFO });
    expect(item).toMatchSnapshot();
  });

  test(`render ${Type.CONFIRM}`, () => {
    const item = render({ type: Type.CONFIRM });
    expect(item).toMatchSnapshot();
  });

  test(`render ${Type.DANGER}`, () => {
    const item = render({ type: Type.DANGER });
    expect(item).toMatchSnapshot();
  });

  test(`render ${Type.SUCCESS}`, () => {
    const item = render({ type: Type.SUCCESS });
    expect(item).toMatchSnapshot();
  });

  test(`render ${Type.WARNING}`, () => {
    const item = render({ type: Type.WARNING });
    expect(item).toMatchSnapshot();
  });

  test(`render ${Type.WARNING} with custom Icon`, () => {
    const icon = <div id="icon">Duy</div>;
    const item = render({ type: Type.WARNING, icon });

    expect(item.find("#icon").length).toBe(1);
    expect(item).toMatchSnapshot();
  });

  test(`render ${Type.WARNING} with Icon is undefined`, () => {
    const item = render({ type: Type.WARNING, icon: undefined });
    expect(item).toMatchSnapshot();
  });
});
