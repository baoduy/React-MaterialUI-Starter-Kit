/*eslint no-console: ["off", { allow: ["warn", "error"] }] */

import React from "react";
import { mount } from "enzyme";

import NotificationItem from "../../../src/components/Notification/NotificationItem";
import Type from "../../../src/components/Notification/NotificationType";

const render = ({ onClose, ...rest } = {}) => {
  if (!onClose) onClose = () => true;

  const item = mount(
    <NotificationItem
      {...rest}
      onClose={onClose}
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
      onClose: () => {
        called = true;
        resolve(called);
      }
    });

    setTimeout(() => {
      if (!called) reject(called);
    }, displayIn + 2);
  });

describe(`Testing ${NotificationItem.displayName} component`, () => {
  test("onClose will be called", () => {
    const pm = promiseComponent({ displayIn: 2 });
    return expect(pm).resolves.toBe(true);
  });

  test("if displayIn is 0 the onClose wont be called", () => {
    const pm = promiseComponent({ displayIn: 0 });
    return expect(pm).rejects.toBe(false);
  });

  test("update displayIn from 0 to 5 the onClose will be called", async () => {
    const item = render({ displayIn: 0 });

    //DisplayIn = 0
    const p1 = new Promise((resolve, reject) => {
      item.setProps({ onClose: () => resolve(true) });
      setTimeout(() => reject(false), 2);
    });
    //onClose called
    await expect(p1).rejects.toBe(false);

    //DisplayIn = 5ms
    const p2 = new Promise((resolve, reject) => {
      item.setProps({ displayIn: 2, onClose: () => resolve(true) });
    });

    //onClose called
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

  test("onClose must be a func", () => {
    const original = console.error;
    console.error = jest.fn();
    render({ onClose: "Hello" });

    expect(console.error).toHaveBeenCalled();
    console.error = original;
  });

  test("onClick must be a func", () => {
    const original = console.error;
    console.error = jest.fn();
    render({ onClick: "Hello" });

    expect(console.error).toHaveBeenCalled();
    console.error = original;
  });

  test("onClick test", () => {
    var onClick = jest.fn();
    const wrapper = render({ onClick });
    console.log(
      wrapper.findWhere(item => item.type() === "span" && item.onClick).length
    );

    expect(wrapper).toMatchSnapshot();
    expect(onClick).toHaveBeenCalled();
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
