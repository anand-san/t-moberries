import React from 'react'
import { ComponentProps } from "./Stepper.types"
import {mainStyle as useStyles} from "./Stepper.styles"

export default function StepperBehaviours(props: ComponentProps) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [processingCallback, setProcessingCallback] = React.useState(false)
  function getStepContent(step: number) {
    return props.stepsData[props.stepsLabel[step]].component;
  }

  const handleNext = () => {
    setProcessingCallback(true)
    let cb = props.stepsData[props.stepsLabel[activeStep]].callback()
    setTimeout(() => {
      setProcessingCallback(false)
      if(!cb)
        return
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }, 350)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return {
    activeStep,
    setActiveStep,
    getStepContent,
    handleNext,
    handleBack,
    processingCallback,
    classes
  }
}
