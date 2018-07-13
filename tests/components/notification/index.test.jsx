/*eslint no-console: ["off", { allow: ["warn", "error"] }] */

import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import { mount } from "enzyme";

import Notification from "../../../src/components/Notification";
import Type from "../../../src/components/Notification/NotificationType";

const render = ({ callBack, ...rest } = {}) => {
  if (!callBack) callBack = () => true;

  const item = mount(<Notification {...rest} closeNotification={callBack} />);

  if (item.mount) item.mount();
  return item;
};

describe(`Render ${Notification.displayName} tests`, () => {
  test("Render 3 items", () => {
    const item = render({
      dataSource: [
        {
          type: Type.CONFIRM,
          message: "Hello"
        },
        {
          type: Type.INFO,
          message: "Hello"
        },
        {
          type: Type.DANGER,
          message: "Hello"
        }
      ]
    });

    expect(item).toMatchSnapshot();
    expect(item.find("svg").length).toBe(6);
  });

  test("Error when no DataSource", () => {
    const original = console.error;
    console.error = jest.fn();
    render();

    expect(console.error).toHaveBeenCalled();
    console.error = original;
  });

  test("Error when DataSource is wrong type", () => {
    const original = console.error;
    console.error = jest.fn();
    render({ dataSource: [{}, {}, {}] });

    expect(console.error).toHaveBeenCalled();
    console.error = original;
  });

  test("closeNotification called", () => {
    const item = render({
      dataSource: [
        {
          type: Type.CONFIRM,
          message: "Hello"
        },
        {
          type: Type.INFO,
          message: "Hello"
        },
        {
          type: Type.DANGER,
          message: "Hello",
          closeNotification: () => true
        }
      ],
      displayIn: 2,
      subsequentDelay: 1
    });

    const p = new Promise((r, j) => {
      item.setProps({ closeNotification: () => r(true) });
      setTimeout(() => j(false), 4000);
    });

    return expect(p).resolves.toBe(true);
  });
});
