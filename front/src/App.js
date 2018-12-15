import React, { Component } from 'react';

import Menu from './Menu';
import Tools from './Tools';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Tools />
      </div>
    );
  }
}

export default App;
