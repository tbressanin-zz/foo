import React from "react";

class Previous extends React.Component<any> {

  render() {
    const { isActive } = this.props;
    if (isActive === false) return null;

    return (
      <button onClick={() => this.props.goToPreviousStep()}>
        Previous
      </button>
    );
  }
}

export { Previous };
