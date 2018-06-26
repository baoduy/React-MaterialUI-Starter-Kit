import React from 'react';

const reactLogo = require("./../assets/img/react_logo.svg");

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <p>Foo to the bar</p>
        <img src={reactLogo} height="480" />
      </div>
    );
  }
}

export default App;
