import React from "react";
import { Previous, Next, Submit } from "./buttons";

class Step extends React.Component<any> {

    render() {
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
                {component ? React.createElement(component) : children}
                <Previous
                    isActive={displayPrevious}
                    goToPreviousStep={() => this.props.goToPreviousStep()}
                />
                <Next
                    isActive={displayNext}
                    goToNextStep={() => this.props.goToNextStep()}
                />
                <Submit isActive={displaySubmit} />
            </React.Fragment>
        );
    }
}

export { Step };
