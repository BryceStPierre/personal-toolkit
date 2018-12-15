import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
  render() {
    return (
      <div className={`header ${this.props.position}`}>
        {this.props.children}
      </div>
    )
  }
}

export default Header;