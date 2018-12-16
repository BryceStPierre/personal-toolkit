import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './Menu';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Route exact path="/" component={Home}/>
        {/* <Route path="/about" component={About}/>
        <Route path="/sign-in" component={SignIn}/>
        <Route path="/browse" component={Browse}/>
        <Route path="/consume" component={Consume}/>
        <Route path="/terms-of-use" component={Terms}/>
        <Route path="/privacy-policy" component={Privacy}/> */}
      </div>
    );
  }
}

export default App;
