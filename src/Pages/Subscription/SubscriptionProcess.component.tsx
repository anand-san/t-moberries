import Stepper from "../../Components/Stepper";
import * as Steps from "./Steps";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./SubscriptionProcess.styles";
import { Container } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import { SubscriptionFormContext } from "../../Utility/useAppContextHook";
import SubscriptionProcessBehaviour from "./SubscriptionProcess.behaviour";
const stepsData = {
  "Select Subscription Parameters": {
    icon: <SettingsIcon />,
    component: <Steps.Parameters />,
  },
  Payment: {
    icon: <GroupAddIcon />,
    component: <Steps.PaymentData />,
  },
  Confirmation: {
    icon: <VideoLabelIcon />,
    component: <Steps.Confirmation />,
  },
};

const stepsLabel = Object.keys(stepsData);



function App() {
  const classes = useStyles();
  const { formData, setFormData, isLoading, subscriptionPrices, getFinalPrice } = SubscriptionProcessBehaviour();

  const footerLeft = (
    <div className={classes.footerLeft}>
      <span>Selected Plan: {`${formData.Duration} Months/${formData.Amount} GB`}</span>
      <span>Final Price: {`${isLoading ? "Fetching" : "$" + getFinalPrice(formData.Duration, formData.Amount, subscriptionPrices)}`}</span>
    </div>
  );

  return (
    <Container maxWidth="md">
      <Paper elevation={10} className={classes.root}>
        <SubscriptionFormContext.Provider value={{ formData, setFormData }}>
          <Stepper stepsData={stepsData} stepsLabel={stepsLabel} footerLeft={footerLeft} />
        </SubscriptionFormContext.Provider>
      </Paper>
    </Container>
  );
}

export default App;
