/*eslint no-console: ["off", { allow: ["warn", "error"] }] */

import * as React from 'react';

import NotificationPopup from '../../../src/components/Notification/NotificationPopup';
import Type from '../../../src/components/Notification/NotificationType';
import { mount } from 'enzyme';

const render = ({ callBack, ...rest }: any = {}) => {
  if (!callBack) callBack = () => true;

  const item = mount(<NotificationPopup {...rest} onClose={callBack} />);

  if (item.mount) item.mount();
  return item;
};

describe(`Render NotificationPopup tests`, () => {
  test('Render 3 items', () => {
    const item = render({
      dataSource: [
        {
          type: Type.CONFIRM,
          message: 'Hello'
        },
        {
          type: Type.INFO,
          message: 'Hello'
        },
        {
          type: Type.DANGER,
          message: 'Hello'
        }
      ]
    });

    expect(item).toMatchSnapshot();
    expect(item.find('svg').length).toBe(6);
  });

  test('Error when no DataSource', () => {
    const original = console.error;
    console.error = jest.fn();
    render();

    expect(console.error).toHaveBeenCalled();
    console.error = original;
  });

  test('Error when DataSource is wrong type', () => {
    const original = console.error;
    console.error = jest.fn();
    render({ dataSource: [{}, {}, {}] });

    expect(console.error).toHaveBeenCalled();
    console.error = original;
  });

  test('onClose called', () => {
    const item = render({
      dataSource: [
        {
          type: Type.CONFIRM,
          message: 'Hello'
        },
        {
          type: Type.INFO,
          message: 'Hello'
        },
        {
          type: Type.DANGER,
          message: 'Hello',
          onClose: () => true
        }
      ],
      displayIn: 2,
      subsequentDelay: 1
    });

    const p = new Promise((r, j) => {
      item.setProps({ onClose: () => r(true) });
      setTimeout(() => j(false), 4000);
    });

    return expect(p).resolves.toBe(true);
  });
});
