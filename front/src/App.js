import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <FontAwesomeIcon icon="igloo" />
        </header>
      </div>
    );
  }
}

export default App;
