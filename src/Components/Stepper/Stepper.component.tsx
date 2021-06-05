import React from 'react';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StepIconProps } from '@material-ui/core/StepIcon';
import Container from '@material-ui/core/Container';
import StepperBehaviours from "./Stepper.behaviour"
import {useColorlibStepIconStyles, ColorlibConnector} from "./Stepper.styles"
import {ComponentProps, StepsData} from "./Stepper.types"
import CircularProgress from '@material-ui/core/CircularProgress';

export default function CustomizedSteppers(props:ComponentProps) {
  const {activeStep, getStepContent,handleNext,handleBack, processingCallback, classes} = StepperBehaviours(props)
  const {stepsLabel, stepsData} = props

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {stepsLabel.map((label,index) => (
          <Step key={`step-${index}`}>
            <StepLabel StepIconComponent={props => ColorlibStepIcon(props, stepsData)}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Container maxWidth="sm">
        {activeStep === stepsLabel.length ? (
          <div>
            <Typography className={classes.instructions}>
              <img src="https://i.pinimg.com/originals/b9/88/b7/b988b7c3e84e1f83ef9447157831b460.gif" alt="thank_you" width="100%"/>
            </Typography>
          </div>
        ) : (
          <div>
            <Typography component="section" className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className={classes.stepperFooter}>
              <div>
                {props.footerLeft}
              </div>
              <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {processingCallback ? <CircularProgress className={classes.processingCallback} size={25} /> : activeStep === stepsLabel.length - 1 ? 'Confirm' : 'Next'}
              </Button>
            </div>
          </div>
          </div>
        )}
      </Container>
    </div>
  );
}

// Handle icons active/inactive styling
function ColorlibStepIcon(iconProps: StepIconProps, stepsData: StepsData) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = iconProps;

  interface Icons {
    [index: string]: React.ReactElement
  }
  let icons: Icons = {};

  Object.keys(stepsData).map((e:string, i:number) => icons[i+1] = stepsData[e].icon)

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(iconProps.icon)]}
    </div>
  );
}