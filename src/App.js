import React, { Component, useState } from 'react';
import StepView from './steps/step-view'
class App extends Component {

  constructor() {
    super();
    this.state = {
      currentView: 1
    }
  }

  render() {
    console.log('view', this.state)

    return (
        <StepView currentView={this.state.currentView} />
    )
  }
}
export default App;
