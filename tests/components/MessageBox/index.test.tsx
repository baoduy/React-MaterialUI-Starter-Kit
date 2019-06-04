/*eslint no-console: ["off", { allow: ["warn", "error"] }] */

import * as React from 'react';

import MessageBox from '../../../src/components/MessageBox';
import Type from '../../../src/components/MessageBox/MessageBoxType';
import { mount } from 'enzyme';

const render = ({ callBack, ...rest }: any = {}) => {
  if (!callBack) callBack = () => true;

  const item = mount(<MessageBox {...rest} actionHandler={callBack} />);

  if (item.mount) item.mount();
  return item;
};

describe(`Testing ${MessageBox.displayName} component`, () => {
  test('render without error', () => {
    const item = render({ message: 'Hello', open: true });
    expect(item).toMatchSnapshot();
  });

  test(`render ${Type.INFO}`, () => {
    const item = render({ type: Type.INFO, message: 'Hello' });
    expect(item).toMatchSnapshot();
  });

  test(`render ${Type.CONFIRM}`, () => {
    const item = render({ type: Type.CONFIRM, message: 'Hello' });
    expect(item).toMatchSnapshot();
  });

  test(`render ${Type.DANGER}`, () => {
    const item = render({ type: Type.DANGER, message: 'Hello' });
    expect(item).toMatchSnapshot();
  });

  test(`render ${Type.SUCCESS}`, () => {
    const item = render({ type: Type.SUCCESS, message: 'Hello' });
    expect(item).toMatchSnapshot();
  });

  test(`render ${Type.WARNING}`, () => {
    const item = render({ type: Type.WARNING, message: 'Hello' });
    expect(item).toMatchSnapshot();
  });
});
