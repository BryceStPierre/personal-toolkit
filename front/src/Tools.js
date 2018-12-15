import React, { Component } from 'react'

import Header from './Header';
import Grid from './Grid';

class Tools extends Component {
  render() {
    return (
      <div className='tools'>
        <Header position='top'>
          <h1 className='centered'>
            Personal Toolkit
          </h1>
        </Header>
        <Grid>
          <div className='grid-item'></div>
        </Grid>
        <Header position='bottom'>
          <p className='centered'>Developed by Bryce St. Pierre</p>
        </Header>
      </div>
    )
  }
}

export default Tools;
