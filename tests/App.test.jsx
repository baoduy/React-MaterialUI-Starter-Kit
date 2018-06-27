import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import App from '../src/layouts/Dashboard/Dashboard';

it('App is rendered', () => {
    // Render App in the document
    const appElement = TestUtils.renderIntoDocument(
        <App />
    );

    const appNode = ReactDOM.findDOMNode(appElement);

    console.log(`App Content: ${appNode.textContent}`);

    // Verify text content
    expect(appNode.textContent).toEqual('Hello World!Foo to the bar');
});
