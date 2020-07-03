import React from 'react';
import { Step } from './step-view/step';


function App() {
  const {
    isActive,
    displayPrevious,
    displayNext,
    displaySubmit,
    component,
    children,
  } = this.props;

  if (isActive === false) return null;

  return (
    <React.Fragment>
      <Step/>
    </React.Fragment>
  );
}

export default App;
