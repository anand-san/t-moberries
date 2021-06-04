import React from 'react'
import {ComponentProps} from "./Stepper.types"

export default function StepperBehaviours(props: ComponentProps) {
    const [activeStep, setActiveStep] = React.useState(0);

    function getStepContent(step: number) {
        return props.stepsData[props.stepsLabel[step]].component;
      }
    
      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleReset = () => {
        setActiveStep(0);
      };

    return {
        activeStep,
        setActiveStep,
        getStepContent,
        handleNext,
        handleBack,
        handleReset
    }
}
