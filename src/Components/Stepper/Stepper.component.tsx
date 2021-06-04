import React from 'react';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StepIconProps } from '@material-ui/core/StepIcon';
import Container from '@material-ui/core/Container';
import StepperBehaviours from "./Stepper.behaviour"
import {useColorlibStepIconStyles, mainStyle as useStyles, ColorlibConnector} from "./Stepper.styles"
import {ComponentProps} from "./Stepper.types"


function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

export default function CustomizedSteppers(props:ComponentProps) {
  const {activeStep, getStepContent,handleNext,handleBack, handleReset} = StepperBehaviours(props)
  const stepsLabel: String[] = Object.keys(props.stepsData)
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {stepsLabel.map((label,index) => (
          <Step key={`step-${index}`}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Container maxWidth="sm">
        {activeStep === stepsLabel.length ? (
          <div>
            <Typography className={classes.instructions}>
              All stepsLabel completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
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
                {activeStep === stepsLabel.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
          </div>
        )}
      </Container>
    </div>
  );
}
