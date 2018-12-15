import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Grid extends Component {
  render() {
    return (
      <div className="grid">
        {this.props.children}
      </div>
    )
  }
}

export default Grid;